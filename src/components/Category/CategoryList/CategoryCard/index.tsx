import React from "react";
import { Button, Container, Image, InfoContainer, Like, LikeContainer, Price, PublishedText, Title } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import { Product } from "../../../../entities/Product";

const likeImg = require('../../../../../assets/icons/like.png')

interface Props{
    product: Product;
}

const CategoryCard = ({ product }: Props) => {

    const navigation = useNavigation<PropsStack>()

    return(
        <Container activeOpacity={0.85} onPress={() => navigation.navigate("Product", {...product})}>
            <Image source={{ uri: product.images[0].url }}/>
            <InfoContainer>
                <Price>{product.price}</Price>
                <Title numberOfLines={2}>{product.name}</Title>
                <LikeContainer>
                    <PublishedText>
                        Publicado em{'\n'}{product.createdAt}
                    </PublishedText>
                    <Button onPress={() => {}} activeOpacity={0.85}>
                        <Like source={likeImg} />
                    </Button>
                </LikeContainer>
            </InfoContainer>
        </Container>
    )
}

export default CategoryCard
