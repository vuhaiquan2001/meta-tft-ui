import rank from '../gameAssets/game/rank/index';

const filterComps = [
    {
        type: 'mode',
        child: [
            {
                ischecked: true,
                title: 'Ranked',
                total: '17,185,520',
            },
            {
                title: 'Hyper Roll',
                total: '2,694,640',
            },
            {
                title: 'Double Up',
                total: '3,115,520',
            },
        ],
    },
    {
        type: 'patch',
        child: [
            {
                ischecked: true,
                title: 'Patch 13.4',
                total: '232,240',
            },
            {
                title: 'Patch 13.3',
                total: '16,953,280',
            },
            {
                title: 'Patch 13.1c',
                total: '0',
            },
        ],
    },
    {
        type: 'day',
        child: [
            {
                ischecked: true,
                title: 'Last Day',
                total: '232,240',
            },
            {
                title: 'Last 2 Days',
                total: '16,953,280',
            },
            {
                title: 'Last 3 Days',
                total: '16,953,280',
            },
            {
                title: 'Last 4 Days',
                total: '16,953,280',
            },
            {
                title: 'Last 5 Days',
                total: '16,953,280',
            },
            {
                title: 'Last 6 Days',
                total: '16,953,280',
            },
            {
                title: 'Last 7 Days',
                total: '16,953,280',
            },
        ],
    },
    {
        type: 'rank',
        child: [
            {
                ischecked: true,
                img: rank.Unknown,
                title: 'Unknown',
                total: '16,953,280',
            },
            {
                img: rank.Iron,
                title: 'Iron',
                total: '6,953,280',
            },
            {
                img: rank.Bronze,
                title: 'Bronze',
                total: '1,953,280',
            },
            {
                img: rank.Silver,
                title: 'Silver',
                total: '653,280',
            },
            {
                img: rank.Gold,
                title: 'Gold',
                total: '13,280',
            },
            {
                img: rank.Platinum,
                title: 'Platinum',
                total: '953,280',
            },
            {
                img: rank.Diamond,
                title: 'Diamond',
                total: '16,953',
            },
            {
                img: rank.Master,
                title: 'Master',
                total: '16,950',
            },
            {
                img: rank.Grandmaster,
                title: 'Grandmaster',
                total: '53,280',
            },
            {
                img: rank.Challenger,
                title: 'Challenger',
                total: '153,280',
            },
        ],
    },
];

export { filterComps };
