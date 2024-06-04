import { createTheme, MantineProvider as Mantine } from '@mantine/core';
import { PropsWithChildren } from 'react';

const theme = createTheme({});

export function MantineProvider({ children }: PropsWithChildren) {
    return <Mantine theme={theme}>{children}</Mantine>;
}
