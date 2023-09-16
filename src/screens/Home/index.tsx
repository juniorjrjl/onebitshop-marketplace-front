import React from "react"
import Header from "../../components/common/Header"
import NavBar from "../../components/common/NavBar"
import ProductList from "../../components/common/ProductList"
import { Container } from "./styled"
import useAuth from "../../hook/useAuth"
import { Button } from "react-native"

const Home = () => {
    const { token, logout } = useAuth()
    return(
        <Container>
            <Header />
            <Button title="Logout" onPress={() => logout()}/>
            <ProductList />
            <NavBar />
        </Container>
    )
}

export default Home
