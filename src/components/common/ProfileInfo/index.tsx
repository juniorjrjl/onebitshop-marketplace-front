import React from "react"
import { Button, Container } from "./styled"
import { DefaultText, Hr, Name, NamePhoneContainer, Phone, PrincipalInfoContainer } from "./styled"
import { AirbnbRating } from "react-native-ratings"
import { useNavigation } from "@react-navigation/native"
import { PropsStack } from "../../../routes"
import useAuth from "../../../hook/useAuth"
import { User } from "../../../entities/User"
import getDate from "../../../utils/getDate"

interface Props{
    userInfo: User
}

const ProfileInfo = ({ userInfo }: Props) =>{
    const Rate = userInfo?.avarageRating
    const navigation = useNavigation<PropsStack>();
    const { token } = useAuth();
    
    return(
        <>
            <Container>
                <PrincipalInfoContainer>
                    <NamePhoneContainer>
                        <Name>{userInfo.name}</Name>
                        <Phone>{userInfo.phone}</Phone>
                    </NamePhoneContainer>
                    {Rate ? 
                        (<Button onPress={() => navigation.navigate(token ? 'Feedback' : 'Login')}>
                            <AirbnbRating 
                                selectedColor="#5f96ed" 
                                showRating={false} 
                                isDisabled={true} 
                                size={16} 
                                defaultRating={Rate} 
                                starContainerStyle={{paddingTop: 4}
                                }/>
                        </Button>):
                        (<DefaultText onPress={() => navigation.navigate(token ? 'Feedback' : 'Login')}>Sem Avaliações</DefaultText>)
                    }
                </PrincipalInfoContainer>
                <DefaultText>Usuário desde {getDate(userInfo.createdAt)}</DefaultText>
                <DefaultText>{userInfo.products.length.toString().padStart(2, '0')} aúncions ativos</DefaultText>
            </Container>
            <Hr />
        </>
    )
}

export default ProfileInfo
