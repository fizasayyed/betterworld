import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FormState {
    name: string;
    email: string;
    upi_id: string,
    updateName: (name: string) => void;
    updateEmail: (email: string) => void;
    updateUPI: (upi_id: string) => void;
}

export const useFormStore = create<FormState>()(
    persist(
        (set) => ({
            name: '',
            email: '',
            upi_id: '',
            updateName: (name) => set({ name }),
            updateEmail: (email) => set({ email }),
            updateUPI: (upi_id) => set({ upi_id }),
        }),
        {
            name: 'form-storage', // unique name for localStorage
        }
    )
);
