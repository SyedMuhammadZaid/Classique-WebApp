import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const FullScreenLoader = () => {
    return (

        <Spin
            indicator={<LoadingOutlined spin style={{ fontSize: 48 }} className='loading-color' />}
            size="large"
            fullscreen
            spinning={true}
        />
    )
}

export default FullScreenLoader