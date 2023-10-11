import React, { useEffect, useState } from "react";
import { InputContainer } from "../styled";
import { Input } from "./styled";
import { Alert } from "react-native";
import DefaultButton from "../../../common/DefaultButton";
import DropDownComponent from "../../../common/DropDownComponent";
import { Address, User } from "../../../../entities/User";
import addressService from "../../../../services/addressService";
import profileService from "../../../../services/profileService";
import useAuth from "../../../../hook/useAuth";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import Loader from "../../../../screens/Loader";

interface Props{
    userInfo: User
}

const FieldsAbled = ({ userInfo } : Props) => {
    const navigation = useNavigation<PropsStack>()
    const [fields, setFields] = useState({
        name: '',
        email: '',
        phone: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    const [select, setSelect] = useState('');
    const [address, setAddress] = useState([])
    const [loading, setLoading] = useState<boolean>(true)

    const { logout } = useAuth()

    const handleSetInfos =async () => {
        const res = await addressService.getAddress();

        const value = res.data.map((address: Address) => ({ value: `${address.street} Nº ${address.number}`, disable: true}))
        setAddress(value)
        setFields({
            ...fields, 
            name: userInfo.name,
            email: userInfo.email,
            phone: userInfo.phone
        })
    }

    const handleUpdateInfo =async () => {
        const res =  await profileService.updateUserProfile(fields)

        if (res.status === 400) {
            Alert.alert('Esse e-mail pertence a outra conta')
        }

        if (fields.email !== userInfo.email) logout()

        navigation.navigate('Home')
        Alert.alert('Dados do usuário atualizado com sucesso')
        setLoading(false)

    }

    useEffect(() => { handleSetInfos() },[])

    if (!loading) return <Loader />

    return(
        <>
            <InputContainer>
                <Input value={fields.name} onChangeText={val => setFields({...fields, name: val})}/>
            </InputContainer>
            <InputContainer>
                <Input value={fields.email} onChangeText={val => setFields({...fields, email: val})}/>
            </InputContainer>
            <InputContainer>
                <Input value={fields.phone} onChangeText={val => setFields({...fields, phone: val})}/>
            </InputContainer>
            <DropDownComponent data={address} placeholder="Seus endereços" setSelected={setSelect} emptyMessage="Sem endereços" saveMethod="value"/>
            <InputContainer>
                <Input placeholder="Senha" placeholderTextColor="#c0c0c1" secureTextEntry value="********"/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Nova Senha" placeholderTextColor="#c0c0c1" secureTextEntry value="********"/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Confirmar Nova Senha" placeholderTextColor="#c0c0c1" secureTextEntry value="********"/>
            </InputContainer>

            <DefaultButton buttonHandle={handleUpdateInfo} buttonType="primary" marginVertical={10}>Salvar</DefaultButton>
        </>
    )
}

export default FieldsAbled
