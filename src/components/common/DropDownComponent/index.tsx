import React, { SetStateAction } from "react";
import { DropDown, DropDownContainer, ArrowIcon } from "./styled";

const arrowDown = require('../../../../assets/icons/arrow-down.png')

interface DropDownProps {
    data: Object[];
    placeholder: string;
    setSelected: React.Dispatch<SetStateAction<string>>;
    emptyMessage: string;
    saveMethod: 'value' | 'key'
}

const DropDownComponent = ({data, placeholder, setSelected, emptyMessage, saveMethod}: DropDownProps) =>{

    const emptyItem = [{value: emptyMessage, disabled: true}]
    const checkedData = data?.length <= 0 ? emptyItem : data;

    return(
        <DropDownContainer>
            <DropDown  setSelected={setSelected} data={checkedData} placeholder={placeholder} 
                save={saveMethod} search={false} arrowicon={<ArrowIcon source={arrowDown}/>} />
        </DropDownContainer>
    )
}

export default DropDownComponent
