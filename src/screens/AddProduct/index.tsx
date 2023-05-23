import React, { useState } from "react";
import { Container, Division, Input } from "./styles";
import DefaultTitle from "../../components/common/DefaultTitle";
import { InputContainer } from "../Login/styled";
import DropDownComponent from "../../components/common/DropDownComponent";
import DefaultButton from "../../components/common/DefaultButton";

const Address = [
    { value: "Endereço 1" },
    { value: "Endereço 2" },
    { value: "Endereço 3" },
    { value: "Endereço 4" },
];

const Categories = [
    { value: "Categoria 1" },
    { value: "Categoria 2" },
    { value: "Categoria 3" },
    { value: "Categoria 4" },
];

const AddProduct = () =>{

    const [category, setCategory] = useState("")
    const [address, setAddress] = useState("")

    return(
        <Container contentContainerStyle={ { paddingBottom: 120 } }>
            <DefaultTitle fontSize={20}>Cadastro do Anuncio</DefaultTitle>

            <InputContainer>
                <Input placeholder="Título"></Input>
            </InputContainer>

            <InputContainer>
                <Input placeholder="Preço" keyboardType="numeric"></Input>
            </InputContainer>

            <InputContainer>
                <Input placeholder="Descrição"></Input>
            </InputContainer>

            <InputContainer>
                <Input placeholder="Imagem" ></Input>
            </InputContainer>

            <DropDownComponent data={Categories} placeholder="Selecione a categoria" 
                setSelected={setCategory} emptyMessage="Sem categorias"/>

            <DropDownComponent data={Address} placeholder="Selecione o endereço" 
                setSelected={setAddress} emptyMessage="Sem endereços"/>

            <DefaultButton marginVertical={20} buttonType="primary" buttonHandle={() => {}}>Cadastrar e publicar</DefaultButton>
            <Division>Ou</Division>
            <DefaultButton marginVertical={20} buttonType="secondery" buttonHandle={() => {}}>Salvar como rascunho</DefaultButton>

        </Container>
    )
}

export default AddProduct
