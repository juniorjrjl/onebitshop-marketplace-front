import { useNavigation } from "@react-navigation/native";
import React from "react-native";
import { PropsStack } from "../../../routes";
import { BackContainer, BackImage } from "./styled";

const backIcon = require('../../../../assets/icons/arrow-left.png')

type props = {
    marginLeft: number
}

const BackIcon = ({marginLeft}: props) =>{
    const navigation = useNavigation<PropsStack>()

    return (
        <BackContainer onPress={() => navigation.goBack()}>
            <BackImage source={backIcon} marginLeft={marginLeft}/>
        </BackContainer>
    )
}

export default BackIcon
