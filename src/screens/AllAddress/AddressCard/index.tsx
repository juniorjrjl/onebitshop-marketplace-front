import React from "react";
import { Container, ContentTxt, DeleteBtn, DeleteIcon } from "./styled";
import { Alert } from "react-native";
import { Address } from "../../../entities/User";

const deleteIcon = require('../../../../assets/icons/trash.png')

interface ItemProps {
    item: Address
}

const AddressCard = ({item}: ItemProps) => {
    return(
        <Container>
            <ContentTxt>{`Rua: ${item.street} - Nº ${item.number}\nUF: ${item.state}\nCEP: ${item.cep}`}</ContentTxt>
            <DeleteBtn>
                <DeleteIcon source={deleteIcon} onProgress={() => Alert.alert('Clicado')}/>
            </DeleteBtn>
        </Container>
    )
}

export default AddressCard
