import React, { useState } from "react"
import { Input, InputContainer, InputMask } from "./styled"

const Form = () =>{
    const [phone, setPhone] = useState("")

    return(
        <>
            <InputContainer>
                <Input placeholder="Nome completo" placeholderTextColor="#c0c0c1"/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Email" placeholderTextColor="#c0c0c1"/>
            </InputContainer>
            <InputContainer>
                <InputMask type="cel-phone" options={{ maskType: "BRL", withDDD: true, dddMask: '(99) '}} value={phone} onChangeText={(v) =>setPhone(v)}
                    placeholder="Celular" placeholderTextColor="#c0c0c1"/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Senha" secureTextEntry placeholderTextColor="#c0c0c1"/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Confirmação de senha" secureTextEntry placeholderTextColor="#c0c0c1"/>
            </InputContainer>
        </>
    )
}

export default Form