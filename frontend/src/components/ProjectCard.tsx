import React from 'react';
import { Paragraph, PrimaryTitle, TerciaryTitle } from './shared/Text';
import styled from 'styled-components';

type PropsType = {
    title: string;
    description: string;
    imageUrl: string;
};

export default function ProjectCard({ title, description }: PropsType) {
    return (
        <Card>
            {/* <Thumbnail /> */}
            <TerciaryTitle>{title}</TerciaryTitle>
            <Paragraph style={{ textOverflow: 'ellipsis' }}>
                {description}
            </Paragraph>
        </Card>
    );
}

const Thumbnail = styled.image``;

const Card = styled.article`
    width: 25%;
    height: 150px;
    background-color: silver;
    transform: rotateZ(0deg);
    transition: 1500ms;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0px 4px 5px black;
    &:hover {
        transform: rotateY(180deg);
    }
`;
