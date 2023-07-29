import React from "react";
import { Button, Container, Name, NoRate, SeeProfile, SellerContainer } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { AirbnbRating } from "react-native-ratings";

const SellerInfo = () =>{

    const navigation = useNavigation<PropsStack>();

    const Rate = null

    return(
        <Container>
            <SellerContainer>
                <Name>Junior</Name>
                <Button>
                    {Rate ? 
                        (
                            <AirbnbRating 
                                selectedColor="#5F96ED" 
                                showRating={false} 
                                isDisabled={true} 
                                size={16} 
                                starContainerStyle={{ marginLeft: -20}}
                                />
                        ) :
                        (
                            <NoRate>Sem avaliações</NoRate>
                        )
                    }
                </Button>
            </SellerContainer>
            <SeeProfile onPress={() => navigation.navigate("SellerProfile")}>Ver perfil</SeeProfile>
        </Container>
    )
}

export default SellerInfo;
