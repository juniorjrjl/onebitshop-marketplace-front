import React, { useEffect, useState } from "react"
import { Container } from "./styled"
import DefaultTitle from "../../components/common/DefaultTitle"
import NavBar from "../../components/common/NavBar"
import CategoryList from "../../components/Categories/CategoryList"
import { Product } from "../../entities/Product"
import categoryService from "../../services/categoryService"
import Loader from "../Loader"

export interface Category {
    _id: string;
    products: Product[];
}

const Categories = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<any>([])

    const handleGetCategories =async () => {
        const res = await categoryService.getCategories();
        setCategories(res.data)

        setLoading(false)
    }

    useEffect(() => { handleGetCategories() }, [])

    return(
        <>
            {
                loading ? 
                    (
                        <Loader />
                    ) : 
                    (
                        <>
                            <Container contentContainerStyle={{paddingBottom: 150}}>
                            <DefaultTitle fontSize={20}>Todas as Categories</DefaultTitle>
                                {categories.map(( category : Category) => <CategoryList key={category._id} category={category} />)}
                            </Container>
                            <NavBar />
                        </>
                    )
            }
        </>
    )
}

export default Categories
