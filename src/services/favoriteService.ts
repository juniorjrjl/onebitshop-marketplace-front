import * as SecureStore from "expo-secure-store";
import api from "./api";

const favoriteService = {

    getFavorite :async () => {
        const token = await SecureStore.getItemAsync('onebitshop-token');
        const res = await api.get('/favorites', { headers: {Authorization: `Bearer ${token}`} })

        return res
    },

    setFavorite :async (_id: string) => {
        const token = await SecureStore.getItemAsync('onebitshop-token');
        const res = await api.post('/favorites/', {_id}, { headers: {Authorization: `Bearer ${token}`} })

        return res
    },

    removeFavorite :async (_id: string) => {
        const token = await SecureStore.getItemAsync('onebitshop-token');
        const res = await api.delete(`/favorites/${_id}`, { headers: {Authorization: `Bearer ${token}`} })

        return res
    }

}

export default favoriteService