import {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import {VideoList, ChannelCard} from "../index";
import {fetchFromAPI} from "../../utils/API";
import {Col, Drawer, Layout, Menu, Row} from "antd";
import {SideMenu} from "../../layout";
import CollapseContext from "../Drawer/CollapseProvider";
import {AntDesignOutlined} from "@ant-design/icons";
import items from "../../utils/SideMenuItems";
import DrawerContext from "../Drawer/DrawerProvider";

const ChannelDetail = () => {

    const {id} = useParams()

    const {drawer, setDrawer} = useContext(DrawerContext)
    const {siderCollapse} = useContext(CollapseContext)

    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState([]);
    const [disableLink, setDisableLink] = useState(false)

    useEffect(() => {
        setDisableLink(true)
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]))
        fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
            .then((data) => setVideos(data?.items))
    }, [id]);

    return (
        <Layout>
            <SideMenu/>

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
                        items={items}
                    />
                </Drawer>
            }

            <Layout>
                <Layout.Header
                    style={{
                        marginLeft: siderCollapse? 0 : 200,
                        marginTop: 64,
                        background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",
                        height: 395
                    }}
                >
                    <Row justify='center'>
                        <Col span={4}>
                            <ChannelCard channel={channelDetail} link={disableLink}/>
                        </Col>
                    </Row>
                </Layout.Header>
                <VideoList videos={videos} description={channelDetail?.snippet?.description}/>
            </Layout>
        </Layout>
    )
}

export default ChannelDetail