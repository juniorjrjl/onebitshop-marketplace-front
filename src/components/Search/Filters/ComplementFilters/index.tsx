import React, { SetStateAction, useContext, useState } from "react";
import { ApplyButton, ButtonsContainer, ButtonText, Container, CleanButton, Input, LocationInputContainer, PriceContainer, PriceInputContainer, Title } from "./styled";
import DropDownComponent from "../../../common/DropDownComponent";
import { QueryContext } from "../../../../contexts/queryContext";

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

interface Props {
    setShowFilters: React.Dispatch<SetStateAction<boolean>>
}

const ComplementFilter = ({setShowFilters}: Props) => {

    const [fields, setFields] = useState({
        minPrice: '',
        maxPrice: '',
        address: ''
    })
    const [category, setCategory] = useState<string>('')
    const queryContext = useContext(QueryContext);

    const handleMinPrice = () => queryContext.addFilters(`minPrice=${fields.minPrice}`)

    const handleMaxPrice = () => queryContext.addFilters(`maxPrice=${fields.maxPrice}`)

    const handleCategory = () => queryContext.addFilters(`category=${category}`)

    const handleAddress = () => queryContext.addFilters(`address=${fields.address}`)

    const handleSearchFiltered = () => {
        if (fields.minPrice){
            handleMinPrice()
        }
        if (fields.maxPrice){
            handleMaxPrice()
        }
        if (category){
            handleCategory()
        }
        if (fields.address){
            handleAddress()
        }
        setShowFilters(false)
    }

    return(
        <Container>
            <Title>Valor</Title>
            <PriceContainer>
                <PriceInputContainer>
                    <Input placeholder="Mínimo" placeholderTextColor='white' keyboardType="numeric" 
                        style={{textAlign: 'center'}} value={fields.minPrice} onChangeText={(v) => setFields({... fields, minPrice: v.replace(',', '.')})}/>
                </PriceInputContainer>
                <PriceInputContainer>
                    <Input placeholder="Máximo" placeholderTextColor='white' keyboardType="numeric" 
                        style={{textAlign: 'center'}} value={fields.maxPrice} onChangeText={(v) => setFields({... fields, maxPrice: v.replace(',', '.')})}/>
                </PriceInputContainer>
            </PriceContainer>
            <Title>Localização</Title>
            <LocationInputContainer>
            <Input placeholder="Bairro, Cidade e/ou Estado" placeholderTextColor='white' value={fields.address} onChangeText={(v) => setFields({... fields, address: v})}/>
            </LocationInputContainer>
            <Title>Categoria</Title>
            <DropDownComponent data={Categories} placeholder="Selecione a categoria" setSelected={setCategory} saveMethod="value" emptyMessage="Sem categorias"/>
            <ButtonsContainer>
                <ApplyButton onPress={handleSearchFiltered}>
                    <ButtonText>Aplicar</ButtonText>
                </ApplyButton>
                <CleanButton onPress={() => {}}>
                    <ButtonText>Limpar</ButtonText>
                </CleanButton>
            </ButtonsContainer>
        </Container>
    )
}

export default ComplementFilter;