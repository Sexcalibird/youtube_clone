import {SideMenu} from "./index";
import {VideoList} from "../components";
import {Drawer, Layout, Menu} from "antd";
import {useContext, useEffect, useState} from "react";
import {fetchFromAPI} from "../utils/API";
import DrawerContext from "../components/Drawer/DrawerProvider";
import {AntDesignOutlined} from "@ant-design/icons";
import items from "../utils/SideMenuItems";
import CollapseContext from "../components/Drawer/CollapseProvider";

const Contents = () => {

    const {drawer, setDrawer} = useContext(DrawerContext)
    const {siderCollapse} = useContext(CollapseContext)

    const [category, setCategory] = useState('New')
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetchFromAPI(`search?part=snippet&q=${category}`)
            .then((data) => {
                setVideos(data.items)
                setLoading(false)
            })
    }, [category]);

    return (
        <Layout>
            <SideMenu
                category={category}
                setCategory={setCategory}
            />

            {siderCollapse &&
                <Drawer
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
                </Drawer>
            }

            <VideoList
                category={category}
                videos={videos}
                loading={loading}
            />
        </Layout>
    )
}

export default Contents