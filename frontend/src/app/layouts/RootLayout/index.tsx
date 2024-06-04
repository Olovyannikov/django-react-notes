import { Main } from './ui';
import type { PropsWithChildren } from 'react';

export const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Main>{children}</Main>
        </>
    );
};
