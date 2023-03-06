import {Link} from "react-router-dom";
import {
    AudioOutlined, DollarCircleOutlined, DribbbleOutlined,
    EditOutlined, HeartOutlined,
    HomeOutlined, MenuUnfoldOutlined,
    PlaySquareOutlined, ShoppingCartOutlined, SketchOutlined, SmileOutlined,
    SoundOutlined, ThunderboltOutlined
} from "@ant-design/icons";

const items = [
    {
        key: 'New',
        icon:<HomeOutlined />,
        label: (<Link to="/">Home</Link>),
    },
    {
        key: 'Music',
        icon:<SoundOutlined />,
        label: (<Link to="/">Music</Link>),
    },
    {
        key: 'Education',
        icon:<EditOutlined />,
        label: (<Link to="/">Education</Link>),
    },
    {
        key: 'Podcast',
        icon:<AudioOutlined />,
        label: (<Link to="/">Podcast</Link>),
    },
    {
        key: 'Movie',
        icon:<PlaySquareOutlined />,
        label: (<Link to="/">Movie</Link>),
    },
    {
        key: 'Gaming',
        icon:<SketchOutlined />,
        label: (<Link to="/">Gaming</Link>),
    },
    {
        key: 'Sport',
        icon:<DribbbleOutlined />,
        label: (<Link to="/">Sport</Link>),
    },
    {
        key: 'Fashion',
        icon:<ShoppingCartOutlined />,
        label: (<Link to="/">Fashion</Link>),
    },
    {
        key: 'Beauty',
        icon:<HeartOutlined />,
        label: (<Link to="/">Beauty</Link>),
    },
    {
        key: 'Comedy',
        icon:<SmileOutlined />,
        label: (<Link to="/">Comedy</Link>),
    },
    {
        key: 'Gym',
        icon:<ThunderboltOutlined />,
        label: (<Link to="/">Gym</Link>),
    },
    {
        key: 'Crypto',
        icon:<DollarCircleOutlined />,
        label: (<Link to="/">Crypto</Link>),
    },
    {
        key: 'Elden Ring',
        icon:<MenuUnfoldOutlined />,
        label: (<Link to="/">Elden Ring</Link>),
    },
    {
        key: 'God of War',
        icon:<MenuUnfoldOutlined />,
        label: (<Link to="/">God of War</Link>),
    },
    {
        key: 'Final Fantasy',
        icon:<MenuUnfoldOutlined />,
        label: (<Link to="/">Final Fantasy</Link>),
    },
]

export default items;