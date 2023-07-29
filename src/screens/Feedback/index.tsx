import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import NavBar from "../../components/common/NavBar";

const Feedback = () => {
    return(
        <>
            <Container>
                <DefaultTitle fontSize={20}>Avaliar</DefaultTitle>
                <ProfileInfo />
            </Container>
            <NavBar />
        </>
    )
}

export default Feedback;
