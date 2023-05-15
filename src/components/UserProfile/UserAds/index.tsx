import React from "react";
import { AdCard, Container, Image, InfoContainer, InfoTrashContainer, NoAds, Prince, PrinceTitleContainer, PublishedText, Title, TotalAds, TrashButton, TrashIcon } from "./styled";

const trashIcon = require('../../../../assets/icons/trash.png')

interface Product{
    id: string;
    productImage: string;
    price: string;
    title: string;
    publishedData: string;
}

interface ProductProps {
    products: Product[]
}

const UserAds = ({ products }: ProductProps) =>{
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
                        <InfoTrashContainer>
                        <PublishedText>{p.publishedData}</PublishedText>
                        <TrashButton activeOpacity={0.85} onPress={() => {}}>
                            <TrashIcon source={trashIcon}/>
                        </TrashButton>
                    </InfoTrashContainer>
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