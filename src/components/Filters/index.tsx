import React, { useState } from "react";
import { Bold, Container, FiltersContainer, FiltersIcon, FiltersText, ModalContainer, ModalOverlay, ModalText, OrderText } from "./styled";
import { Modal } from "react-native";
import ComplementFilter from "../../screens/Search/ComplementFilters";

const filtersIcon = require('../../../assets/icons/filtrar.png')

const Filters = () => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [filterText, setFilterText] = useState<string>('Mais Recente');
    const [showFilters, setShowFilters] = useState<boolean>(false);

    const handleSetFilter =async (filterName: string) => {
        setFilterText(filterName);
        setModalVisible(false);
    }

    return(
        <>
            <Container>
                <OrderText onPress={() => setModalVisible(true)}>
                    Ordernar por <Bold>{filterText}</Bold>
                </OrderText>

                <Modal animationType="fade" transparent={true} visible={modalVisible}>
                    <ModalOverlay onPress={() => setModalVisible(false)} activeOpacity={1}>
                        <ModalContainer>
                            <ModalText onPress={() => handleSetFilter('Maior Preço')}>Maior Preço</ModalText>
                            <ModalText onPress={() => handleSetFilter('Menor Preço')}>Menor Preço</ModalText>
                            <ModalText onPress={() => handleSetFilter('Mais Recente Preço')}>Mais Recente Preço</ModalText>
                        </ModalContainer>
                    </ModalOverlay>
                </Modal>
                <FiltersContainer onPress={() => setShowFilters(!showFilters)}>
                    <FiltersIcon source={filtersIcon}/>
                    <FiltersText>Filtrar</FiltersText>
                </FiltersContainer>
            </Container>
            {
                showFilters ? <ComplementFilter /> : null
            }
        </>
    );
}

export default Filters;