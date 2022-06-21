import Logo from "../../Components/Logo";
import Input from "../../Components/Inputs/Input";
import { ButtonLogin, ButtonRegister, Container, FormLogin } from "./style";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom"
import Api from "../../Services/Api";
import { toast } from "react-toastify";
function Login(){
    
    const linkPage = useHistory()
    
    const SchemaLogin = yup.object().shape({
        email: yup.string().email("Email Invalido").required("Campo Obrigatório"),
        password: yup.string().required("Campo Obrigatório")
    })
    
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(SchemaLogin)
    })
    
    async function SubmitLogin(data){
        await Api.post("/sessions",data)
        .then(res => {toast.success("Login Realizado com Sucesso");
        localStorage.setItem("token_hub",res.data.token);setTimeout(()=>{linkPage.push(`/dashboard:${res.data.user.id}`)},5000)})
        .catch(res => {console.error(res);toast.error("Email ou Senha Incorretos")})
    }
    
    const LoginObj = (data) => SubmitLogin(data)
    
    return(
        <Container>
            <Logo/>
            <FormLogin onSubmit={handleSubmit(LoginObj)}>
                <h2>Login</h2>
                <Input nome="Email" placeholder="Digite aqui seu email" type="email" register={register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
            <Input nome="Senha" type="password" placeholder="Digite aqui seu senha" register={register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
            <ButtonLogin type="submit">Login</ButtonLogin>
            <h5>Ainda não possui uma conta?</h5>
            <ButtonRegister type="button" onClick={(e)=>{e.preventDefault();linkPage.push("/register")}}>Cadastre-se</ButtonRegister>
            </FormLogin>
        </Container>
    )  
}
export default Login