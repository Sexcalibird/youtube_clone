import {Avatar, Col, Drawer, Layout, List, Menu, Row, Statistic, Typography} from "antd";
import {useState, useEffect, useContext} from "react";
import {Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {VideoCard} from "../index";
import {fetchFromAPI} from "../../utils/API";
import {AntDesignOutlined, CheckCircleOutlined, EyeOutlined, LikeOutlined, TeamOutlined} from "@ant-design/icons";
import DrawerContext from "../Drawer/DrawerProvider";
import items from "../../utils/SideMenuItems";
import CollapseContext from "../Drawer/CollapseProvider";

const VideoDetail = () => {

    const {id} = useParams()

    const {drawer, setDrawer} = useContext(DrawerContext)
    const {siderCollapse, setSiderCollapse} = useContext(CollapseContext)

    const [videoDetail, setVideoDetail] = useState([])
    const [videos, setVideos] = useState([])
    const [videoCmt, setVideoCmt] = useState([])

    useEffect(() => {
        setDrawer(false)
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items))
        fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`)
            .then((data) => setVideoCmt(data.items))
    }, [id]);

    if(!videoDetail?.snippet) return <LikeOutlined />

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount, commentCount } } = videoDetail

    return (
        <Layout>

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

            <Layout.Content style={{padding: siderCollapse? '90px 10px 0 10px' : '90px 0 0 100px', backgroundColor: "white"}}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                <Typography.Title level={3}>
                    {title}
                </Typography.Title>
                <Row gutter={14}>
                    <Col span={4} >
                        <Link to={`/channel/${channelId}`}>
                            <Typography.Text type="secondary">
                                {channelTitle} <CheckCircleOutlined />
                            </Typography.Text>
                        </Link>
                    </Col>
                    <Col xs={0} sm={2} md={4} lg={6} xl={8}></Col>
                    <Col span={4}>
                        <Statistic title="Likes" value={likeCount} prefix={<LikeOutlined />} />
                    </Col>
                    <Col span={4}>
                        <Statistic title="Views" value={viewCount} prefix={<EyeOutlined />}/>
                    </Col>
                    <Col span={4}>
                        <Statistic title="Comments" value={commentCount} prefix={<TeamOutlined />}/>
                    </Col>
                </Row>
                <Typography.Title level={4}>
                    Comments
                </Typography.Title>
                <List
                    itemLayout="horizontal"
                    dataSource={videoCmt}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />}
                                title={item.snippet?.topLevelComment?.snippet?.authorDisplayName}
                                description={item.snippet?.topLevelComment?.snippet?.textOriginal}
                            />
                        </List.Item>
                    )}
                />
            </Layout.Content>
            <Layout.Sider
                width='500'
                style={{padding: siderCollapse? 0 : 90, backgroundColor: "white", border: "none"}}
                breakpoint='lg'
                collapsedWidth='0'
                onBreakpoint={(broken) => setSiderCollapse(broken)}
                trigger={null}
            >
                <Typography.Title level={4}>
                    Related Videos
                </Typography.Title>
                <List
                    dataSource={videos}
                    renderItem={(item) => (
                        <List.Item>
                            {item.id.videoId && <VideoCard video={item}  /> }
                        </List.Item>
                    )}
                />
            </Layout.Sider>
        </Layout>
    )
}

export default VideoDetail