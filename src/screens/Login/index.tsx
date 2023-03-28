import { useNavigation } from "@react-navigation/native";
import React, { Alert } from "react-native";
import BackIcon from "../../components/common/BackIcon";
import DefaultButton from "../../components/common/DefaultButton";
import { PropsStack } from "../../routes";
import { Bold, CompanyLogo, Container, ForgetPassword, Input, InputContainer, Logo, RegisterText } from "./styled";

const logo = require('../../../assets/images/logo.png')
const companyLogo = require('../../../assets/images/logo-obc.png')

const Login = () =>{

    const navigation = useNavigation<PropsStack>()

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
            <ForgetPassword>Esqueci sua senha?</ForgetPassword>
            <DefaultButton buttonType="primary" marginVertical={40} buttonHandle={() => handleLogin()}>Fazer Login</DefaultButton>
            <RegisterText onPress={() => navigation.navigate('Home')}><Bold>Ainda não tenho conta</Bold></RegisterText>
            <CompanyLogo source={companyLogo}/>
        </Container>
    )
}

export default Login