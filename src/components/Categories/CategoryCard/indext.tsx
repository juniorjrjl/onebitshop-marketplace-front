import React from "react";
import { Container, Image, Price, SellerLikeContainer, SellerName, TextContainer, Title } from "./styled";
import { Product } from "../../../entities/Product";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import getDate from "../../../utils/getDate";
import Like from "../../Like";

interface ProductProps{
    product: Product
    favorite: boolean
}

const CategoryCard = ({ product, favorite }: ProductProps) =>{
    const navigation = useNavigation<PropsStack>();
    return(
        <Container onPress={() => navigation.navigate('Product', {...product})}>
            <Image source={{ uri: product.images[0].url }}/>
            <TextContainer>
                <Price>R$ {parseFloat(product.price).toFixed(2)}</Price>
                <Title>{product.name}</Title>
                <SellerLikeContainer>
                    <SellerName>Publicado em{'\n'}{getDate(product.createdAt)}</SellerName>
                    <Like favorites={favorite} productId={product._id}/>
                </SellerLikeContainer>
            </TextContainer>
        </Container>
    )
}

export default CategoryCard
