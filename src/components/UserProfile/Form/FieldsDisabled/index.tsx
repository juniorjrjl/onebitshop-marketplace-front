import React from "react";
import { InputDisabled, PlaceholderDisabled } from "./styled"

const FieldsDisabled = () => {
    return(
        <>
            <InputDisabled>
                <PlaceholderDisabled>Junior</PlaceholderDisabled>
            </InputDisabled>
            <InputDisabled>
                <PlaceholderDisabled>junior@junior.com</PlaceholderDisabled>
            </InputDisabled>
            <InputDisabled>
                <PlaceholderDisabled>(25)48999-8955</PlaceholderDisabled>
            </InputDisabled>
            <InputDisabled>
                <PlaceholderDisabled>Dropdown</PlaceholderDisabled>
            </InputDisabled>
            <InputDisabled>
                <PlaceholderDisabled>Senha</PlaceholderDisabled>
            </InputDisabled>
        </>
    )
}

export default FieldsDisabled