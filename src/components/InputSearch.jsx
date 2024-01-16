import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;
const InputSearch = ({ onSearch }) => (
  <Space direction="vertical">
    <Search
      placeholder="Buscar por nombre"
      allowClear
      onSearch={value => onSearch(value)}
      style={{
        width: 300,
      }}
    />
  </Space>
);
export default InputSearch;