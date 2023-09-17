import { Image } from "../entities/Product";
import * as SecureStore from "expo-secure-store";
import api from "./api";

interface AddProductParams{
    name: string;
    price: string;
    description: string;
    category: string;
    addressId: string;
    images: Image[];
    published: string;
}

const productService = {

    addProduct: async (params: AddProductParams) => {
        const token = await SecureStore.getItemAsync('onebitshop-token');

        const {name, price, description, category, addressId, images, published} = params

        let formData = new FormData();

        formData.append("name", name)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("category", category)
        formData.append("addressId", addressId)
        formData.append("published", published)
        images.map(image => {
            // @ts-expect-error
            formData.append("images", 
            {
                name: image.filename, 
                uri: image.uri, 
                type: image.type
            })
        })
        const res = await api.post("/products", formData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "multpart/form-data",
                Authorization: `Bearer ${token}`
            }
        })
        return res
    }

}