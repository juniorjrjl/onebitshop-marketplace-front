import React from 'react';
import { AcceptTerms, CompanyLogo, Container, Title } from './styled';
import BackIcon from '../../components/common/BackIcon';
import Form from '../../components/Register/Form';
import DefaultButton from '../../components/common/DefaultButton';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes';

const companyLogo = require('../../../assets/images/logo-obc.png')

const Register = () =>{
    const navigation = useNavigation<PropsStack>()

    return(
        <Container contentContainerStyle={{paddingBottom: 60}}>
            <BackIcon marginLeft={20}/>
            <Title>Criar uma Conta</Title>
            <Form />
            <DefaultButton buttonType='primary' marginVertical={30} buttonHandle={() => {}}>Cadastrar</DefaultButton>
            <AcceptTerms>Ao me cadastrar aceito{'\n'}os termos de politica de privacidade</AcceptTerms>
            <DefaultButton buttonType='secondery' marginVertical={30} buttonHandle={() => navigation.navigate('Login')}>Fazer Login</DefaultButton>
            <CompanyLogo source={companyLogo}/>
        </Container>
    )
}

export default Register
