import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';

const LogoImg: React.FC = () => (
      <>
        <Avatar size={64} icon={<UserOutlined />} />
      </>
);

export default LogoImg;