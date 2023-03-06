import {demoChannelTitle, demoProfilePicture} from "../../utils/demo";
import {Card, Space, Typography} from "antd";
import {Link} from "react-router-dom";
import {CheckCircleOutlined} from "@ant-design/icons";

const ChannelCard = ({channel, loading, link}) => {
    return (
        <Link to={`/channel/${channel?.id?.channelId}`} className={link ? 'disabled-link' : ''} >
            <Card
                hoverable
                bordered={false}
                loading={loading}
                cover={
                <img
                    src={channel?.snippet?.thumbnails?.medium?.url || demoProfilePicture}
                    alt={channel?.snippet?.title}
                    style={{
                        borderRadius: "50%",
                    }}
                />}
                style={{width: 300, padding: 20, background: "transparent"}}
            >
            <Card.Meta
                style={{justifyContent: 'center'}}
                title={
                    <Space>
                        {channel?.snippet?.title || demoChannelTitle}
                        <CheckCircleOutlined />
                    </Space>
                }
                description={
                channel?.statistics?.subscriberCount && (
                    <Typography.Text >
                        {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                    </Typography.Text>
                )}
            />
            </Card>
        </Link>
    )
}

export default ChannelCard