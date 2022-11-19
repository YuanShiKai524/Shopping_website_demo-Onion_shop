import React from 'react';
import './index.css';

const Title = () => {
  return (
    <thead className='title-container'>
      <tr>
        <th>商品</th>
        <th>名稱</th>
        <th>單價</th>
        <th>數量</th>
        <th>總計</th>
        <th>操作</th>
      </tr>
    </thead>
  );
}

export default Title;