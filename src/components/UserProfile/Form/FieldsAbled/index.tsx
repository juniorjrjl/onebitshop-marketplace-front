import React, { useState } from "react";
import { InputContainer } from "../styled";
import { AddressText, Input } from "./styled";
import { Alert } from "react-native";
import DefaultButton from "../../../common/DefaultButton";
import DropDownComponent from "../../../common/DropDownComponent";

const FieldsAbled = () => {

    const [select, setSelect] = useState("");

    const Data = [{ value: "Endereço de teste", disabled: true }]

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
            <DropDownComponent data={Data} placeholder="Seus endereços" setSelected={setSelect} emptyMessage="Sem endereços"/>
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