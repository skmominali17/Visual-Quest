import { AudioOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Input, Space } from "antd";
const { Search } = Input;
import axios from "axios";

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const SearchInput = (props) => (
  <Space direction="vertical">
    <Search placeholder="Search Images" onSearch={props.onSearch} enterButton />
  </Space>
);
export default SearchInput;
