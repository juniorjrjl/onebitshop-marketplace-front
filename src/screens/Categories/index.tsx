import React from "react"
import { Container } from "./styled"
import DefaultTitle from "../../components/common/DefaultTitle"
import NavBar from "../../components/common/NavBar"

const Categories = () => {
    return(
        <>
            <Container>
                <DefaultTitle fontSize={20}>Todas as Categories</DefaultTitle>
            </Container>
            <NavBar />
        </>
    )
}

export default Categories