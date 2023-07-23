import styled from "styled-components/native";
import { InputContainer } from "../styled";
import { ArrowIcon, DropDown, DropDownContainer } from "../../../common/DropDownComponent/styled";

export const InputDisabled = styled(InputContainer)`
    background-color: transparent;
`

export const PlaceholderDisabled = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondaryText};
`
export const DropDownContainerDisabled = styled(DropDownContainer)``

export const DropDownDisabled = styled(DropDown).attrs({
    boxStyles:{
        minWidth: '100%',
        backgroudColor: 'transparent',
        borderRadius: 5,
        paddingLeft: 10,
    },
    inputStyled: {
        color: '#c0c0c1',
        fontWeight: 'bold',
        fontSize: 18
    }
})``

export const ArrowIconDisabled = styled(ArrowIcon)``
