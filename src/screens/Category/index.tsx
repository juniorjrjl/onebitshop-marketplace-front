import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";
import CategoryList from "../../components/Category/CategoryList";

type Props = NativeStackScreenProps<PropsNavigationStack, "Category">

const Category = ({ route }: Props) =>{
    return(
        <Container>
            <DefaultTitle fontSize={20}>{route.params._id}</DefaultTitle>
            <CategoryList products={route.params.products}/>
        </Container>
    )
}

export default Category