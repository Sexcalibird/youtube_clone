import {Avatar, Button, Col, Layout, Row, Space} from "antd";
import {AntDesignOutlined, MenuOutlined, SettingFilled, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import SearchBar from "../components/Search/SearchBar";
import {useContext} from "react";
import DrawerContext from "../components/Drawer/DrawerProvider";

const NavBar = () => {

    const {setDrawer} = useContext(DrawerContext)

    return (
        <Layout.Header style={{
            backgroundColor: "white",
            position: 'fixed',
            zIndex: 1,
            width: '100%'
            }}
        >
            <Row justify="space-between">
                <Col span={3} >
                    <Space >
                        <Button
                            icon={<MenuOutlined/>}
                            style={{border: "none"}}
                            onClick={() => setDrawer(true)}
                        />
                        <Link to="/" >
                            <AntDesignOutlined style={{fontSize: '40px', verticalAlign: 'middle'}}/>
                        </Link>
                    </Space>
                </Col>
                <Col span={10}  >
                    <SearchBar/>
                </Col>
                <Col span={3}  >
                    <Space style={{float: "right"}}>
                        <Button
                            icon={<SettingFilled style={{color: '#1890ff'}}/>}
                            style={{border: "none"}}
                        />
                        <Avatar size={40} icon={<UserOutlined />} />
                    </Space>
                </Col>
            </Row>
        </Layout.Header>
    )
}

export default NavBar