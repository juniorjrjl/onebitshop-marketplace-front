import React from "react";
import { InputContainer } from "../styled";
import { AddressText, Input } from "./styled";
import { Alert } from "react-native";
import DefaultButton from "../../../common/DefaultButton";

const FieldsAbled = () => {
    return(
        <>
            <InputContainer>
                <Input value="Junior"/>
            </InputContainer>
            <InputContainer>
                <Input value="junior@junior.com"/>
            </InputContainer>
            <InputContainer>
                <Input value="(25) 87956-8988"/>
            </InputContainer>
            <InputContainer>
                <Input value="DropDown"/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Senha" placeholderTextColor="#c0c0c1" secureTextEntry value="********"/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Nova Senha" placeholderTextColor="#c0c0c1" secureTextEntry value="********"/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Confirmar Nova Senha" placeholderTextColor="#c0c0c1" secureTextEntry value="********"/>
            </InputContainer>

            <AddressText onPress={() => Alert.alert("Text Clicavel")}>Gerenciar Endereços</AddressText>
            <DefaultButton buttonHandle={() => Alert.alert("Salvar Alterações")} buttonType="primary" marginVertical={10}>Salvar</DefaultButton>
        </>
    )
}

export default FieldsAbled