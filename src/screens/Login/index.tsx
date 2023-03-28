import React, { Alert } from "react-native";
import BackIcon from "../../components/common/BackIcon";
import DefaultButton from "../../components/common/DefaultButton";
import { Container, ForgetPassword, Input, InputContainer, Logo } from "./styled";

const logo = require('../../../assets/images/logo.png')

const Login = () =>{

    const handleLogin = () => Alert.alert("Botão de login")

    return (
        <Container>
            <BackIcon marginLeft={30}/>
            <Logo source={logo}/>
            <InputContainer>
                <Input placeholder="Email" placeholderTextColor='white'/>
            </InputContainer>
            <InputContainer>
                <Input placeholder="Senha" placeholderTextColor='white' secureTextEntry={true}/>
            </InputContainer>
            <ForgetPassword>Esqueceu sua senha?</ForgetPassword>
            <DefaultButton buttonType="primary" marginVertical={40} buttonHandle={() => handleLogin()}>Fazer Login</DefaultButton>
        </Container>
    )
}

export default Login