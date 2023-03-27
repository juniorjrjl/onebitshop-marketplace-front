import React from "react";
import { Alert, FlatList, ListRenderItem } from 'react-native'
import { Container, InfoLikeContainer, LikeButton, LikeIcon, ProductImage, ProductInfoContainer, ProductPrice, ProductPriceTitleContainer, ProductTitle, PublishedText, SellerInfoContainer, SellerName } from "./styled";

const like = require('../../../../assets/icons/like.png')
const liked = require('../../../../assets/icons/liked.png')

export interface ProductType {
    _id: string;
    productImage: string;
    price: string;
    name: string;
    publishedData: string;
    SellerName: string;
    liked: boolean;
}

const DATA = [
    {
    _id: "1",
    productImage:"https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "2600",
    name: "Playstation 4 Pro, seminovo",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
    },
    {
    _id: "2",
    productImage:"https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "Playstation 4 Pro, seminovo",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: true,
    },
    {
    _id: "3",
    productImage:"https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "Playstation 4 Pro, seminovo",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
    },
    {
    _id: "4",
    productImage:"https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "Playstation 4 Pro, seminovo",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: true,
    },
    {
    _id: "5",
    productImage: "https://http2.mlstatic.com/D_NQ_NP_715237-MLA45308505060_032021-O.jpg",
    price: "3600",
    name: "Playstation 4 Pro, seminovo",
    publishedData: "14/02/23",
    SellerName: "Lucas Queiroga",
    liked: false,
    },
];

const ProductList = () =>{
    const Item = ({data}: {data: ProductType}) =>(
        <Container activeOpacity={0.85} onPress={() => Alert.alert("Navegação para o produto")}>
            <ProductImage source={{uri: data.productImage}} />
                <ProductInfoContainer>
                    <ProductPriceTitleContainer>
                        <ProductPrice>{data.price}</ProductPrice>
                        <ProductTitle numberOfLines={2}>{data.name}</ProductTitle>
                    </ProductPriceTitleContainer>
                    <InfoLikeContainer>
                        <SellerInfoContainer>
                            <PublishedText>Publicado em {data.publishedData} por:</PublishedText>
                            <SellerName>{data.SellerName}</SellerName>
                        </SellerInfoContainer>
                        {data.liked ? 
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

    const renderItem: ListRenderItem<ProductType> = ({item}) => (<Item data={item}/>)

    return(
        <FlatList data={DATA} keyExtractor={(item: ProductType)=>item._id } renderItem={renderItem} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}/>
    )
}

export default ProductList