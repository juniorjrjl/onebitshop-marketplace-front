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
import AsyncStorage from "@react-native-async-storage/async-storage";
import chatService from "../../services/chatService";

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

    if (!userInfo || loading) return <Loader />

    useEffect(() => { handleGetInfos() }, [])

    const handleChatSeller = async () => {
        if (userInfo.products.length <= 0){
            Alert.alert('Esse vendedor não tem produtos')
        }

        const user = await AsyncStorage.getItem('user');
        const { _id } = JSON.parse(user || '');

        const initialMessage = `Olá, quero saber mais sobre o seu produto, ${userInfo.name}`;
        const params = { 
            product: userInfo.products[0]._id,
            seller: userInfo._id,
            initialMessage,
        };

        const res = await chatService.startChat(params);

        if (res.status <400){
            navigation.navigate('Chat', 
            {
                _id: res.data._id,
                product: userInfo.products[0],
                sellerName: userInfo.name,
                sellerId: userInfo._id,
                buyerId: _id,
                messages: 
                [
                    {
                        content: initialMessage,
                        receiver: userInfo._id,
                        sender: _id
                    }
                ]
            })
        }
    }

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
                <DefaultButton buttonType="primary" marginVertical={10} buttonHandle={handleChatSeller}>Fale com o Vendedor</DefaultButton>
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
