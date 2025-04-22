import {FaPowerOff} from 'react-icons/fa';
import { FaAlignJustify,  FaUser, } from "react-icons/fa6";
import { Layout, Button, Dropdown, theme} from 'antd';

interface IUserHeaderProps{
    collapsed: boolean,
    setCollapsed: Function
}

const UserHeader = ({collapsed,setCollapsed}: IUserHeaderProps)=>{
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return(
        <>
         <Layout.Header style={{ padding: 0, background: colorBgContainer }} >
            <div className='flex justify-between items-center h-full mx-5'>
            <Button onClick={(e)=>{
                e.preventDefault()
                setCollapsed(!collapsed)
                
            }} icon={<FaAlignJustify />}></Button>

            <Dropdown
                menu={{
                    items:[
                        {
                            icon: <FaPowerOff />,
                            label: "Logout",
                            key: 'logout'
                        },
                    ]
                }}>
            <Button icon={<FaUser />}></Button>

            </Dropdown>
            </div>
            </Layout.Header>
        </>
    )
}

export default UserHeader