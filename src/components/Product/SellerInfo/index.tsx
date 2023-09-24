import React from "react";
import { Button, Container, Name, NoRate, SeeProfile, SellerContainer } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { AirbnbRating } from "react-native-ratings";
import useAuth from "../../../hook/useAuth";

interface Props{
    name: string
}

const SellerInfo = ({name}: Props) =>{

    const navigation = useNavigation<PropsStack>();

    const Rate = null

    const { token } = useAuth()

    return(
        <Container>
            <SellerContainer>
                <Name>{name}</Name>
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
            <SeeProfile onPress={() => navigation.navigate("SellerProfile")}>Ver perfil</SeeProfile>
        </Container>
    )
}

export default SellerInfo;
