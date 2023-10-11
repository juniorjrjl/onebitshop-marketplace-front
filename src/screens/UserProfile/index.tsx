import React, { useEffect, useState } from "react"
import { AddressText, Container, DeleteAcc, LogOutBtn, LogOutText } from "./styled"
import NavBar from "../../components/common/NavBar"
import DefaultTitle from "../../components/common/DefaultTitle"
import ProfileInfo from "../../components/common/ProfileInfo"
import Form from "../../components/UserSellerProfile/Form"
import UserAds from "../../components/UserSellerProfile/UserAds"
import { Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { PropsStack } from "../../routes"
import useAuth from "../../hook/useAuth"
import profileService from "../../services/profileService"
import Loader from "../Loader"
import { User } from "../../entities/User"

const UserProfile = () =>{
    const { logout } = useAuth()
    const navigation = useNavigation<PropsStack>()
    const [userInfo, setUserInfo] = useState<User>()

    const handleUserInfo =async () => {
        const { data } = await profileService.getUserProfile();
        setUserInfo(data)
    }

    useEffect(() => {handleUserInfo()}, [])

    const handleDeleteAcc = () =>{
        Alert.alert('Você tem certeza?', 'Ao fazer isso você excluira permanentemente sua conta',
        [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Conta excluida com sucesso")
            },
            {
                text: 'Não'
            }
        ])
    }

    if(!userInfo) return <Loader />

    return(
        <>
            <Container contentContainerStyle={{ paddingBottom: 180 }}>
                <DefaultTitle fontSize={20}>Meu Perfil</DefaultTitle>
                <ProfileInfo userInfo={userInfo}/>
                <Form userInfo={userInfo}/>
                
                <AddressText onPress={() => navigation.navigate('AllAddress', { newAddress: false })}>Gerenciar Endereços</AddressText>

                {/*<UserAds products={} seller={false}/ >*/}

                <LogOutBtn onPress={logout}>
                    <LogOutText>Sair da sua conta</LogOutText>
                </LogOutBtn>
                <DeleteAcc onPress={handleDeleteAcc}>
                    Excluir conta
                </DeleteAcc>
            </Container>
            <NavBar />
        </>
    )
}

export default UserProfile
