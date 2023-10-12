"use client"
import { useRouter } from 'next/navigation'; 
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const currentUser = localStorage.getItem("currentUser");
    const isAuthenticated = currentUser !== null;
    
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;
