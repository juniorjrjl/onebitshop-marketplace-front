import React from "react"
import { Container, EmptyView, Title } from "./styled"
import BackIcon from "../BackIcon"

type TitleProps = {
    children: string
    fontSize: number
}

const DefaultTitle = ({children, fontSize}: TitleProps) =>{
    return(
        <Container>
            <BackIcon marginLeft={0}/>
            <Title fontSize={fontSize}>{children}</Title>
            <EmptyView />
        </Container>
    )
}

export default DefaultTitle