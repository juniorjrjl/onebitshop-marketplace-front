import React, { useState } from "react";
import { Container } from "../styled";
import { ApplyButton, ButtonsContainer, ButtonText, CleanButton, Input, LocationInputContainer, PriceContainer, PriceInputContainer, Title } from "./styled";
import DropDownComponent from "../../../components/common/DropDownComponent";

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

const ComplementFilter = () => {
    const [category, setCategory] = useState<string>('')
    return(
        <Container>
            <Title>Valor</Title>
            <PriceContainer>
                <PriceInputContainer>
                    <Input placeholder="Mínimo" placeholderTextColor='white' keyboardType="numeric" style={{textAlign: 'center'}}/>
                </PriceInputContainer>
                <PriceInputContainer>
                    <Input placeholder="Máximo" placeholderTextColor='white' keyboardType="numeric" style={{textAlign: 'center'}}/>
                </PriceInputContainer>
            </PriceContainer>
            <Title>Localização</Title>
            <LocationInputContainer>
            <Input placeholder="Baiiro, Cidade e/ou Estado" placeholderTextColor='white'/>
            </LocationInputContainer>
            <Title>Categoria</Title>
            <DropDownComponent data={Categories} placeholder="Selecione a categoria" setSelected={setCategory} saveMethod="value" emptyMessage="Sem categorias"/>
            <ButtonsContainer>
                <ApplyButton onPress={() => {}}>
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