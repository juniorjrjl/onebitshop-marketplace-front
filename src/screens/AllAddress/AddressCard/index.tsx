import React, { SetStateAction } from "react";
import { Container, ContentTxt, DeleteBtn, DeleteIcon } from "./styled";
import { Alert } from "react-native";
import { Address } from "../../../entities/User";
import addressService from "../../../services/addressService";

const deleteIcon = require('../../../../assets/icons/trash.png')

interface ItemProps {
    item: Address;
    addresses: Address[];
    setAddress: React.Dispatch<SetStateAction<Array<Address>>>
}

const AddressCard = ({item, addresses, setAddress}: ItemProps) => {
    const handleDeleteAddress = async () => {
        Alert.alert('Exclusão de endereço', 'Confirma a exclusão do endereço?',[
            {
                text: 'sim',
                onPress: () => {
                    addressService.deleteAddress(item._id);

                    const filteredAddresses = addresses.filter(address => address._id !== item._id);
                    setAddress(filteredAddresses);
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    return(
        <Container>
            <ContentTxt>{`Rua: ${item.street} - Nº ${item.number}\nUF: ${item.state}\nCEP: ${item.cep.substring(0, 5)} - ${item.cep.substring(5)}`}</ContentTxt>
            <DeleteBtn onPress={handleDeleteAddress}>
                <DeleteIcon source={deleteIcon}/>
            </DeleteBtn>
        </Container>
    )
}

export default AddressCard
