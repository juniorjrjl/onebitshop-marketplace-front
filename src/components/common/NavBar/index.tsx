import { useNavigation } from "@react-navigation/native"
import React from "react"
import { PropsStack } from "../../../routes"
import { Container, Icon, IconButton } from "./styled"
import useAuth from "../../../hook/useAuth"

const home = require('../../../../assets/icons/home.png')
const chat = require('../../../../assets/icons/chat.png')
const add = require('../../../../assets/icons/add.png')
const categories = require('../../../../assets/icons/categories.png')
const profile = require('../../../../assets/icons/profile.png')

const NavBar = () =>{

    const navigation = useNavigation<PropsStack>()
    const { token } = useAuth();

    return(
        <Container>
            <IconButton onPress={() => navigation.navigate('Home')}>
                <Icon source={home}/>
            </IconButton>
            <IconButton onPress={() => navigation.navigate(token ? 'AllChats' : 'Login')}>
                <Icon source={chat}/>
            </IconButton>
            <IconButton onPress={() => navigation.navigate(token ? 'AddProduct' : 'Login')}>
                <Icon source={add}/>
            </IconButton>
            <IconButton onPress={() => navigation.navigate('Categories')}>
                <Icon source={categories}/>
            </IconButton>
            <IconButton onPress={() => navigation.navigate(token ? 'UserProfile' : 'Login')}>
                <Icon source={profile}/>
            </IconButton>
        </Container>
    )
}

export default NavBar;
