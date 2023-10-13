import * as SecureStore from "expo-secure-store";
import api from "./api";

interface StartChatProps {
    product: string;
    seller: string;
    initialMessage: string
}

interface SendMessageProps {
    _id: string;
    content: string;
    receiver: string;
    sender: string
}

const chatService = {

    getChats : async () => {
        const token = await SecureStore.getItemAsync('onebitshop-token');

        const res = await api.get('/conversations', { headers : { Authorization: `Bearer ${token}` } })

        return res
    },

    startChat : async ( params : StartChatProps ) => {
        const token = await SecureStore.getItemAsync('onebitshop-token');

        const res = await api.post('/conversations', params, { headers : { Authorization: `Bearer ${token}` } })

        return res
    },

    sendMessage : async ( params : SendMessageProps ) => {
        const token = await SecureStore.getItemAsync('onebitshop-token');

        const res = await api.post(`/conversations/${params._id}/send`, params, { headers : { Authorization: `Bearer ${token}` } })

        return res
    }

}

export default chatService;
