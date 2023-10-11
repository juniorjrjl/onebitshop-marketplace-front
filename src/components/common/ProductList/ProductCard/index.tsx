import React from "react";
import { Container, InfoLikeContainer, ProductImage, ProductInfoContainer, ProductPrice, ProductPriceTitleContainer, ProductTitle, PublishedText, SellerInfoContainer, SellerName } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import { Product } from "../../../../entities/Product";
import getDate from "../../../../utils/getDate";
import Like from "../../../Like";

interface DataProps {
    data: Product,
    favorite: boolean
}

const ProductCard = ({ data, favorite }: DataProps) =>{
    const navigation = useNavigation<PropsStack>()
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
                    <Like favorites={favorite} productId={data._id}/>
                </InfoLikeContainer>
            </ProductInfoContainer>
    </Container>
    )
}

export default ProductCard
