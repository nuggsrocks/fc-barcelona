import React from 'react';

const routes = [
    {path: '/history', name: 'History', Component: React.lazy(() => import('./components/history'))},
    {path: '/stadium', name: 'Stadium', Component: React.lazy(() => import('./components/stadium'))},
    {path: '/rivals', name: 'Rivals', Component: React.lazy(() => import('./components/rivals'))},
    {path: '/fans', name: 'Fans', Component: React.lazy(() => import('./components/fans'))},
    {path: '/players', name: 'Players', Component: React.lazy(() => import('./components/players'))}
];

export default routes;
