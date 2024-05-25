'use client';
import Image from 'next/image';
import styles from './page.module.css';
import ProjectCard from '@/components/ProjectCard';
import projects from '../data/projects';
import { PrimaryTitle, SecondaryTitle } from '@/components/shared/Text';
import styled from 'styled-components';
import HeroImage from '../media/images/hero.jpeg';
import { Button } from '@/components/shared/Form';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    return (
        <main>
            <HeroBanner>
                <article>
                    <PrimaryTitle>
                        Créons ensemble votre image de demain.
                    </PrimaryTitle>
                    <Button
                        onClick={() => router.push('/contact')}
                        isCta={true}
                    >
                        Me contacter
                    </Button>
                    <Button isCta={false}>Voir mes projets</Button>
                </article>
                <Hero src={HeroImage} alt="Hero Banner" />
            </HeroBanner>

            <section>Mes Projets</section>
        </main>
    );
}

const ProjectsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-around;
`;

const HeroBanner = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Hero = styled(Image)`
    width: 45%;
    height: auto;
`;
