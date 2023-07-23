import React from "react";
import { AdCard, Container, Image, InfoContainer, InfoIconContainer, NoAds, Prince, PrinceTitleContainer, PublishedText, Title, TotalAds, IconButton, Icon } from "./styled";

const trashIcon = require('../../../../assets/icons/trash.png')
const favoriteIcon = require('../../../../assets/icons/like.png')

interface Product{
    id: string;
    productImage: string;
    price: string;
    title: string;
    publishedData: string;
}

interface ProductProps {
    products: Product[],
    seller: boolean
}

const UserAds = ({ products, seller }: ProductProps) =>{
    return(
        <Container>
            <TotalAds>Você tem {products.length} anúncions</TotalAds>

            {products.length > 0 ? (            
                products.map( p => (
                    <AdCard key={p.id} activeOpacity={0.85} onPress={() => {}}>
                    <Image source={{uri: p.productImage}}/>
                    <InfoContainer>
                        <PrinceTitleContainer>
                            <Prince>{p.price}</Prince>
                            <Title numberOfLines={2}>{p.title}</Title>
                        </PrinceTitleContainer>
                        {seller ? 
                        (
                            <InfoIconContainer>
                                <PublishedText>{p.publishedData}</PublishedText>
                                <IconButton activeOpacity={0.85} onPress={() => {}}>
                                    <Icon source={favoriteIcon}/>
                                </IconButton>
                            </InfoIconContainer>
                        ) : 
                        (
                            <InfoIconContainer>
                                <PublishedText>{p.publishedData}</PublishedText>
                                <IconButton activeOpacity={0.85} onPress={() => {}}>
                                    <Icon source={trashIcon}/>
                                </IconButton>
                            </InfoIconContainer>
                        )}
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
