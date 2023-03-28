import React from "react-native";
import { ButtonContainer, ButtonText } from "./styled";

type props = {
    children: string
    buttonType: 'primary' | 'secondery'
    marginVertical: number
    buttonHandle: Function
}

const DefaultButton = ({children, buttonType, marginVertical, buttonHandle}: props) =>{
    return(
        <ButtonContainer type={buttonType} marginVertical={marginVertical}>
            <ButtonText onPress={() => buttonHandle()}>{children}</ButtonText>
        </ButtonContainer>
    )
}

export default DefaultButton