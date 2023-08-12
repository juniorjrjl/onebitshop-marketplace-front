import React from "react"
import { Container } from "./styled"
import DefaultTitle from "../../components/common/DefaultTitle"
import NavBar from "../../components/common/NavBar"
import CategoryList from "../../components/Categories/CategoryList"
import { Product } from "../../entities/Product"

export interface Category {
    category: {
        _id: string;
        product: Product[];
    };
}

const Categories = () => {
    return(
        <>
            <Container contentContainerStyle={{paddingBottom: 150}}>
                <DefaultTitle fontSize={20}>Todas as Categories</DefaultTitle>

                {Data.map(( {category} : Category) => <CategoryList key={category._id} category={category} />)}
            </Container>
            <NavBar />
        </>
    )
}

export default Categories
