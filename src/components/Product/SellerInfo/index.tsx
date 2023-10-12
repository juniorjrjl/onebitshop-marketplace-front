import React from "react";
import { Button, Container, Name, NoRate, SeeProfile, SellerContainer } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { AirbnbRating } from "react-native-ratings";
import useAuth from "../../../hook/useAuth";
import { Product } from "../../../entities/Product";

interface Props{
    product: Product
}

const SellerInfo = ({product}: Props) =>{

    const navigation = useNavigation<PropsStack>();

    const Rate = parseInt(product.seller.rating)

    const { token } = useAuth()

    return(
        <Container>
            <SellerContainer>
                <Name>{product.seller.name}</Name>
                    {Rate ? 
                        (
                            <Button onPress={() => navigation.navigate(token ? 'Feedback': 'Login')}>
                                <AirbnbRating 
                                    selectedColor="#5F96ED" 
                                    showRating={false} 
                                    isDisabled={true} 
                                    size={16} 
                                    starContainerStyle={{ marginLeft: -20}}
                                    />
                            </Button>
                        ) :
                        (
                            <NoRate onPress={() => navigation.navigate(token ? 'Feedback': 'Login')}>Sem avaliações</NoRate>
                        )
                    }
            </SellerContainer>
            <SeeProfile onPress={() => navigation.navigate("SellerProfile", { sellerId: product.seller._id })}>Ver perfil</SeeProfile>
        </Container>
    )
}

export default SellerInfo;
