const navMenu = [
    {
        name: 'Comps',
        url: '/comps',
    },
    {
        name: 'Game Modes',
        children: [
            { title: 'Hyper Roll', url: '/' },
            { title: 'Double Up', url: '/' },
            { title: 'PBE Comps', url: '/' },
        ],
    },
    {
        name: 'Stats',
        children: [
            { title: 'Items', url: '/' },
            { title: 'Champions', url: '/' },
            { title: 'Triats', url: '/' },
        ],
    },
    {
        name: 'Players',
        children: [
            { title: 'Raising', url: '/' },
            { title: 'One Tricks', url: '/' },
            { title: 'Hyper Roll One Tricks', url: '/' },
        ],
    },
    {
        name: 'Tools',
        children: [
            { title: 'In-Game App', url: '/' },
            { title: 'Loaded Dice', url: '/' },
            { title: 'Tome Of Triats', url: '/' },
            { title: 'Win Chance', url: '/' },
        ],
    },
];

const navSocial = [];

export { navMenu, navSocial };
