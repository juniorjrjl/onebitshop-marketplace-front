import React from "react";
import { Container, Image, LikeButtom, Price, SellerLikeContainer, SellerName, TextContainer, Title } from "./styled";
import { LikeIcon } from "../../common/ProductList/ProductCard/styled";
import { Product } from "../../../entities/Product";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import getDate from "../../../utils/getDate";

const likeIcon = require('../../../../assets/icons/like.png')

interface ProductProps{
    product: Product
}

const CategoryCard = ({product}: ProductProps) =>{
    const navigation = useNavigation<PropsStack>();
    console.log(product)
    return(
        <Container onPress={() => navigation.navigate('Product', {...product})}>
            <Image source={{ uri: product.images[0].url }}/>
            <TextContainer>
                <Price>R$ {parseFloat(product.price).toFixed(2)}</Price>
                <Title>{product.name}</Title>
                <SellerLikeContainer>
                    <SellerName>Publicado em{'\n'}{getDate(product.createdAt)}</SellerName>
                    <LikeButtom>
                        <LikeIcon source={likeIcon}/>
                    </LikeButtom>
                </SellerLikeContainer>
            </TextContainer>
        </Container>
    )
}

export default CategoryCard
