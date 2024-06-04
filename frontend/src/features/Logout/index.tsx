import { Navigate } from 'react-router-dom';

import { STORAGE } from '@/shared/services/StorageService';

export const Logout = () => {
    STORAGE.clear();
    return <Navigate to='/login' />;
};
