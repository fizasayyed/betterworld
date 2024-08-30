import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FormState {
    name: string;
    email: string;
    updateName: (name: string) => void;
    updateEmail: (email: string) => void;
}

export const useFormStore = create<FormState>()(
    persist(
        (set) => ({
            name: '',
            email: '',
            updateName: (name) => set({ name }),
            updateEmail: (email) => set({ email }),
        }),
        {
            name: 'form-storage', // unique name for localStorage
        }
    )
);
