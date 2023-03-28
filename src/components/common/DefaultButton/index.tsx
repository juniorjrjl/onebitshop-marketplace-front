import React from "react-native";
import { ButtonContainer, ButtonText } from "./styled";

type props = {
    children: string
    buttonType: 'primary' | 'secondery'
    marginVertical: number
    buttonHandle: Function
}

const DefaultButton = ({children, buttonType, marginVertical, buttonHandle}: props) =>
    <ButtonContainer onPress={() => buttonHandle()} type={buttonType} marginVertical={marginVertical}>
        <ButtonText>{children}</ButtonText>
    </ButtonContainer>

export default DefaultButton