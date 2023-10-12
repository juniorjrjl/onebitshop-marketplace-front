import React, { useEffect, useState } from "react";
import { AdsContainer, Container, DenouceTexy } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import UserAds from "../../components/UserSellerProfile/UserAds";
import DefaultButton from "../../components/common/DefaultButton";
import NavBar from "../../components/common/NavBar";
import { useNavigation } from "@react-navigation/native";
import { PropsNavigationStack, PropsStack } from "../../routes";
import { Alert } from "react-native";
import useAuth from "../../hook/useAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import profileService from "../../services/profileService";
import Loader from "../Loader";
import { User } from "../../entities/User";

type Props = NativeStackScreenProps<PropsNavigationStack, 'SellerProfile'>

const SellerProfile = ( { route } : Props) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [userInfo, setUserInfo] = useState<User>()
    const navigation = useNavigation<PropsStack>()

    const { token } = useAuth()

    const handleGetInfos =async () => {
        const data = await profileService.getSellerProfile(route.params.sellerId);
        setUserInfo(data.data)
        setLoading(false)
    }

    useEffect(() => { handleGetInfos() }, [])

    if (!userInfo || loading) return <Loader />

    return(
        <>
            <Container contentContainerStyle={{paddingBottom: 180}}>
                <DefaultTitle fontSize={20}>
                    Perfil do Vendedor
                </DefaultTitle>
                <ProfileInfo userInfo={userInfo}/>
                <AdsContainer>
                    <UserAds products={userInfo.products} seller={true}/>
                </AdsContainer>
                <DefaultButton buttonType="primary" marginVertical={10} buttonHandle={() => {}}>Fale com o Vendedor</DefaultButton>
                <DenouceTexy onPress={() => {
                    navigation.navigate(token ? 'Denounce': 'Login')
                    Alert.alert("Sua denúncia foi enviada e será analisada pela nossa equipe")
                    }}>
                    Denunciar Anuncio
                </DenouceTexy>
            </Container>
            <NavBar />
        </>
    )
}

export default SellerProfile
