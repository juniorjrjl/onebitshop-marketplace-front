import React from "react";
import { Container, Image, InfoContainer, SubTitle, Title } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";

const AdCard = ({product}: any) =>{

    const navigation = useNavigation<PropsStack>()

    return(
        <Container onPress={() => navigation.navigate('Product')}>
            <Image source={{ uri: product.images[0].url }}/>
            <InfoContainer>
                <Title numberOfLines={2}>{product.name}</Title>
                <SubTitle numberOfLines={2}>R$ {product.price}</SubTitle>
            </InfoContainer>
        </Container>
    )
}

export default AdCard;
