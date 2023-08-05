import React from "react";
import { Container, Image, InfoContainer, SellerTrashContainer, Price, Publishedtext, SellerContainer, SellerName, Title, TrashButton, TrashImage } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";

const trashIcon = require('../../../../../assets/icons/trash.png')

const ChatCard = ({item}: any) => {
    const navigation = useNavigation<PropsStack>();

    return (
        <Container onPress={() => {}}>
            <Image source={{ uri: item.product.images[0].url }}/>
            <InfoContainer>
                <Price>R$ {item.product.price}</Price>
                <Title numberOfLines={2}>{item.product.name}</Title>
                <SellerTrashContainer>
                    <SellerContainer>
                        <Publishedtext>Publicado em {item.product.createdAt} por:</Publishedtext>
                        <SellerName>{item.seller}</SellerName>
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
