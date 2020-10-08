import React from 'react'
import { StyledClearBtn } from './styles'

export const ClearJokes = ({ children, clearJokes }) => {
    return(
        <StyledClearBtn onClick={() => clearJokes()}>
            {children}
        </StyledClearBtn>
    )
}