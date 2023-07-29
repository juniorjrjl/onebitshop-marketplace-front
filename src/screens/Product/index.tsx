import React from "react"
import { Container, SubTitle, SubtitleContainer, Title } from "./styled";
import BackIcon from "../../components/common/BackIcon";

const Product = () =>{
    return(
        <Container>
            <BackIcon marginLeft={30}/>
            <Title>Playstation 4 com 2 controles</Title>
            <SubtitleContainer>
                <SubTitle>Publicado em 10/04/23</SubTitle>
                <SubTitle>Refice, PE</SubTitle>
            </SubtitleContainer>
        </Container>
    );
};

export default Product;
