import { BaseApi } from '@/shared/api/config.ts';
import { HTTP_METHOD } from '@/shared/api/constants.ts';
import { STORAGE } from '@/shared/services/StorageService';
import { createStore } from '@/shared/utils';

export const [useAuthorization, { set: setAuthorization }] = createStore<boolean | null>(null);

export const AuthorizeService = BaseApi.enhanceEndpoints({
    addTagTypes: [''],
}).injectEndpoints({
    endpoints: (build) => ({
        sendRefreshToken: build.mutation<{ access: string }, void>({
            query: () => {
                const refresh = STORAGE.getRefreshToken();
                return {
                    url: 'api/token/refresh/',
                    method: HTTP_METHOD.POST,
                    body: {
                        refresh,
                    },
                };
            },
        }),
    }),
});

export const { useSendRefreshTokenMutation } = AuthorizeService;
