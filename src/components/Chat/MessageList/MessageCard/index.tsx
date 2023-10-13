import React, { useEffect, useState } from "react";
import { ReceiverMessage, ReceiverMessageContainer, SenderMessage, SenderMessageContainer } from "./styled";
import { Message } from "../../../../entities/Message";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
    item: Message
}

const MessageCard = ({item}: Props) => {
    const [senderId, setSenderId] = useState<string>('')

    const handleGetUser =async () => {
        const user = await AsyncStorage.getItem('user')
        const { _id } = JSON.parse(user || '')

        setSenderId(_id)
    }

    useEffect(() => { handleGetUser() }, [])

    return(
        <>
            {
                    <SenderMessageContainer>
                        {
                            item.sender == senderId ?  
                                (
                                    <SenderMessage>{item.content}</SenderMessage>
                                ) : 
                                (
                                    <ReceiverMessage>{item.content}</ReceiverMessage>
                                )
                        }
                    </SenderMessageContainer>
            }
        </>
    )
}

export default MessageCard;
