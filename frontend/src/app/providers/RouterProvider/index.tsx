import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '@/shared/config/router';
import { Loader } from '@mantine/core';

export const RouterProvider = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(routerConfig).map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Routes>
        </Suspense>
    );
};
