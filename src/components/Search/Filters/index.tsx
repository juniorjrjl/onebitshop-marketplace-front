import React, { useContext, useState } from "react";
import { Bold, Container, FiltersContainer, FiltersIcon, FiltersText, ModalContainer, ModalOverlay, ModalText, OrderText } from "./styled";
import { Modal } from "react-native";
import ComplementFilter from "./ComplementFilters";
import { QueryContext } from "../../../contexts/queryContext";

const filtersIcon = require('../../../../assets/icons/filtrar.png')

const Filters = () => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [filterText, setFilterText] = useState<string>('Mais Recente');
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const queryContext = useContext(QueryContext);

    const handleSetFilter =async (filterName: string, filter: string) => {
        setFilterText(filterName);
        queryContext.addFilters(`orderBy=${filter}`)
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
                            <ModalText onPress={() => handleSetFilter('Maior Preço', 'price&direction=desc')}>Maior Preço</ModalText>
                            <ModalText onPress={() => handleSetFilter('Menor Preço', 'price&direction=asc')}>Menor Preço</ModalText>
                            <ModalText onPress={() => handleSetFilter('Mais Recente', 'updatedAt')}>Mais Recente Preço</ModalText>
                        </ModalContainer>
                    </ModalOverlay>
                </Modal>
                <FiltersContainer onPress={() => setShowFilters(!showFilters)}>
                    <FiltersIcon source={filtersIcon}/>
                    <FiltersText>Filtrar</FiltersText>
                </FiltersContainer>
            </Container>
            {
                showFilters ? <ComplementFilter setShowFilters={setShowFilters} /> : null
            }
        </>
    );
}

export default Filters;