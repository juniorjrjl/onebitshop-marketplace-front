import React from "react";
import { Container, FeedbackText } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import NavBar from "../../components/common/NavBar";
import { AirbnbRating } from "react-native-ratings";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import { Alert } from "react-native";

const Feedback = () => {

    const navigation = useNavigation<PropsStack>()

    return(
        <>
            <Container>
                <DefaultTitle fontSize={20}>Avaliar</DefaultTitle>
                <ProfileInfo />
                <FeedbackText>Avalie o vendedor</FeedbackText>
                <AirbnbRating 
                    selectedColor="#5F96ED"
                    showRating={false}
                    size={0}
                    defaultRating={0}
                    />
                <DefaultButton buttonType="primary" marginVertical={80} buttonHandle={() => {
                    navigation.goBack()
                    Alert.alert("Obrigado pela sua avaliação")
                    }}>Avaliar</DefaultButton>
            </Container>
            <NavBar />
        </>
    )
}

export default Feedback;
