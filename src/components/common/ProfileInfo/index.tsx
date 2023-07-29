import React from "react"
import { Button, Container } from "./styled"
import { DefaultText, Hr, Name, NamePhoneContainer, Phone, PrincipalInfoContainer } from "./styled"
import { AirbnbRating } from "react-native-ratings"
import { useNavigation } from "@react-navigation/native"
import { PropsStack } from "../../../routes"

const ProfileInfo = () =>{
    const Rate = 4
    const navigation = useNavigation<PropsStack>();
    
    return(
        <>
            <Container>
                <PrincipalInfoContainer>
                    <NamePhoneContainer>
                        <Name>Junior</Name>
                        <Phone>(15)78902-9963</Phone>
                    </NamePhoneContainer>
                    {Rate ? 
                        (<Button onPress={() => navigation.navigate("Feedback")}>
                            <AirbnbRating 
                                selectedColor="#5f96ed" 
                                showRating={false} 
                                isDisabled={true} 
                                size={16} 
                                defaultRating={Rate} 
                                starContainerStyle={{paddingTop: 4}
                                }/>
                        </Button>):
                        (<DefaultText onPress={() => navigation.navigate("Feedback")}>Sem Avaliações</DefaultText>)
                    }
                </PrincipalInfoContainer>
                <DefaultText>Usuário desde 20/04/2023</DefaultText>
                <DefaultText>04 aúncions ativos</DefaultText>
            </Container>
            <Hr />
        </>
    )
}

export default ProfileInfo
