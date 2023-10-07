import React, { useEffect, useState } from "react";
import { Container, Division, Input } from "./styles";
import DefaultTitle from "../../components/common/DefaultTitle";
import { InputContainer } from "../Login/styled";
import DropDownComponent from "../../components/common/DropDownComponent";
import DefaultButton from "../../components/common/DefaultButton";
import UploadInput from "../../components/AddProduct/UploadInput";
import { ImagePickerAsset } from "expo-image-picker";
import addressService from "../../services/addressService";
import { Address } from "../../entities/User";
import { Alert } from "react-native";
import productService from "../../services/productService";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

const Categories = [
    { value: "Eletrônicos" },
    { value: "Eletrodomésticos" },
    { value: "Moda e Acessórios" },
    { value: "Pets" },
    { value: "Brinquedos e Jogos" },
    { value: "Casa e Jardim" },
    { value: "Esporte e Lazer" },
    { value: "Automóveis e Veículos" },
];

const AddProduct = () =>{

    const [category, setCategory] = useState("")
    const [addressId, setAddressId] = useState("")
    const [address, setAddress] = useState([])
    const [images, setImages] = useState<ImagePickerAsset[]>([])
    const navigation = useNavigation<PropsStack>()

    const [fields, setFields] = useState({
        name: "",
        price: "",
        description: "",
        images: [{}],
        category: "",
        addressId: ""
    })

    const handleGetAddresses = async () => {
        const res = await addressService.getAddress();

        if (res.status !== 200) return;

        const value = res.data.map((address: Address) => { return { key: address._id, value: `${address.street} Nº ${address.number}`} })
        setAddress(value)
    }

    const handleSubmitProduct = async (post: string) => {
        if (Object.values(fields).some(value => !value) || !fields.images.length){
            Alert.alert("Preencha as informações do produto corretamente")
            return
        }

        const params = { ... fields, images: images.map(({uri})=>({
            filename: uri.substring(uri.lastIndexOf("/") + 1),
            uri: uri,
            url: "",
            type: `image/${uri.split(".").slice(-1).toString()}`
        })), published: post}
        
        const {status} = await productService.addProduct(params)

        if (status === 201){
            Alert.alert("Seu produto foi cadastrado com sucesso");
            navigation.navigate('Home');
        }
    }

    useEffect(() => { setFields({
        ...fields,
        images: images,
        category: category,
        addressId: addressId
    }) }, [images, category, addressId])

    useEffect(() => {
        handleGetAddresses()
    }, [])

    return(
        <Container contentContainerStyle={ { paddingBottom: 120 } }>
            <DefaultTitle fontSize={20}>Cadastro do Anuncio</DefaultTitle>

            <InputContainer>
                <Input placeholder="Título" value={fields.name} onChangeText={(val) => setFields({...fields, name: val})}></Input>
            </InputContainer>

            <InputContainer>
                <Input placeholder="Preço" keyboardType="numeric" value={fields.price} onChangeText={(val) => setFields({...fields, price: val.replace(',', '.')})}></Input>
            </InputContainer>

            <InputContainer>
                <Input placeholder="Descrição" value={fields.description} onChangeText={(val) => setFields({...fields, description: val})}></Input>
            </InputContainer>

            <UploadInput images={images} setImages={setImages}/>

            <DropDownComponent data={Categories} placeholder="Selecione a categoria" 
                setSelected={setCategory} emptyMessage="Sem categorias" saveMethod="value"/>

            <DropDownComponent data={address} placeholder="Selecione o endereço" 
                setSelected={setAddressId} emptyMessage="Sem endereços" saveMethod="key"/>

            <DefaultButton marginVertical={20} buttonType="primary" buttonHandle={()  => handleSubmitProduct('true')}>Cadastrar e publicar</DefaultButton>
            <Division>Ou</Division>
            <DefaultButton marginVertical={20} buttonType="secondery" buttonHandle={() => handleSubmitProduct('false')}>Salvar como rascunho</DefaultButton>

        </Container>
    )
}

export default AddProduct
