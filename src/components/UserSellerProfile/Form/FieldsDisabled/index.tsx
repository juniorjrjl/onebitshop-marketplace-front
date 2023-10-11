import React from "react";
import { ArrowIconDisabled, DropDownDisabled, DropDownContainerDisabled, InputDisabled, PlaceholderDisabled } from "./styled"
import { User } from "../../../../entities/User";

const arrowIconDisabled = require('../../../../../assets/icons/arrow-down.png')

interface Props{
    userInfo: User
}

const FieldsDisabled = ({ userInfo }: Props) => {
    return(
        <>
            <InputDisabled>
                <PlaceholderDisabled>{userInfo.name}</PlaceholderDisabled>
            </InputDisabled>
            <InputDisabled>
                <PlaceholderDisabled>{userInfo.email}</PlaceholderDisabled>
            </InputDisabled>
            <InputDisabled>
                <PlaceholderDisabled>{userInfo.phone}</PlaceholderDisabled>
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
