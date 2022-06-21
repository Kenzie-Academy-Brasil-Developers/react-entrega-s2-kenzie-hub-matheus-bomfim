import Logo from "../../Components/Logo";
import { Article, ButtonBackDash, ContainerAddOrEdit, DivInfo, FormAdd, Header, HeaderAddOrEdit, Items, Main, Para, UlItems } from "./style";
import {useHistory, useParams} from "react-router-dom"
import Input from "../../Components/Inputs/Input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import Api from "../../Services/Api";
import { toast } from "react-toastify";

function DashBoard(){
    
    const linkage = useHistory()

    const param = useParams()
    
    if(!localStorage.getItem("token_hub")){linkage.push("/")}
    
    const token = localStorage.getItem("token_hub")
    const id = param.id

    const [data,setData] = useState({})
    const [showAdd,setShowAdd] = useState(false)
    const [showEdit,setShowEdit] = useState(false)
    const [idTech,setIdTech] = useState("")
    
    const validTitle = showAdd ? yup.string().required("Campo Obrigatório") : yup.string()
    
    const ValidForm = yup.object().shape({
        title: validTitle ,
        status: yup.string().required("Campo Obrigatório") 
    })

    
    
    const {register,handleSubmit,formState: {errors}} = useForm({
        resolver: yupResolver(ValidForm)
    })
    
    
    const formEditAdd = (data) => {
        showAdd ? SubmitApiAdd(data) : SubmitApiEdit(data)
    }
    

    const SubmitApiAdd = (data) => 
        Api.post("/users/techs",data,{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {toast.success("Adicionado com Sucesso");setShowAdd(false)}).catch(err => {console.log(err);toast.error("Tecnologia Já Cadastrada")});

    
    const SubmitApiEdit = (data) => Api.put(`/users/techs/${idTech}`,data,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(res => {toast.success("Editado com Sucesso");setShowEdit(false)}).catch(err => console.log(err))

    
    const SubmitApiDelete = () => Api.delete(`/users/techs/${idTech}`,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(res => {toast.success("Excluido Com Sucesso");setShowEdit(false)}).catch(err => console.log(err))
    
    
    useEffect( () => {
        Api.get(`/users/${id.slice(1)}`).then(res => setData(res.data)).catch(err => console.log(err))

    })
 
    return(
        <>
        <Header>
            <Logo/>
            <ButtonBackDash onClick={(e)=>{e.preventDefault();linkage.push("/");localStorage.removeItem("token_hub")}}>Sair</ButtonBackDash>
        </Header>
        <Article>
            <h2>Olá,{data.name}</h2>
            <Para>{data.course_module}</Para>
        </Article>
        <Main>
            <DivInfo>
                <h2>Tecnologias</h2>
                <button onClick={(e)=>{e.preventDefault();setShowAdd(true)}}>+</button>
            </DivInfo>
            
            <ContainerAddOrEdit dis={showAdd || showEdit}>
                <HeaderAddOrEdit>
                    <h2>{showAdd ? "Cadastrar Tecnologia" : "Tecnologia Detalhes"}</h2>
                    <button onClick={(e)=>{e.preventDefault();setShowAdd(false);setShowEdit(false)}}>X</button>
                </HeaderAddOrEdit>
                <FormAdd onSubmit={handleSubmit(formEditAdd)}>
                    {showAdd ? 
                    <Input nome="Nome" placeholder="Digite Aqui sua Tecnologia" register={register("title")}/>
                : <h3>Atualize Seu Status</h3>}
                    {errors.title && <span>{errors.title.message}</span>}
                    <select label="Selecionar Status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    {showAdd ? <button type="submit">Cadastrar Tecnologia</button> : 
                    <div className="buttons">
                        <button className="saveSubmit" type="submit">Salvar Alterações</button>
                        <button className="trash" onClick={(e)=>{e.preventDefault();SubmitApiDelete()}} >Excluir</button>
                    </div>}
                </FormAdd>
            </ContainerAddOrEdit>

            <UlItems>
               {data.techs && data.techs.map((data)=>
                    (
                        <Items key={data.id} onClick={(e)=>{e.preventDefault();setShowEdit(true);setIdTech(data.id)}}>
                        <h3>{data.title}</h3>
                        <div>
                        <span>{data.status}</span>
                        <span className="edit">Editar</span>
                        </div>
                    </Items>
                    )
               )}
                
            </UlItems>
        </Main>
        </>
    )
}
export default DashBoard