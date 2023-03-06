import {Layout, Typography, List} from "antd";
import {VideoCard, ChannelCard} from "../index";
import {useContext} from "react";
import CollapseContext from "../Drawer/CollapseProvider";

const VideoList = ({category, videos, loading, description}) => {

    const {siderCollapse} = useContext(CollapseContext)

    return (
        <Layout.Content
            style={{
                marginLeft: siderCollapse? 0 : 200,
                padding: '0px 40px',
                background: "white"
            }}
        >
            <div style={{height: 55, textAlign: 'center', overflow: 'hidden'}}>
                <Typography.Title level={5}>
                    {description}
                </Typography.Title>
            </div>
            <Typography.Title level={4} style={{color: '#1890ff'}}>
                {category} <span style={{color: "black"}}>Videos</span>
            </Typography.Title>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 5,
                    xxl: 5,
                }}
                dataSource={videos}
                renderItem={(item) => (
                    <List.Item>
                        {item.id.videoId && <VideoCard video={item} loading={loading} /> }
                        {item.id.channelId && <ChannelCard channel={item} loading={loading}/>}
                    </List.Item>
                )}
            />
        </Layout.Content>
    )
}

export default VideoList