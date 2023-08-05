import React from "react";
import { ReceiverMessage, ReceiverMessageContainer, SenderMessage, SenderMessageContainer } from "./styled";

const MessageCard = ({item}: any) => {
    return(
        <>
            {
                item.receiver == 'seller' ? 
                (
                    <SenderMessageContainer>
                        <SenderMessage>{item.content}</SenderMessage>
                    </SenderMessageContainer>
                ) :
                (
                    <ReceiverMessageContainer>
                        <ReceiverMessage>{item.content}</ReceiverMessage>
                    </ReceiverMessageContainer>
                )
            }
        </>
    )
}

export default MessageCard;
