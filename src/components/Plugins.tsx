import React, { useContext, useState } from 'react';
import { Button } from 'antd';
import { SendOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { PluginsContext } from './pluginContext';


const Plugins: React.FC = () => {
  const [size, setSize] = useState<SizeType>('middle'); // default is 'middle'
  const {plugins, setPlugins} = useContext(PluginsContext)
  const pluginObj = plugins.plugins

  const pluginName = document.querySelector('#pluginName') as HTMLInputElement

  const pluginsElement = pluginObj.map(plugin => (
    <div className='in_container'>
      <div className='pluginInfo'>
        <h2>{plugin.name}</h2>
        <h3>{plugin.category}</h3>
        <p>{plugin.description}</p>
      </div>
      <div className='in_buttons'>
        <Button type="link" icon={<EditOutlined />}>Edit</Button>
        <Button type="primary" shape='round' icon={<DeleteOutlined />} danger ghost>Remove</Button>
        <Button
          type="primary"
          icon={<SendOutlined />} shape='round'>Open</Button>
      </div>
    </div>
  ))
  return (
    <>
      <div className="container">
        {pluginsElement}
      </div>
    </>
  );
};


export {Plugins}