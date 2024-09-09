type ProjectType = {
    name: string;
    description: string;
    thumbnail: string;
    github?: string;
    type: 'Scolaire' | 'Personnel' | 'Entrainement' | 'Professionnel';
    url: string;
};

const listProject: ProjectType[] = [
    {
        name: 'tic-tac-toe',
        description:
            'Jeu de morpion, le design à été réalisé par front-end mentor',
        thumbnail: 'images/project/thumbnail/tic-tac-toe.png',
        github: 'https://github.com/chrisnaf92i/tic-tac-toe',
        type: 'Entrainement',
        url: 'https://tic-tac-toe.christopher-nafrere.xyz/',
    },
    {
        name: 'BJ Multi Renov',
        description: " Site vitrine pour l'entreprise BJ MULTI RENOV",
        thumbnail: 'images/project/thumbnail/bj-multi-renov.png',
        type: 'Professionnel',
        url: 'https://bjmultirenov.fr/',
    },
];

export default listProject;
