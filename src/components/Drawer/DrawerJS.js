import {AntDesignOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import items from "../../utils/SideMenuItems";
import {useContext} from "react";
import DrawerContext from "./DrawerProvider";

const DrawerJS = ({category, setCategory}) => {

    const {drawer, setDrawer} = useContext(DrawerContext)

    return (
        <DrawerJS
            title={<AntDesignOutlined style={{fontSize: '40px', verticalAlign: 'middle', color: "#1890ff"}}/>}
            placement="left"
            width='200'
            onClose={() => setDrawer(false)}
            open={drawer}
        >
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['Home']}
                selectedKeys={[category]}
                items={items}
                onClick={(e) => setCategory(e.key)}
            />
        </DrawerJS>
    )
}

export default DrawerJS