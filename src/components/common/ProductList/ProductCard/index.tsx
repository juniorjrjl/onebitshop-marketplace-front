import React from "react";
import { Container, InfoLikeContainer, LikeButton, LikeIcon, ProductImage, ProductInfoContainer, ProductPrice, ProductPriceTitleContainer, ProductTitle, PublishedText, SellerInfoContainer, SellerName } from "./styled";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import { Product } from "../../../../entities/Product";
import getDate from "../../../../utils/getDate";

const like = require('../../../../../assets/icons/like.png')
const liked = require('../../../../../assets/icons/liked.png')

interface DataProps {
    data: Product
}

const ProductCard = ({ data }: DataProps) =>{
    const navigation = useNavigation<PropsStack>()
    console.log(data.images[0].url)
    return(
        <Container activeOpacity={0.85} onPress={() => navigation.navigate("Product", {...data})}>
        <ProductImage source={{uri: data.images[0].url}} />
            <ProductInfoContainer>
                <ProductPriceTitleContainer>
                    <ProductPrice>R$ {parseFloat(data.price).toFixed(2)}</ProductPrice>
                    <ProductTitle numberOfLines={2}>{data.name}</ProductTitle>
                </ProductPriceTitleContainer>
                <InfoLikeContainer>
                    <SellerInfoContainer>
                        <PublishedText>Publicado em {getDate(data.createdAt)} por:</PublishedText>
                        <SellerName>{data.seller.name}</SellerName>
                    </SellerInfoContainer>
                    {data ? 
                        (<LikeButton onPress={() => Alert.alert("Você deu like")}>
                            <LikeIcon source={liked}/>
                        </LikeButton>) : 
                        (<LikeButton onPress={() => Alert.alert("Você deu dislike")}>
                            <LikeIcon source={like}/>
                        </LikeButton>)}
                </InfoLikeContainer>
            </ProductInfoContainer>
    </Container>
    )
}

export default ProductCard
