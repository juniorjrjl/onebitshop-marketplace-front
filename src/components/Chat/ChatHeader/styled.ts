import styled from "styled-components/native";

export const Container = styled.View`
    margin: 0px 30px;
    border-bottom-width: 1px;
    border-bottom-color: #2E2F2F;
    padding-bottom: 20px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UserNane = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryText};
`;

export const ModalButton = styled.TouchableOpacity`
    width: 30px;
    align-items: center;
`;

export const ModalImage = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 9px;
`;

export const ModalOverlay = styled.TouchableOpacity`
    flex: 1;
`;

export const ModalContainer = styled.View`
    width: 180px;
    height: 140px;
    background-color: white;
    border-radius: 5px;
    justify-content: center;
    position: absolute;
    top: 12%;
    right: 11%;
`

export const ModalText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin: 5px;
    margin-left: 8px;
`;
