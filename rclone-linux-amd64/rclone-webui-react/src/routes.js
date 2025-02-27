import React from 'react';

const MyDashboard = React.lazy(() => import('./views/RemoteManagement/NewDrive'));
const Home = React.lazy(() => import('./views/Home'));
const ShowConfig = React.lazy(() => import('./views/RemoteManagement/ShowConfig'));
const RemoteExplorerLayout = React.lazy(() => import("./views/Explorer/RemoteExplorerLayout"));
const Login = React.lazy(() => import("./views/Pages/Login"));
const MountDashboard = React.lazy(() => import("./views/MountDashboard"));
const RCloneDashboard = React.lazy(() => import("./views/RCloneDashboard"));
const Newdashboard = React.lazy(() => import("./views/Newdashboard"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
// Define the routes as required
const routes = [
    {path: '/', exact: true, name: 'Home'},
    {path: '/newdrive/edit/:drivePrefix', name: 'Edit Remote', component: MyDashboard},
    {path: '/newdrive', exact: true, name: 'New Remote', component: MyDashboard},
    {path: '/login', exact: true, name: 'Login Page', component: Login},
    {path: '/showconfig', name: 'Configs', component: ShowConfig},
    {path: '/remoteExplorer/:remoteName/:remotePath', exact: true, name: 'Explorer', component: RemoteExplorerLayout},
    {path: '/remoteExplorer', name: 'Explorer', component: RemoteExplorerLayout},
    {path: '/rcloneBackend', name: 'Rclone Backend', component: RCloneDashboard},
    {path: '/mountDashboard', name: 'Mount Dashboard', component: MountDashboard},
    {path: '/dashboard', name: 'Dashboard', component: Home},
    {path: '/newdashboard', name: 'Newdashboard', component: Newdashboard},
];

export default routes;
