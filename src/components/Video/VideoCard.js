import {demoVideoTitle, demoChannelTitle, demoVideoUrl, demoChannelUrl, demoThumbnailUrl} from "../../utils/demo";
import {Card, Typography} from "antd";
import {Link} from "react-router-dom";

const VideoCard = ({video: {id: {videoId}, snippet}, loading}) => {
    return (
        <Card
            hoverable
            bordered={false}
            loading={loading}
            cover={
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
                <img
                src={snippet?.thumbnails?.medium?.url || demoThumbnailUrl}
                alt={snippet?.title}
                style={{
                    maxHeight:'100%',
                    maxWidth:'100%',
                    borderRadius: "20px",
                    overflow: "hidden",
                }}
                />
            </Link>
            }
            style={{
                borderRadius: "20px",
                overflow: "hidden"
            }}
        >
            <Card.Meta
                title={
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
                    <Typography.Text strong >
                        {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
                    </Typography.Text>
                </Link>
                }
                description={
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography.Text type="secondary">
                        {snippet?.channelTitle || demoChannelTitle}
                    </Typography.Text>
                </Link>
                }
            />
        </Card>
    )
}

export default VideoCard