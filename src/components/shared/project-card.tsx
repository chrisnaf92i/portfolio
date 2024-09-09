'use client';
import React from 'react';
import Button from './button';
import styled from 'styled-components';

type PropsType = {
    name: string;
    thumbnail: string;
    url: string;
};

export default function ProjectCard({ name, thumbnail, url }: PropsType) {
    return (
        <ProjectCardStyled>
            <img
                src={thumbnail}
                alt={`Miniature du site internet : ${name}`}
            />
            <ProjectTextContainer>
                <h2>{name}</h2>
                <Button
                    $cta
                    onClick={() => window.open(url, '_blank')}
                >
                    Visitez{' '}
                </Button>
            </ProjectTextContainer>
        </ProjectCardStyled>
    );
}

const ProjectCardStyled = styled.article`
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 8px;
    background-color: #4c4575;
    img {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        width: 100%;
        height: auto;
    }
`;

const ProjectTextContainer = styled.div`
    display: flex;
    padding: 8px;
    justify-content: space-between;
`;
