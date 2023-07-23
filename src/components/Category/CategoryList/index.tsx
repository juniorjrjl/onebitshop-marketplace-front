import React from "react";
import { Product } from "../../../screens/Categories";
import { FlatList, ListRenderItem, View } from "react-native";

interface Props {
    products: Product[];
}

const CategoryList = ({ products }: Props) =>{
    
    const renderItem: ListRenderItem<Product> = () => 
        <>
            <View></View>
        </>

    return(
        <FlatList data={products} renderItem={renderItem} showsVerticalScrollIndicator={false} />
    )
}

export default CategoryList