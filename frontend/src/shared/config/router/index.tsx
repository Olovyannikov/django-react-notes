import type { RouteProps } from 'react-router-dom';

import { IndexPageLazy } from '@/pages/IndexPage';
import { LoginPageLazy } from '@/pages/LoginPage';
import { NotFoundPageLazy } from '@/pages/NotFoundPage';
import { RegisterPageLazy } from '@/pages/RegisterPage';
import { ProtectedRoute } from '@/shared/ui';

export enum AppRoutes {
    INDEX = 'index',
    NOT_FOUND = 'notFound',
    REGISTER = 'register',
    LOGIN = 'login',
}

export const RouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.INDEX]: '/',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.LOGIN]: '/login',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.INDEX]: {
        path: RouterPaths.index,
        element: (
            <ProtectedRoute>
                <IndexPageLazy />
            </ProtectedRoute>
        ),
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPaths.notFound,
        element: <NotFoundPageLazy />,
    },
    [AppRoutes.LOGIN]: {
        path: RouterPaths.login,
        element: <LoginPageLazy />,
    },
    [AppRoutes.REGISTER]: {
        path: RouterPaths.register,
        element: <RegisterPageLazy />,
    },
};
