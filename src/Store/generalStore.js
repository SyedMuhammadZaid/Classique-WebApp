import { create } from "zustand";

const generalStore = (set, get) => ({
    loading: false,
    message: '',
    error: '',
    info: '',
    setLoading: (value) => {
        set((state) => ({
            loading: value
        }))
    },
    setMessage: (value) => {
        set((state) => ({
            message: value
        }))
    },
    setError: (value) => {
        set((state) => ({
            error: value
        }))
    },
    setInfo: (value) => {
        set((state) => ({
            info: value
        }))
    },
})

const useGeneralStore = create(generalStore)
export default useGeneralStore