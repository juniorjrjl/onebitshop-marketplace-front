import React from "react";
import { FlatList, ListRenderItem } from 'react-native'
import ProductCard from "./ProductCard";
import { Product } from "../../../entities/Product";

const like = require('../../../../assets/icons/like.png')
const liked = require('../../../../assets/icons/liked.png')

const ProductList = () =>{

    const renderItem: ListRenderItem<Product> = ({item}) => (<ProductCard data={item}/>)

    return(
        <FlatList data={[]} keyExtractor={(item: Product)=>item._id } 
            renderItem={renderItem} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}/>
    )
}

export default ProductList
