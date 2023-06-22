import  { useState } from 'react';
import { PlusOutlined  } from '@ant-design/icons';
import { Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import {  showPopUp } from './popUp';


function AddButton() {
  const [size] = useState<SizeType>('large'); // default is 'middle'
  return (
    <>
          <Button type="primary" shape="round" icon={<PlusOutlined />} size={size} onClick={showPopUp} >
            Add Plugin
          </Button>
    </>
  );
};

export default AddButton