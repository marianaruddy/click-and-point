import styled, { keyframes } from "styled-components";

export const StyledWrapper = styled.div`
    color:red;
    position: relative;
    height: 100%;
    width: 100%;
`;

const breatheAnimation = keyframes`
    from {
        opacity: 0%
    }
    to {
        opacity: 100%
    }
`

export const Circle = styled.div`
    position: absolute;
    background-color: red;
    left: ${({ x }) => (x-20/2)}px;
    top: ${({ y }) => (y-20/2)-20}px;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    animation-name: ${breatheAnimation};
    animation-duration: 0.3s;
`

export const Button = styled.button`
    height: 20px;
`
