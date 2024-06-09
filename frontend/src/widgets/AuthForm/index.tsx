import { Link } from 'react-router-dom';
import { Button, Input, PasswordInput, Stack } from '@mantine/core';
import { zodResolver } from '@mantine/form';

import { AuthFormSchema } from '@/shared/validate/AuthForm.schema.ts';

import { AuthFormProvider, useRegisterForm } from '@/widgets/AuthForm/model/useAuthForm.ts';

export const AuthForm = () => {
    const form = useRegisterForm({
        mode: 'uncontrolled',
        initialValues: {
            username: '',
            password: '',
        },
        validate: zodResolver(AuthFormSchema),
    });
    const onSubmit = form.onSubmit((values) => console.log(values));

    return (
        <AuthFormProvider form={form}>
            <Stack miw={420}>
                <form onSubmit={onSubmit}>
                    <Input autoFocus {...form.getInputProps('username')} placeholder='Введите имя пользователя' />
                    <PasswordInput {...form.getInputProps('password')} placeholder='Введите пароль' />
                    <Button type='submit'>Войти</Button>
                </form>
                <Button variant='light' component={Link} to='/register'>
                    Регистрация
                </Button>
            </Stack>
        </AuthFormProvider>
    );
};
