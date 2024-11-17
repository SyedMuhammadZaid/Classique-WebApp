import useApiCall from "../useApiCall"

const useAuth = () => {

    const request = useApiCall();

    // api calls
    const signIn = (payload) => request('', 'POST', payload);
    const forgetPassword = (payload) => request('', 'POST', payload);

    return {
        signIn,
        forgetPassword
    }
}

export default useAuth