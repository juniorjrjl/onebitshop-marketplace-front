import React from "react";
import { Container, Image, LikeButtom, Price, SellerLikeContainer, SellerName, TextContainer, Title } from "./styled";
import { Product } from "../../../screens/Categories";
import { LikeIcon } from "../../common/ProductList/ProductCard/styled";

const likeIcon = require('../../../../assets/icons/like.png')

interface ProductProps{
    product: Product
}

const CategoryCard = ({product}: ProductProps) =>{
    return(
        <Container>
            <Image source={{ uri: product.productImage }}/>
            <TextContainer>
                <Title>{product.title}</Title>
                <Price>{product.price}</Price>
                <SellerLikeContainer>
                    <SellerName>Junior</SellerName>
                    <LikeButtom>
                        <LikeIcon source={likeIcon}/>
                    </LikeButtom>
                </SellerLikeContainer>
            </TextContainer>
        </Container>
    )
}

export default CategoryCard