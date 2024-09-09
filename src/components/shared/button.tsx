'use client';
import colors from '@/utils/colors';
import styled from 'styled-components';

const Button = styled.button<{ $cta: boolean }>`
    height: max-content;
    background-color: ${colors.primary};
    border: none;
    box-shadow: 0px 4px black;
    font-size: 24px;
`;

export default Button;
