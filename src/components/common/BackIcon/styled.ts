import styled from "styled-components/native";

type BackImageType = {
    marginLeft: number
}

export const BackContainer = styled.TouchableOpacity``

export const BackImage = styled.Image.attrs({resizeMode: 'contain'})<BackImageType>`
    width: 40px;
    margin-left: ${(props) => props.marginLeft}px;
`
