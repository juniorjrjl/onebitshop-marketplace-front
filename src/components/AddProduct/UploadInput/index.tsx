import React, { SetStateAction } from "react";
import { UploadContainer, UploadIcon, UploadTitle } from "./styled";
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
            setImages(result.assets)
        }else {
            Alert.alert('Você não selecionou imagens')
        }
    }

    return(
        <UploadContainer onPress={handlePickUpImage}>
            <UploadTitle></UploadTitle>
            <UploadIcon source={updloadIcon}/>
        </UploadContainer>
    )
}

export default UploadInput