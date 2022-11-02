import { keyframes } from 'styled-components'

export const slideUpAndFade = keyframes`
    0% { opacity: 0; transform: translateY(4px); }
    100% { opacity: 1; transform: translateY(0); }
`

export const slideRightAndFade = keyframes`
    0% { opacity: 0; transform: translateX(-4px); }
    100% { opacity: 1; transform: translateX(0); }
`

export const slideDownAndFade = keyframes`
    0% { opacity: 0; transform: translateY(-4px); }
    100% { opacity: 1; transform: translateY(0); }
`

export const slideLeftAndFade = keyframes`
    0% { opacity: 0; transform: translateX(4px); }
    100% { opacity: 1; transform: translateX(0); }
`
