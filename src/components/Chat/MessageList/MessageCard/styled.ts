import styled from "styled-components/native";

export const SenderMessageContainer = styled.View`
    width: 200px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.background};
    margin-left: 40%;
    margin-top: 10px;
`;

export const SenderMessage = styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryText};
    font-weight: bold;
`;


export const ReceiverMessageContainer = styled(SenderMessageContainer)`
    background-color: #3A3A3A;
    margin-left: 30px;
`;

export const ReceiverMessage = styled(SenderMessage)``;
