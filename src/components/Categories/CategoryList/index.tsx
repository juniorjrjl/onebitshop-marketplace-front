import React from "react";
import { Container, SeeMore, Title, TitleContainer } from "./styled";
import { Category } from "../../../screens/Categories";
import { FlatList, ListRenderItem } from "react-native";
import CategoryCard from "../CategoryCard/indext";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { Product } from "../../../entities/Product";

const CategoryList = ({ category }: Category) =>{
    const navigation = useNavigation<PropsStack>()
    const renderItem: ListRenderItem<Product> = ({item}) =>  <CategoryCard product={item} key={item._id}/>
    return(
        <Container>
            <TitleContainer>
                <Title>{category._id}</Title>
                <SeeMore onPress={() => navigation.navigate('Category', {_id: category._id, products: category.product})}>Ver mais</SeeMore>
            </TitleContainer>
            <FlatList data={category.product} renderItem={renderItem}
                horizontal showsHorizontalScrollIndicator={false}/>
        </Container>
    )
}

export default CategoryList