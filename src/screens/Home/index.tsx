import React, { useState } from "react"
import Header from "../../components/common/Header"
import NavBar from "../../components/common/NavBar"
import ProductList from "../../components/common/ProductList"
import { Container } from "./styled"
import productService from "../../services/productService"
import { Product } from "../../entities/Product"
import Loader from "../Loader"
import { useFocusEffect } from "@react-navigation/native"

const Home = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const [total, setTotal] = useState<number>(100);
    const [products, setProducts] = useState<Product[]>([])

    const handleGetProducts = async () => {
        if (page === total){
            return
        }

        const productsData = await productService.getAllProducts(page)

        setProducts([... products, ...productsData.products]);
        setTotal(productsData.total)
        setLoading(false)
        setPage(page + 1)
    }

    useFocusEffect( React.useCallback(() => {handleGetProducts()}, []))

    if (loading) return <Loader />

    return(
        <Container>
            <Header />
                <ProductList products={products} handleGetProducts={handleGetProducts}/>
            <NavBar />
        </Container>
    )
}

export default Home
