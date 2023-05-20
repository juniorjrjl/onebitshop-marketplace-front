import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";

const AllAddress = () =>{
    return(
        <>
            <Container>
                <DefaultTitle fontSize={18}>Todos os Endereços</DefaultTitle>
            </Container>
            <NavBar />
        </>
    )
}

export default AllAddress