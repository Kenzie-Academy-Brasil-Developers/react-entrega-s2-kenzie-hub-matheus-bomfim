import Input from "../../Components/Inputs/Input"
import Logo from "../../Components/Logo/index"
import { ButtonBack, ButtonSubmit, ContainerStyle, Form} from "./style"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useHistory} from "react-router-dom"
import Api from "./../../Services/Api"
import { toast } from "react-toastify"
function Register(){
    const linkPage = useHistory()
    const SchemaValid = yup.object().shape({
        name: yup.string().min(3,"Min de 3 Caracteres").required("Campo Obrigatório"),
        email: yup.string().email("Email Invalido").required("Campo Obrigatório"),
        password: yup.string().min(6,"Mínimo de 6 Caracteres,Com Uma Letra Maíuscula e Mínuscula e um Número").required("Campo Obrigatório").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/,"Mínimo de 6 Caracteres,Com Uma Letra Maíuscula e Mínuscula e um Número"),
        passwordValid: yup.string().oneOf([yup.ref("password")],"Senha não Condiz").required("Campo Obrigatório"),
        contact: yup.string().required("Campo Obrigatório"),
        bio: yup.string().required("Campo Obrigatório")
    })
    const{register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(SchemaValid)
    })
    
    async function SubmitRegister(data){
        await Api.post("/users",data).then(res=>{toast.success("Cadastro Realizado Com Sucesso")
        ;setTimeout(()=>{linkPage.push(`/`)},5000)})
        .catch(err => {console.error(err);err.response.data.message === "Email already exists"?toast.error("Email já existente"):toast.error("Erro,Cadastro Incompleto")})
    }

    const RegiterObj = (data) => {SubmitRegister(data)}
    return(
        <ContainerStyle>
            <div>
            <Logo>Kenzie hub</Logo>
            <ButtonBack onClick={(e)=>{e.preventDefault();linkPage.push("/")}}>Voltar</ButtonBack>
            </div>
            
            const 
            <Form onSubmit={handleSubmit(RegiterObj)}>
                <div>
                <h2>Crie Sua Conta</h2>
                <span>Rapido e grátis, vamos nessa</span>
                </div>
            <Input nome="Nome" placeholder="Digite aqui seu nome" register={register("name")}/>
            {errors.name && <p>{errors.name.message}</p>}
            <Input nome="Email" placeholder="Digite aqui seu email" register={register("email")}/>
            {errors.email && <p>{errors.email.message}</p>}
            <Input nome="Senha" type="password" placeholder="Digite aqui seu senha - Min 6 Caracters e 1 caracter maiúsculo" register={register("password")}/>
            {errors.password && <p>{errors.password.message}</p>}
            <Input nome="Confirmar Senha" type="password" placeholder="Digite novamente sua senha" register={register("passwordValid")}/>
            {errors.passwordValid && <p>{errors.passwordValid.message}</p>}
            <Input nome="Bio" placeholder="Fale sobre você" register={register("bio")}/>
            {errors.bio && <p>{errors.bio.message}</p>}
            <Input nome="Contato" placeholder="Opção de contato" register={register("contact")}/>
            {errors.contact && <p>{errors.contact.message}</p>}
            <select {...register("course_module")}>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>
            <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
            </Form>
        </ContainerStyle>
    )
}

export default Register