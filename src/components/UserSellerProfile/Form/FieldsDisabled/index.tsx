import React from "react";
import { ArrowIconDisabled, DropDownDisabled, DropDownContainerDisabled, InputDisabled, PlaceholderDisabled } from "./styled"

const arrowIconDisabled = require('../../../../../assets/icons/arrow-down.png')

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
            <DropDownContainerDisabled pointerEvents="none">
                <DropDownDisabled  setSelected={() => {}} data={[]} placeholder="Seus Endereços" arrowicon={<ArrowIconDisabled source={arrowIconDisabled}/>}/>
            </DropDownContainerDisabled>
            <InputDisabled>
                <PlaceholderDisabled>Senha</PlaceholderDisabled>
            </InputDisabled>
        </>
    )
}

export default FieldsDisabled
