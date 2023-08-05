import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";

const AllChats = () => {
    return(
        <>
            <Container>
                <DefaultTitle fontSize={20}>Conversas</DefaultTitle>
            </Container>
            <NavBar />
        </>
    )
}

export default AllChats;