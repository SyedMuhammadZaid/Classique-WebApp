import { notification } from 'antd';
import React, { useEffect, useMemo } from 'react'
import useGeneralStore from '../../Store/generalStore';
import useOnlineStatus from '../../Config/hooks/useOnlineStatus';

const Context = React.createContext({
    name: 'Default',
});

const Toast = () => {

    const { message, error, info, setError, setMessage, setInfo } = useGeneralStore(state => state);
    const [api, contextHolder] = notification.useNotification();
    const isOnline = useOnlineStatus()

    // a function to show notifications.
    const openNotification = (placement, type = 'info', msg) => {
        if (type == 'success') {
            api[type]({
                message: `Success`,
                description: <Context.Consumer>{() => `${msg}`}</Context.Consumer>,
                placement,
                key: 'success'
            });
        }
        else if (type == 'error') {
            api[type]({
                message: `Error`,
                description: <Context.Consumer>{() => `${msg}`}</Context.Consumer>,
                placement,
                key: 'error'
            });
        }
        else if (type == 'info') {
            api[type]({
                message: `Info`,
                description: <Context.Consumer>{() => `${msg}`}</Context.Consumer>,
                placement,
                key: 'info'
            });
        }
    };

    // if state is false i.e no internet then this function will run.
    useEffect(() => {
        if (!isOnline) {
            openNotification('topRight', 'info', 'No internet connection')
        }
    }, [!isOnline])

    // calling of notifications.
    useEffect(() => {
        message && openNotification('topRight', 'success', message);
        error && openNotification('topRight', 'error', error);
        info && openNotification('topRight', 'info', info)

        return () => {
            setTimeout(() => {
                message && setMessage('')
                error && setError('')
                info && setInfo('')
            }, 1000)
        }
    }, [message, error, info])

    const contextValue = useMemo(
        () => ({
            name: 'Ant Design',
        }),
        [],
    );

    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
        </Context.Provider>

    )
}

export default Toast