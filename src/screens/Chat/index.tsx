import React, { useEffect, useState } from "react";
import { Container, Input, InputContainer, SendButton, SendIcon } from "./styled";
import NavBar from "../../components/common/NavBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";
import ChatHeader from "../../components/Chat/ChatHeader";
import MessageList from "../../components/Chat/MessageList";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import { Socket,  io } from "socket.io-client";
import * as SecureStore from "expo-secure-store";
import { Message } from "../../entities/Message";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<PropsNavigationStack, 'Chat'>;

const sendIcon = require('../../../assets/icons/send.png')

let socket : Socket | null = null

const connectSocket =async () => {
    const token = await SecureStore.getItemAsync('onebitshop-token');
    socket = io('ws://9f23-187-180-212-135.ngrok-free.app', 
    { 
        auth: {
            token
        } 
    })
}

connectSocket();

const Chat = ({route}: Props) =>{

    const [content, setContent] = useState<string>("")
    const [receiver, setReceiver] = useState<string>("")
    const [sender, setSender] = useState<string>("")
    const [messageList, setMessageList] = useState<Message[]>([])

    const handleGetUsers =async () => {
        const user = await AsyncStorage.getItem('user')
        const { _id } = JSON.parse(user || '')

        if (route.params.buyerId === _id){
            setSender(route.params.buyerId)
            setReceiver(route.params.sellerId)
        } else {
            setSender(route.params.sellerId)
            setReceiver(route.params.buyerId)
        }
    }

    const handleSendMessage = async () => {
        const message = {
            content,
            sender,
            receiver

        };

        const conversationId = route.params._id

        socket?.emit('message_sent', {
            conversationId,
            message
        })
        setContent('')
    }

    useEffect(() => { 
        setMessageList(route.params.messages) 
        handleGetUsers()
    }, [])

    useEffect(() => { 
        socket?.on('new_message', (newMessage) => {
            setMessageList((recentState) => [newMessage.message,...recentState]);
        });
        return () => {
            socket?.off('new_message')
        }
    }, [socket])

    return(
        <Container>
            <ChatHeader sellerId={route.params.sellerId}
                sellerName={route.params.sellerName} 
                product={route.params.product}/>

            <MessageList messages={messageList}/>
            <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <InputContainer>
                        <Input placeholder="Digite uma mensage" placeholderTextColor='white' multiline value={content} onChangeText={(val) => setContent(val)}/>
                        <SendButton onPress={handleSendMessage}>
                            <SendIcon source={sendIcon}/>
                        </SendButton>
                    </InputContainer>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <NavBar />
        </Container>
    )
}

export default Chat;
