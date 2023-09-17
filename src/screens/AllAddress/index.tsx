import React, { useEffect, useState } from "react";
import { Container, CreateAddBtn, CreateAddBtnText, ListHeight, NoAdd } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";
import { FlatList, ListRenderItem } from "react-native";
import AddressCard from "./AddressCard";
import { useNavigation } from "@react-navigation/native";
import { PropsNavigationStack, PropsStack } from "../../routes";
import { Address } from "../../entities/User";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import addressService from "../../services/addressService";

type Props = NativeStackScreenProps<PropsNavigationStack, "AllAddress">;

const AllAddress = ({ route }: Props) =>{
    const navigation = useNavigation<PropsStack>()
    const [allAddress, setAllAddress] = useState<Address[]>([])

    const { newAddress } = route.params;

    const handleNavAddAddress = () => navigation.navigate('AddAddress')


    const renderItem: ListRenderItem<Address> = ( {item} ) => (<AddressCard item={item} addresses={allAddress} setAddress={setAllAddress}/>)

    const handleGetAddress =async () => {
        const res = await addressService.getAddress()
        setAllAddress(res.data)
    }

    useEffect(() =>{
        handleGetAddress();
    }, [newAddress])

    return(
        <>
            <Container>
                <DefaultTitle fontSize={18}>Todos os Endereços</DefaultTitle>
                {
                    allAddress.length <= 0 ? 
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
                                <FlatList data={allAddress} keyExtractor={(item: Address) => item._id} 
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
