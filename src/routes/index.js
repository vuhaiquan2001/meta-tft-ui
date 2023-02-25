//import layout
import { HomeLayout } from '../components/layouts';

import Home from '../pages/Home';
import TeamComp from '../pages/TeamComp';
import Item from '../pages/Items';
import Champ from '../pages/Champs';
import DownloadPage from '../pages/DownloadPage';

//public routes
const publicRoutes = [
    { path: '/', component: Home, layout: HomeLayout },
    { path: '/comps', component: TeamComp },
    { path: '/items', component: Item },
    { path: '/champs', component: Champ },
    { path: '/download', component: DownloadPage, layout: HomeLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
