import React, { useEffect, useState } from "react";
import { Container, Input, InputContainer, InputMask } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import DefaultButton from "../../components/common/DefaultButton";
import axios from "axios";
import { Alert } from "react-native";
import addressService from "../../services/addressService";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const AddAddress = () => {
    const navigation = useNavigation<PropsStack>()
    const [fields, setFields] = useState({
        cep: "",
        street: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        state: ""
    })

    const handleGetAddress = async () =>{
        const { data } = await axios.get(`https://viacep.com.br/ws/${fields.cep}/json/`)
        setFields({...fields, street: data.logradouro, state: data.uf, city: data.localidade, district: data.bairro})
    }

    const handleAddAddress=async () => {
        if (fields.cep.length < 8){
            Alert.alert('Você precisa preeencher o cep')
            return 
        }else if( !fields.city || !fields.district || !fields.number || !fields.state || !fields.street){
            Alert.alert("Preencha corretamente o endereço")
        }

        const params = fields;
        const data = await addressService.addAddress(params);

        if (data.status === 201){
            navigation.navigate('AllAddress', { newAddress: true });
        }
    }

    return(
        <Container contentContainerStyle={{ paddingBottom: 40 }}>
            <DefaultTitle fontSize={20}>Cadastrar Endereço</DefaultTitle>
            <InputContainer>
                <InputMask type='zip-code' placeholder='Cep' placeholderTextColor='#c0c0c1' 
                    value={fields.cep} onChangeText={(value) => setFields({... fields, cep: value.replace(/[^0-9]/g, '')})} onBlur={handleGetAddress}/>
            </InputContainer>
            <InputContainer>
                <Input placeholder='Rua' placeholderTextColor='#c0c0c1' 
                    value={fields.street} onChangeText={(value) => setFields({... fields, street: value})}/>
            </InputContainer>
            <InputContainer>
                <Input placeholder='Numero' placeholderTextColor='#c0c0c1' keyboardType="number-pad" 
                    value={fields.number} onChangeText={(value) => setFields({... fields, number: value})}/>
            </InputContainer>
            <InputContainer>
                <Input placeholder='Complemento' placeholderTextColor='#c0c0c1' 
                    value={fields.complement} onChangeText={(value) => setFields({... fields, complement: value})}/>
            </InputContainer>
            <InputContainer>
                <Input placeholder='Bairro' placeholderTextColor='#c0c0c1' 
                    value={fields.district} onChangeText={(value) => setFields({... fields, district: value})}/>
            </InputContainer>
            <InputContainer>
                <Input placeholder='Cidade' placeholderTextColor='#c0c0c1' 
                    value={fields.city} onChangeText={(value) => setFields({... fields, city: value})}/>
            </InputContainer>
            <InputContainer>
                <Input placeholder='Estado' placeholderTextColor='#c0c0c1' maxLength={2} 
                    value={fields.state} onChangeText={(value) => setFields({... fields, state: value})}/>
            </InputContainer>
            <DefaultButton buttonType="primary" buttonHandle={handleAddAddress} marginVertical={30}>Cadastrar</DefaultButton>
        </Container>
    )
}

export default AddAddress
