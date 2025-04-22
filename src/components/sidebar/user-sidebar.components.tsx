import { Layout, Divider, Menu} from "antd"
import logo from "../../assets/images/logo.png";
import { FaImage, FaShoppingBasket, FaShoppingCart, FaSitemap } from 'react-icons/fa';
import { FaB, FaGear, FaMessage, FaUserGroup} from "react-icons/fa6"

import type { MenuProps } from 'antd';




interface IUserSidebarProps{
    collapsed: boolean
}
const items: MenuProps['items'] = [
    {
       icon:<FaGear />,
       label: <a href="/admin">Dashboard</a>,
       key:"dashboard"
    },
    {
       icon:<FaImage />,
       label: <a href="/admin/banner">Banner</a>,
       key:"banner"
    },
    {
       icon:<FaB />,
       label: <a href="/admin/brand">Brand</a>,
       key:"brand"
    },
    {
       icon:<FaSitemap />,
       label: <a href="/admin/category">Category</a>,
       key:"category"
    },
    {
       icon:<FaUserGroup />,
       label: <a href="/admin/user">User</a>,
       key:"user"
    },
    {
       icon:<FaShoppingBasket />,
       label: <a href="/admin/product">Product</a>,
       key:"product"
    },
    {
       icon:<FaShoppingCart />,
       label: <a href="/admin/order">Order</a>,
       key:"order"
    }, 
    {
       icon:<FaMessage />,
       label: <a href="/admin/messages">Messages</a>,
       key:"messages"
    },
   ]
const UserSidebar = ({collapsed}:IUserSidebarProps)=>{
    return(
        <>
         <Layout.Sider className='overflow-hidden h-screen sticky! top-0 bottom-0 scroll-smooth '
      collapsed={collapsed}
      collapsible
    >
        <div className="demo-logo-vertical" />
        <div className='flex flex-col justify-center items-center gap-5 my-10 mx-3'>
            <img className='w-20 rounded-full' src={logo} alt="logo" />
            <div className={`flex flex-col gap-1 text-center ${collapsed ? 'hidden' : 'block'}`}>
                <p className='text-white text-lg font-semibold'>Anil Shrestha</p>
                <p className='text-white text-[10px italic text-ellipsis]'>Anil.shrestha388@gmail.com</p>

            </div>
        </div>
        <Divider className='text-white! border-teal-100! text-[10px] px-1!'>
      Menu
    </Divider>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Layout.Sider>
        </>
    )
}

export default UserSidebar