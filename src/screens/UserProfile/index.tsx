import React from "react"
import { Container } from "./styled"
import NavBar from "../../components/common/NavBar"
import DefaultTitle from "../../components/common/DefaultTitle"

const UserProfile = () =>{
    return(
        <>
            <Container>
                <DefaultTitle fontSize={20}>Meu Perfil</DefaultTitle>
            </Container>
            <NavBar />
        </>
    )
}

export default UserProfile