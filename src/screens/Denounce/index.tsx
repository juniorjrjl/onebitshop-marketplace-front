import React from "react";
import { Button, ButtonText, Container, Input, InputContainer } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import NavBar from "../../components/common/NavBar";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import { Alert } from "react-native";

const Denounce = () => {

    const navigation = useNavigation<PropsStack>()

    return(
        <>
            <Container>
                <DefaultTitle fontSize={20}>Denunciar</DefaultTitle>
                <ProfileInfo />
                <InputContainer>
                    <Input multiline placeholder="Escreva aqui o motivo da sua denúncia do perfil acima"/>
                </InputContainer>
                <Button>
                    <ButtonText onPress={() => {
                        navigation.goBack()
                        Alert.alert("Sua denúncia foi enviada e será analisada pela nossa equipe")
                        }}>Denunciar</ButtonText>
                </Button>
            </Container>
            <NavBar />
        </>
    )
}

export default Denounce;
