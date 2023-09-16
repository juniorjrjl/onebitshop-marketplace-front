import React, { SetStateAction, useState } from "react"
import { Input, InputContainer, InputMask } from "./styled"

interface Fields {
    name: string;
    email: string;
    password: string;
    phone: string;
    confirmPassword: string;
}

interface props {
    fields: Fields
    setFields: React.Dispatch<SetStateAction<Fields>>
}

const Form = ({fields, setFields}: props) =>{
    
    return(
        <>
            <InputContainer>
                <Input placeholder="Nome completo" placeholderTextColor="#c0c0c1" 
                    value={fields.name} onChangeText={val => setFields({...fields, name: val})}/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Email" placeholderTextColor="#c0c0c1" 
                    value={fields.email} onChangeText={val => setFields({...fields, email: val})}/>
            </InputContainer>
            <InputContainer>
                <InputMask type="cel-phone" options={{ maskType: "BRL", withDDD: true, dddMask: '(99) '}} 
                    value={fields.phone} onChangeText={val => setFields({...fields, phone: val})}
                    placeholder="Celular" placeholderTextColor="#c0c0c1"/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Senha" secureTextEntry placeholderTextColor="#c0c0c1" 
                    value={fields.password} onChangeText={val => setFields({...fields, password: val})}/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Confirmação de senha" secureTextEntry placeholderTextColor="#c0c0c1" 
                    value={fields.confirmPassword} onChangeText={val => setFields({...fields, confirmPassword: val})}/>
            </InputContainer>
        </>
    )
}

export default Form
