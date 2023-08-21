import React from "react";
import { AdsContainer, Container, DenouceTexy } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import UserAds from "../../components/UserSellerProfile/UserAds";
import DefaultButton from "../../components/common/DefaultButton";
import NavBar from "../../components/common/NavBar";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import { Alert } from "react-native";
import useAuth from "../../hook/useAuth";

const Data = [
    {
        id: "1",
        productImage:"https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
        price: "2600",
        title: "Playstation 4 novo com 3 jogos acompanhando",
        publishedData: "14/02/23",
    },
    {
        id: "2",
        productImage:"https://m.media-amazon.com/images/I/61hJ40qZKKL._AC_SX679_.jpg",
        price: "2600",
        title: "Playstation 5 novo com 1 jogo acompanhando",
        publishedData: "14/02/23",
    },
    {
        id: "3",
        productImage:"https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
        price: "2600",
        title: "Playstation 4 novo com 2 jogos acompanhando",
        publishedData: "14/02/23",
    },
];

const SellerProfile = () => {

    const navigation = useNavigation<PropsStack>()

    const { token } = useAuth()

    return(
        <>
            <Container contentContainerStyle={{paddingBottom: 180}}>
                <DefaultTitle fontSize={20}>
                    Perfil do Vendedor
                </DefaultTitle>
                <ProfileInfo />
                <AdsContainer>
                    <UserAds products={Data} seller={true}/>
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
