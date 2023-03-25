import React from "react"
import { Container, Input, InputContainer, Logo, Search } from "./styled";

const logo = require('../../../../assets/images/horizontal-logo.png')
const search = require('../../../../assets/icons/search.png')

const Header = () =>{
    return(
        <Container>
            <Logo source={logo}/>
            <InputContainer>
                <Input placeholder="pesquisa" placeholderTextColor="#C0C0C0"/>
                <Search source={search}/>
            </InputContainer>
        </Container>
    )
}

export default Header;