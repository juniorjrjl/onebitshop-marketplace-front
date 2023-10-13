import React, { useState } from "react";
import { NoChat } from "./styled";
import { FlatList, ListRenderItem } from "react-native";
import ChatCard from "./ChatCard";
import { Chat } from "../../../entities/Message";
import chatService from "../../../services/chatService";
import { useFocusEffect } from "@react-navigation/native";
import Loader from "../../../screens/Loader";

const ChatList = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [chats, setChats] = useState<Chat[]>([])
    const renderItem: ListRenderItem<Chat> = ({item}) => <ChatCard data={item}/>

    const handleGetChats =async () => {
        const res = await chatService.getChats()

        setChats(res.data)
        setLoading(false)
    }

    useFocusEffect( React.useCallback(() => {handleGetChats()}, []))

    if (loading) return <Loader />

    return(
        <>
            {
                chats.length > 0 ? 
                    (
                        <FlatList 
                            data={chats}
                            keyExtractor={(item) => item._id}
                            renderItem={renderItem}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 80}}
                            />
                    ):
                    (
                        <NoChat>Você não tem nenhuma conversa no momento</NoChat>
                    )
            }
        </>
    )
}

export default ChatList;
