import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { CategoriesContext } from './categoryContext';


const PluginCategory: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
  
  const {categories, setCategories} = useContext(CategoriesContext) 

  const allCategories = categories.categories.map(category => (
    <Button type="primary"  ghost shape="round" size={size}>
      {category}
    </Button>
  ))

  useEffect(() => {
    console.log(categories)
}, [])

  

  return (
    <>
      <div className='category'>

          <Button type="primary"  ghost shape="round" size={size} className='allPlugin'>
            All Plugins
          </Button>
          {allCategories}
        </div>
    </>
  );
};


export {PluginCategory}