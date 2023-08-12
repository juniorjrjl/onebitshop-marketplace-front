import React from "react";
import { Container, Image, LikeButtom, Price, SellerLikeContainer, SellerName, TextContainer, Title } from "./styled";
import { LikeIcon } from "../../common/ProductList/ProductCard/styled";
import { Product } from "../../../entities/Product";

const likeIcon = require('../../../../assets/icons/like.png')

interface ProductProps{
    product: Product
}

const CategoryCard = ({product}: ProductProps) =>{
    return(
        <Container>
            <Image source={{ uri: product.images[0].url }}/>
            <TextContainer>
                <Title>{product.name}</Title>
                <Price>{product.price}</Price>
                <SellerLikeContainer>
                    <SellerName>{product.seller.name}</SellerName>
                    <LikeButtom>
                        <LikeIcon source={likeIcon}/>
                    </LikeButtom>
                </SellerLikeContainer>
            </TextContainer>
        </Container>
    )
}

export default CategoryCard
