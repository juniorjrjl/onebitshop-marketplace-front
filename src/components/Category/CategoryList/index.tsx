import React from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import CategoryCard from "./CategoryCard";
import { Product } from "../../../entities/Product";

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
