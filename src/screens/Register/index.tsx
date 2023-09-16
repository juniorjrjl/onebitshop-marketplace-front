import React, { useState } from 'react';
import { AcceptTerms, CompanyLogo, Container, Title } from './styled';
import BackIcon from '../../components/common/BackIcon';
import Form from '../../components/Register/Form';
import DefaultButton from '../../components/common/DefaultButton';
import { useNavigation } from '@react-navigation/native';
import { PropsStack } from '../../routes';
import useAuth from '../../hook/useAuth';
import { Alert } from 'react-native';

const companyLogo = require('../../../assets/images/logo-obc.png')

const Register = () =>{
    const navigation = useNavigation<PropsStack>()

    const [fields, setFields] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        confirmPassword: ""
    })

    const { register } = useAuth();

    const handleRegister = async () => {
        if (fields.password.length < 4){
            Alert.alert("A senha deve ter no mínimo 4 caractéres")
            return
        }else if (fields.password !== fields.confirmPassword){
            Alert.alert("A senha e a confirmação de senha são diferentes")
            return
        }else if (!fields.name || !fields.phone || !fields.email){
            Alert.alert("Preencha todos os campos")
            return
        }

        register(fields.name, fields.email, fields.password, fields.phone)
        Alert.alert("Registro feito com sucesso")
    }

    return(
        <Container contentContainerStyle={{paddingBottom: 60}}>
            <BackIcon marginLeft={20}/>
            <Title>Criar uma Conta</Title>
            <Form fields={fields} setFields={setFields}/>
            <DefaultButton buttonType='primary' marginVertical={30} buttonHandle={handleRegister}>Cadastrar</DefaultButton>
            <AcceptTerms>Ao me cadastrar aceito{'\n'}os termos de politica de privacidade</AcceptTerms>
            <DefaultButton buttonType='secondery' marginVertical={30} buttonHandle={() => navigation.navigate('Login')}>Fazer Login</DefaultButton>
            <CompanyLogo source={companyLogo}/>
        </Container>
    )
}

export default Register
