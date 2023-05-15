import React, { SetStateAction } from "react";
import { DropDown, DropDownContainer, ArrowIcon } from "./styled";

const arrowDown = require('../../../../assets/icons/arrow-down.png')

interface DropDownProps {
    data: Object[];
    placeholder: string;
    setSelected: React.Dispatch<SetStateAction<string>>;
    emptyMessage: string
}

const DropDownComponent = ({data, placeholder, setSelected, emptyMessage}: DropDownProps) =>{

    const emptyItem = [{value: emptyMessage, disabled: true}]
    const checkedData = data?.length <= 0 ? emptyItem : data;

    return(
        <DropDownContainer>
            <DropDown  setSelected={setSelected} data={checkedData} placeholder={placeholder} 
                save="value" search={false} arrowicon={<ArrowIcon source={arrowDown}/>} />
        </DropDownContainer>
    )
}

export default DropDownComponent