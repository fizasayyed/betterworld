import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FormState {
    name: string;
    email: string;
    payment_status: string,
    updateName: (name: string) => void;
    updateEmail: (email: string) => void;
    updatePaymentStatus: (payment_status: string) => void;
}

export const useFormStore = create<FormState>()(
    persist(
        (set) => ({
            name: '',
            email: '',
            payment_status: '',
            updateName: (name) => set({ name }),
            updateEmail: (email) => set({ email }),
            updatePaymentStatus: (payment_status) => set({ payment_status }),
        }),
        {
            name: 'form-storage', // unique name for localStorage
        }
    )
);
