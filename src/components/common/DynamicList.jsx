import React, { useEffect, useState } from 'react';
import { Dropdown, message, Space } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const DynamicList = ({ apiEndpoint, tableFields, actions, onEdit, onDelete,navigateTo }) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      let res = await fetch(apiEndpoint);
      let responseData = await res.json();
      setData(responseData?.allList || []);
    } catch (error) {
      message.error('Failed to fetch data');
    }
  }

  useEffect(() => {
    fetchData();
  }, [apiEndpoint]);
  const navigate = useNavigate();
  const handleMenuClick = async (key, id) => {
    if (key === '1' && onEdit) {
      navigate(`/${navigateTo}/${id}`);
    } else if (key === '2' && onDelete) {
      await onDelete(id);
      fetchData(); // Refresh data after delete
    }
  };

  const items = [
    {
      label: 'Edit',
      key: '1',
    },
    {
      label: 'Delete',
      key: '2',
    },
  ];

  return (
   
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      {tableFields.map((field) => (
                        <th key={field.key}>{field.label}</th>
                      ))}
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item,index) => (
                      <tr key={item.id}>
                        <td>
                          {index+1}
                        </td>
                        {tableFields.map((field) => (
                          <td key={field.key}>
                            {field.render ? field.render(item[field.key]) : item[field.key]}
                          </td>
                        ))}
                        <td>
                          <Dropdown
                            menu={{
                              items,
                              onClick: ({ key }) => handleMenuClick(key, item._id),
                            }}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                              <Space>
                                <MoreOutlined />
                              </Space>
                            </a>
                          </Dropdown>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> 
  
  );
};

export default DynamicList;
