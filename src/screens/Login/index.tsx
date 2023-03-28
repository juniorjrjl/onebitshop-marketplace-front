import React from "react-native";
import BackIcon from "../../components/common/BackIcon";
import { Container, Logo } from "./styled";

const logo = require('../../../assets/images/logo.png')

type props = {
    marginLeft: number
}

const Login = () =>{

    return (
        <Container>
            <BackIcon marginLeft={30}/>
            <Logo source={logo}/>
        </Container>
    )
}

export default Login