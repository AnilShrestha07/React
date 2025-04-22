import React, { useState } from 'react';
import { Layout} from 'antd';
import UserSider from '../../components/sidebar/user-sidebar.components';
import UserHeader from '../../components/header/user-header.component';
import UserFooter from '../../components/footer/user-footer.component';
import { Outlet } from 'react-router';
;




const { Content} = Layout;





const UserLayout: React.FC = () => {
 


  const [collapsed, setCollapsed] = useState(true)

  return (
    <Layout hasSider>
      <UserSider collapsed={collapsed} />
      <Layout>
        <UserHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className='p-5' style={{ overflow: 'hidden' }}>

          
        <Outlet/>




        </Content>
        <UserFooter />
      </Layout>
    </Layout>
  );
};

export default UserLayout;