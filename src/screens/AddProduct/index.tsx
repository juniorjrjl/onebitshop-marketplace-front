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

    const [fields, setFields] = useState({
        title: "",
        price: "",
        description: "",
        images: [{}],
        category: "",
        addressId: ""
    })

    const handleGetAddresses =async () => {
        const res = await addressService.getAddress();

        const value = res.data.map((address: Address) => { return { key: address._id, value: `${address.street} Nº ${address.number}`} })
        setAddress(value)
    }

    const handleSubmitProduct = () => {

    }

    useEffect(() => { setFields({
        ...fields,
        images: images,
        category: category,
        addressId: addressId
    }) }, [images, category, address])

    useEffect(() => {
        handleGetAddresses()
    }, [])

    return(
        <Container contentContainerStyle={ { paddingBottom: 120 } }>
            <DefaultTitle fontSize={20}>Cadastro do Anuncio</DefaultTitle>

            <InputContainer>
                <Input placeholder="Título" value={fields.title} onChangeText={(val) => setFields({...fields, title: val})}></Input>
            </InputContainer>

            <InputContainer>
                <Input placeholder="Preço" keyboardType="numeric" value={fields.price} onChangeText={(val) => setFields({...fields, price: val})}></Input>
            </InputContainer>

            <InputContainer>
                <Input placeholder="Descrição" value={fields.description} onChangeText={(val) => setFields({...fields, description: val})}></Input>
            </InputContainer>

            <UploadInput images={images} setImages={setImages}/>

            <DropDownComponent data={Categories} placeholder="Selecione a categoria" 
                setSelected={setCategory} emptyMessage="Sem categorias"/>

            <DropDownComponent data={address} placeholder="Selecione o endereço" 
                setSelected={setAddressId} emptyMessage="Sem endereços"/>

            <DefaultButton marginVertical={20} buttonType="primary" buttonHandle={handleSubmitProduct}>Cadastrar e publicar</DefaultButton>
            <Division>Ou</Division>
            <DefaultButton marginVertical={20} buttonType="secondery" buttonHandle={() => {}}>Salvar como rascunho</DefaultButton>

        </Container>
    )
}

export default AddProduct
