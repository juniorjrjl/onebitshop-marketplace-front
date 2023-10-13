import React, { useEffect, useState } from "react"
import { Button, Container, DenounceSeller, InfoContainer, InteractionContainer, Price, Share, SubTitle, SubtitleContainer, Title } from "./styled";
import BackIcon from "../../components/common/BackIcon";
import Carousel from "../../components/Product/Carousel";
import Description from "../../components/Product/Description";
import SellerInfo from "../../components/Product/SellerInfo";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsNavigationStack, PropsStack } from "../../routes";
import useAuth from "../../hook/useAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import getDate from "../../utils/getDate";
import favoriteService from "../../services/favoriteService";
import { Product as ProductType } from "../../entities/Product";
import Like from "../../components/Like";
import AsyncStorage from "@react-native-async-storage/async-storage";
import chatService from "../../services/chatService";

const share = require('../../../assets/icons/share.png')

type Props = NativeStackScreenProps<PropsNavigationStack, "Product">

const Product = ({ route } : Props) =>{
    const [liked, setLiked] = useState<boolean>(false)
    const navigation = useNavigation<PropsStack>()
    const { token } = useAuth()

    const handleChatSeller = async () => {
        const user = await AsyncStorage.getItem('user');
        const { _id } = JSON.parse(user || '');

        const initialMessage = `Olá, quero saber mais sobre o seu produto, ${route.params.seller.name}`;
        const params = { 
            product: route.params._id,
            seller: route.params.seller._id,
            initialMessage,
        };

        const res = await chatService.startChat(params);

        if (res.status <400){
            navigation.navigate('Chat', 
            { 
                _id: res.data._id,
                product: route.params,
                sellerName: route.params.seller.name,
                sellerId: route.params.seller._id,
                buyerId: _id,
                messages: 
                [
                    {
                        content: initialMessage,
                        receiver: route.params.seller._id,
                        sender: _id
                    }
                ]
            })
        }
    }

    const handleGetFavorites = async () => {
        if (!token) return

        const res = await favoriteService.getFavorite()

        const isLiked = res.data.map((val: ProductType) => val._id)

        const liked = isLiked.some((liked: string) => route.params._id === liked)
        setLiked(liked)
    }

    useEffect(() => { handleGetFavorites() }, [route])

    return(
        <Container contentContainerStyle={{ paddingBottom: 50 }}>
            <BackIcon marginLeft={30}/>
            <Title>{route.params.name}</Title>
            <SubtitleContainer>
                <SubTitle>Publicado em {getDate(route.params.createdAt)}</SubTitle>
                <SubTitle>{route.params.address.city}, {route.params.address.state}</SubTitle>
            </SubtitleContainer>
            <Carousel images={route.params.images}/>
            <InfoContainer>
                <Price>R$ {parseFloat(route.params.price).toFixed(2)}</Price>
                <InteractionContainer>
                    <Like favorites={liked} productId={route.params._id} />
                    <Button>
                        <Share source={share}/>
                    </Button>
                </InteractionContainer>
            </InfoContainer>
            <Description>{route.params.description}</Description>
            <SellerInfo product={route.params}/>
            <DefaultButton buttonType="primary" marginVertical={0} buttonHandle={handleChatSeller}>Fale com o Vendedor</DefaultButton>
            <DenounceSeller onPress={() => navigation.navigate(token ? 'Denounce': 'Login')}>Denunciar Vendedor</DenounceSeller>
        </Container>
    );
};

export default Product;
