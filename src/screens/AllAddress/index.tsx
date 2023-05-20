import React from "react";
import { Container, CreateAddBtn, CreateAddBtnText, ListHeight, NoAdd } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";
import { FlatList, ListRenderItem, View } from "react-native";
import AddressCard from "./AddressCard";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const Data = [
    {
        _id: "1",
        street: "Rua das Acácias",
        number: "321",
        complement: "",
        district: "Boa Viagem",
        city: "Recife",
        state: "PE",
        cep: "51030200",
    },
    {
        _id: "2",
        street: "Avenida das Flores",
        number: "456",
        complement: "",
        district: "Centro",
        city: "Cuiabá",
        state: "MT",
        cep: "78005100",
    },
    {
        _id: "3",
        street: "Rua das Jabuticabeiras",
        number: "987",
        complement: "",
        district: "Mangabeiras",
        city: "Maceió",
        state: "AL",
        cep: "57037100",
    },
    {
        _id: "4",
        street: "Avenida das Flores",
        number: "456",
        complement: "",
        district: "Centro",
        city: "Cuiabá",
        state: "MT",
        cep: "78005100",
    },
    {
        _id: "5",
        street: "Rua das Jabuticabeiras",
        number: "987",
        complement: "",
        district: "Mangabeiras",
        city: "Maceió",
        state: "AL",
        cep: "57037100",
    },
];

export interface Address {
    _id: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    cep: string;
}

const AllAddress = () =>{

    const navigation = useNavigation<PropsStack>()

    const handleNavAddAddress = () => navigation.navigate('AddAddress')


    const renderItem: ListRenderItem<Address> = ( {item} ) => (<AddressCard item={item} />)

    return(
        <>
            <Container>
                <DefaultTitle fontSize={18}>Todos os Endereços</DefaultTitle>
                {
                    Data.length <= 0 ? 
                    (
                        <>
                            <NoAdd>Você não tem endereços {'\n'}cadastrados no momento</NoAdd>
                            <CreateAddBtn onPress={handleNavAddAddress}>
                                <CreateAddBtnText>Cadastrar Endereço</CreateAddBtnText>
                            </CreateAddBtn>
                        </>
                    ) : 
                    (
                        <>
                            <ListHeight>
                                <FlatList data={Data} keyExtractor={(item: Address) => item._id} 
                                    renderItem={renderItem} showsVerticalScrollIndicator={false}/>
                            </ListHeight>
                            <CreateAddBtn onPress={handleNavAddAddress}>
                                <CreateAddBtnText>Cadastrar Endereço</CreateAddBtnText>
                            </CreateAddBtn>
                        </>
                    )
                }
            </Container>
            <NavBar />
        </>
    )
}

export default AllAddress