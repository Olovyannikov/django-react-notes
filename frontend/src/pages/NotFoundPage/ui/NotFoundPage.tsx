import { Link } from 'react-router-dom';
import { Button, Title } from '@mantine/core';

import { RootLayout } from '@/app/layouts/RootLayout';

export default function NotFoundPage() {
    return (
        <RootLayout>
            <section>
                <Title order={3}>404</Title>
                <Title order={3}>Страница не найдена</Title>
                <Button component={Link} to='/' size='large'>
                    Вернуться на главную
                </Button>
            </section>
        </RootLayout>
    );
}
