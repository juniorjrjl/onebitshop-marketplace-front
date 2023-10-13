import React from "react"
import { FlatList, ListRenderItem } from "react-native"
import MessageCard from "./MessageCard"
import { Message } from "../../../entities/Message"

interface Props{
    messages: Message[]
}

const MessageList = ({ messages }: Props) =>{
    const renderItem: ListRenderItem<any> = ({item}) => (<MessageCard item={item}/>)

    return(
        <FlatList 
            data={messages} 
            inverted 
            keyExtractor={(item, index) => item._id + index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 20 }}
            renderItem={renderItem}/>
    )
}

export default MessageList