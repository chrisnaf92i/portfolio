'use client';
import ProjectCard from '@/components/shared/project-card';
import listProject from '@/data/projects';
import React from 'react';
import styled from 'styled-components';

export default function ProjectPage() {
    return (
        <main>
            <PageTitle>Mes Projets</PageTitle>

            <ProjectCardList>
                {listProject.map((project, id) => (
                    <ProjectCard
                        name={project.name}
                        thumbnail={project.thumbnail}
                        url={project.url}
                        key={id}
                    />
                ))}
            </ProjectCardList>
        </main>
    );
}

const PageTitle = styled.h1`
    text-align: center;
    margin: 16px;
`;

const ProjectCardList = styled.section`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: auto;
    gap: 16px;

    @media (min-width: 750px) {
        & {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;
