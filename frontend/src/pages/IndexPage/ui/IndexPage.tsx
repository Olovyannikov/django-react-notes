import { Button, Container } from '@mantine/core';

import { RootLayout } from '@/app/layouts/RootLayout';

export default function IndexPage() {
    return (
        <RootLayout>
            <Container>
                <Button>Some btn</Button>
            </Container>
        </RootLayout>
    );
}
