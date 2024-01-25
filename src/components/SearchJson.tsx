import { useState, useEffect } from 'react';
import { Typography, AutoComplete, Space, Alert } from 'antd';
import ReactJson from 'react-json-view';

const { Paragraph } = Typography;

interface SearchJsonProps {
  json: object;
}

const SearchJson: React.FC<SearchJsonProps> = ({ json }) => {
  // const opts = Object.keys(json).map((key) => ({ value: key }));

  return <>SearchJson</>;
};

export default SearchJson;
