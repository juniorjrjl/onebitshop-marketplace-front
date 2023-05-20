import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";

const SellerProfile = () => {
    return(
        <Container>
            <DefaultTitle fontSize={20}>
                Perfil do Vendedor
            </DefaultTitle>
            <ProfileInfo />
        </Container>
    )
}

export default SellerProfile