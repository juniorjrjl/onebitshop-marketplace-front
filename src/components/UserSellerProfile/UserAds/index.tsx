import React from "react";
import { AdCard, Container, Image, InfoContainer, InfoIconContainer, NoAds, Prince, PrinceTitleContainer, PublishedText, Title, TotalAds, IconButton, Icon } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { Product } from "../../../entities/Product";
import getDate from "../../../utils/getDate";
import productService from "../../../services/productService";
import { Alert } from "react-native";

const trashIcon = require('../../../../assets/icons/trash.png')
const favoriteIcon = require('../../../../assets/icons/like.png')

interface ProductProps {
    products: Product[],
    seller: boolean
}

const UserAds = ({ products, seller }: ProductProps) =>{

    const navigation = useNavigation<PropsStack>()

    const handleEditProduct = (product: Product) => {
        seller ? 
            navigation.navigate('Product', {... product}) :
            navigation.navigate("UpdateProduct", {
                _id: product._id,
                name: product.name,
                price: product.price,
                description: product.description,
                images: product.images,
                category: product.category,
                addressId: product.address._id,
                published: product.publishedData
            })
    }

    const handleDeleteProduct = async (_id: string) => {
        Alert.alert('Exclusão de produto', 'Confirma a exclusão do produto?',
        [
            {
                text: 'Sim',
                onPress: async () => {
                    const res = await productService.deleteProduct(_id)

                    if (res.status < 400){
                        Alert.alert('Produto excluido com sucesso')
                        navigation.navigate('Home')
                    }
                }
            },
            {
                text: 'Não',
            }
        ])
    }

    return(
        <Container>
            <TotalAds>Você tem {products.length} anúncions</TotalAds>

            {products.length > 0 ? (            
                products.map( p => (
                    <AdCard key={p._id} activeOpacity={0.85} onPress={() => handleEditProduct(p)}>
                    <Image source={{uri: p.images[0].url}}/>
                    <InfoContainer>
                        <PrinceTitleContainer>
                            <Prince>R$ {parseFloat(p.price).toFixed(2)}</Prince>
                            <Title numberOfLines={2}>{p.name}</Title>
                        </PrinceTitleContainer>
                            <InfoIconContainer>
                                <PublishedText>Publicado em{getDate(p.createdAt)}</PublishedText>
                                {seller ? 
                                    (
                                        <IconButton activeOpacity={0.85} onPress={() => {}}>
                                            <Icon source={favoriteIcon}/>
                                        </IconButton>
                                    ) : 
                                    (
                                        <IconButton activeOpacity={0.85} onPress={() => handleDeleteProduct(p._id)}>
                                            <Icon source={trashIcon}/>
                                        </IconButton>
                                    )
                                }
                            </InfoIconContainer>
                    </InfoContainer>
                </AdCard>
                ))
                ) : (
                    <NoAds>Por enquanto você não tem anúncions</NoAds>
                )}
        </Container>
    )
}

export default UserAds
