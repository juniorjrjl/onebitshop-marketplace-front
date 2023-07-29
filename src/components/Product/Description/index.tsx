import React, { useState } from "react"
import { DescriptionTxt, ReadMoreLess } from "./styled";

interface Props{
    children: string
}

const Description = ({ children }: Props) => {
    const [readMoreText, setReadMoreText] = useState("Ler mais")
    const [numberOfLine, setNumberOfLine] = useState(3)

    const handleReadMore = (numberLines: number) => {
        if (numberOfLine != 3){
            setReadMoreText("Ler mais");
            setNumberOfLine(3)
        } else {
            setReadMoreText("Ler menos");
            setNumberOfLine(1000)
        }
    }

    return(
        <>
            <DescriptionTxt numberOfLines={numberOfLine}>{children}</DescriptionTxt>
            {
                children.length >= 115 ? 
                    (<ReadMoreLess onPress={() => handleReadMore(numberOfLine)}>{readMoreText}</ReadMoreLess>) : 
                    null
            }
        </>
    )
}

export default Description;
