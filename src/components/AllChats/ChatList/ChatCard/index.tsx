import React from "react";
import { Container, Image, InfoContainer, SellerTrashContainer, Price, Publishedtext, SellerContainer, SellerName, Title, TrashButton, TrashImage } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import { Chat } from "../../../../entities/Message";
import getDate from "../../../../utils/getDate";

const trashIcon = require('../../../../../assets/icons/trash.png')

interface Props {
    data: Chat;
}

const ChatCard = ({data}: Props) => {
    const navigation = useNavigation<PropsStack>();

    return (
        <Container onPress={() => navigation.navigate('Chat', 
        {
            _id: data._id,
            product: data.product,
            sellerName: data.seller.name,
            sellerId: data.seller._id,
            messages: data.messages,
            buyerId: data.buyer._id
        })}>
            <Image source={{ uri: data.product.images[0].url }}/>
            <InfoContainer>
                <Price>R$ {data.product.price}</Price>
                <Title numberOfLines={2}>{data.product.name}</Title>
                <SellerTrashContainer>
                    <SellerContainer>
                        <Publishedtext>Publicado em {getDate(data.product.createdAt)} por:</Publishedtext>
                        <SellerName>{data.seller.name}</SellerName>
                    </SellerContainer>
                    <TrashButton onPress={() => {}}>
                        <TrashImage source={trashIcon}/>
                    </TrashButton>
                </SellerTrashContainer>
            </InfoContainer>
        </Container>
    )
}

export default ChatCard;
