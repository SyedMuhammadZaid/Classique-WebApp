import useGeneralStore from '../../Store/generalStore'
import axiosInstance from '../api';

const useApiCall = () => {

    const { setLoading, setMessage, setError } = useGeneralStore(state => state);

    //  isLoading true or false if i want global loading to show or not.
    const request = async (url, method, data = null, isLoading = true) => {
        try {
            isLoading && setLoading(true)
            let response = await axiosInstance({ url, method, data });
            if (response && response?.status == 200) {
                setMessage('success')
                return response
            }
        }
        catch (error) {
            setError('failure')
        }
        finally {
            isLoading && setLoading(false)
        }
    }

    return request
}

export default useApiCall