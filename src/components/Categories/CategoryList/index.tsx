import React from "react";
import { Container, SeeMore, Title, TitleContainer } from "./styled";
import { Category, Product } from "../../../screens/Categories";
import { FlatList, ListRenderItem } from "react-native";
import CategoryCard from "../CategoryCard/indext";

const CategoryList = ({ category }: Category) =>{
    const renderItem: ListRenderItem<Product> = ({item}) =>  <CategoryCard product={item} key={item.id}/>
    return(
        <Container>
            <TitleContainer>
                <Title>{category._id}</Title>
                <SeeMore>Ver mais</SeeMore>
            </TitleContainer>
            <FlatList data={category.product} renderItem={renderItem}
                horizontal showsHorizontalScrollIndicator={false}/>
        </Container>
    )
}

export default CategoryList