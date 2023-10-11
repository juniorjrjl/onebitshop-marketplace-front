import { useEffect, useState } from "react";
import favoriteService from "../../services/favoriteService";
import { LikeButton, LikeImage } from "./styled";

interface Props{
    favorites: boolean;
    productId: string;
}

const like = require('../../../assets/icons/like.png')
const liked = require('../../../assets/icons/liked.png')

const Like = ({ favorites, productId }: Props) => {
    const [isFavorited, setIsFavorited] = useState<boolean>(false)
    const favoriteToogle = (favorited: boolean) => {
        if (favorited)
            favoriteService.removeFavorite(productId)
        else
            favoriteService.setFavorite(productId)
        setIsFavorited(!favorited)
    }

    useEffect(() => { setIsFavorited(favorites) }, [favorites])

    return (
        <LikeButton onPress={() => favoriteToogle(isFavorited)}>
            <LikeImage source={isFavorited ? liked : like}/>
        </LikeButton>
    )
};

export default Like
