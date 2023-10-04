import React, { useEffect, useState } from "react"
import { Container, NoResult } from "./styled"
import Header from "../../components/common/Header"
import NavBar from "../../components/common/NavBar"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { PropsNavigationStack } from "../../routes"
import ProductList from "../../components/common/ProductList"
import { Product } from "../../entities/Product"
import searchService from "../../services/searchService"
import Loader from "../Loader"
import Filters from "../../components/Filters"

type Props = NativeStackScreenProps<PropsNavigationStack, "Search">

const Search = ({ route }: Props) =>{
    const [data, setData] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const query = route?.params.query
    
    const handleSearch = async () =>{
        const { data } = await searchService.getSearchedProducts(query)

        setData(data.products);
        setLoading(false);
    }

    useEffect(() => { handleSearch() }, [query])

    return(
        <Container>
            <Header />
            <Filters />
            { 
                loading ? 
                    (<Loader />) : 
                    (data.length <= 0 ? 
                        <NoResult>Produto(s) não encontrado(s)</NoResult> : 
                        <ProductList handleGetProducts={handleSearch} products={data}/>
                    )
            }
            <NavBar />
        </Container>
    )
}

export default Search
