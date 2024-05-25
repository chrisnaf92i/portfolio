import React from 'react';
import Colors from '@/utils/colors';
import styled from 'styled-components';

type ButtonProps = {
    isCta: boolean;
};

export const Button = styled.button<ButtonProps>`
    padding: 8px 16px;
    margin: 8px;
    background-color: ${({ isCta }) => (isCta ? Colors.main : 'transparent')};
    box-shadow: 0px 4px 3px black;
    cursor: pointer;
    border: ${({ isCta }) => (isCta ? 'none' : `2px solid ${Colors.main}`)};
    text-transform: uppercase;
    color: ${({ isCta }) => (isCta ? 'white' : Colors.main)};
    border-radius: 8px;
    font-weight: bold;
`;

export const TextInput = styled.input`
    width: 100%;
    padding: 8px;
    margin: 8px;
    border: 2px solid ${Colors.main};
    border-radius: 8px;
    box-sizing: border-box;
    margin: 0;
`;

export const Label = styled.label`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px 4px;
    @media (min-width: 635px) {
        width: 50%;
    }
`;

export const WhiteButton = styled.button`
    background-color: transparent;
    border: none;
`;

type Props = {
    onChange: () => void;
    value: boolean;
};

export default function ToggleButton({ onChange, value }: Props) {
    return (
        <ToggleStatic value={value}>
            <input
                type="button"
                onClick={onChange}
                style={{ display: 'none' }}
            />
            {/*  <ToggleDynamic value={value} /> */}
        </ToggleStatic>
    );
}

const ToggleStatic = styled.div<{ value: boolean }>`
    width: 40px;
    height: 20px;
    background-color: #dadada;
    border-radius: 24px;
    display: flex;
    padding: 5px;
    align-items: center;
    margin: 8px;
    &::before {
        content: '';
        width: 20px;
        height: 20px;
        background-color: blue;
        transform: ${({ value }) =>
            value ? 'translateX(100%)' : 'translateX(0)'};
        border-radius: 100%;
        transition: 250ms ease-in-out;
    }
`;
/* 
const ToggleDynamic = styled.div<{ value: boolean }>`
    width: 20px;
    height: 20px;
    background-color: blue;
    transform: ${({ value }) => (value ? 'translateX(100%)' : 'translateX(0)')};
    transition: 250ms;
`;
 */
