import React, { SetStateAction } from "react";
import { ImageContainer, ImagePreview, UploadContainer, UploadIcon, UploadTitle } from "./styled";
import * as ImagePicker from "expo-image-picker"
import { Alert } from "react-native";

const updloadIcon = require('../../../../assets/icons/arrow-right.png')

interface ImageProps {
    images: ImagePicker.ImagePickerAsset[];
    setImages: React.Dispatch<SetStateAction<ImagePicker.ImagePickerAsset[]>>;
}

const UploadInput = ({images, setImages}: ImageProps) =>{
    
    const handlePickUpImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            selectionLimit: 6,
            aspect: [4, 3],
            quality: 1
        })
        if (result.assets){
            const images = result.assets.slice(0, 6)
            if (result.assets.length > 6){
                Alert.alert('As imagens adicionais foram ignoradas')
            }
            setImages(images)
        }else {
            Alert.alert('Você não selecionou imagens')
        }
    }

    return(
        <>
            <UploadContainer onPress={handlePickUpImage}>
                <UploadTitle>Selecione até 6 imagens</UploadTitle>
                <UploadIcon source={updloadIcon}/>
            </UploadContainer>
            <ImageContainer>
                {
                    images && images.map(img => ( <ImagePreview key={img.assetId} source={{ uri: img.uri }}/> ))
                }
            </ImageContainer>
        </>
    )
}

export default UploadInput