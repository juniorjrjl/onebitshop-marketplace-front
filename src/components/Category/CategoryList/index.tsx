import React from "react";
import { Product } from "../../../screens/Categories";
import { FlatList, ListRenderItem, View } from "react-native";
import CategoryCard from "./CategoryCard";

interface Props {
    products: Product[];
}

const CategoryList = ({ products }: Props) =>{
    
    const renderItem: ListRenderItem<Product> = ({ item }) => <CategoryCard product={item}/>

    return(
        <FlatList data={products} renderItem={renderItem} showsVerticalScrollIndicator={false} />
    )
}

export default CategoryList
