const navMenu = [
    {
        name: 'Comps',
        url: '/comps',
    },
    {
        name: 'Game Modes',
        children: [
            { title: 'Hyper Roll', url: '/comps' },
            { title: 'Double Up', url: '/comps' },
            { title: 'PBE Comps', url: '/comps' },
        ],
    },
    {
        name: 'Stats',
        children: [
            { title: 'Items', url: '/items' },
            { title: 'Champions', url: '/champs' },
            { title: 'Triats', url: '/champs' },
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
