import { InputStyle,Label,DivInput } from "./style"
function Input({nome,placeholder,type,register}){
    return(
    <DivInput>
        <Label>{nome}</Label>
        <InputStyle placeholder={placeholder} type={type} {...register}></InputStyle>
    </DivInput>
    )
}

export default Input