import {Layout, Menu} from "antd";
import items from "../utils/SideMenuItems";
import {useContext} from "react";
import CollapseContext from "../components/Drawer/CollapseProvider";

const SideMenu = ({category,setCategory}) => {

    const {setSiderCollapse} = useContext(CollapseContext)

    return (
        <Layout.Sider
            breakpoint='sm'
            collapsedWidth="0"
            onBreakpoint={(broken) => setSiderCollapse(broken)}
            style={{
                background: "white",
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                marginTop: 64
            }}
        >
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['Home']}
                selectedKeys={[category]}
                items={items}
                onClick={(e) => setCategory(e.key)}
            />
            <Layout.Footer style={{textAlign: 'center', background: "white"}}>
                @ ZooTube
            </Layout.Footer>
        </Layout.Sider>
    )
}

export default SideMenu