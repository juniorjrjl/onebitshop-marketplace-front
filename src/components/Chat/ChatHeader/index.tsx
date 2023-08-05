import React, { useState } from "react";
import { Container, ModalButton, ModalContainer, ModalImage, ModalOverlay, ModalText, Row, UserNane } from "./styled";
import BackIcon from "../../common/BackIcon";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";

const modalImg = require('../../../../assets/icons/dots.png')

const ChatHeader = ({ sellerName, product }: any) =>{
    const [modalVisible, setModalVisibe] = useState(false)
    
    const handleToggleModal = () => setModalVisibe(!modalVisible)

    const navigation = useNavigation<PropsStack>()

    const handleSellerProfile = () => {
        navigation.navigate('SellerProfile')
        setModalVisibe(false)
    }
    const handleFeedback = () => {
        navigation.navigate('Feedback')
        setModalVisibe(false)
    }
    const handleDenounce = () => {
        navigation.navigate('Denounce')
        setModalVisibe(false)
    }

    return(
        <Container>
            <Row>
                <BackIcon marginLeft={0}/>
                <UserNane>{sellerName}</UserNane>
                <ModalButton onPress={handleToggleModal}>
                    <ModalImage source={modalImg}/>
                </ModalButton>
                <Modal animationType="fade" transparent={true} visible={modalVisible}>
                    <ModalOverlay onPress={handleToggleModal}>
                        <ModalContainer>
                            <ModalText onPress={handleSellerProfile}>Ver Perfil</ModalText>
                            <ModalText>Apagar Conversa</ModalText>
                            <ModalText onPress={handleFeedback}>Avaliar</ModalText>
                            <ModalText onPress={handleDenounce}>Denunciar</ModalText>
                        </ModalContainer>
                    </ModalOverlay>
                </Modal>
            </Row>
        </Container>
    )
}

export default ChatHeader;
