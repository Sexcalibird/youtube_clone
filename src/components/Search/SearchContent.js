import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchFromAPI} from "../../utils/API";
import {VideoList} from "../index";
import {SideMenu} from "../../layout";
import {Layout} from "antd";

const SearchContent = () => {

    const {searchTerm} = useParams()

    const [videos, setVideos] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => {
                setVideos(data.items)
                setLoading(false)
            })
    })

    return (
        <Layout>
            <SideMenu/>
            <VideoList videos={videos} loading={loading} category={searchTerm}/>
        </Layout>
    )
}

export default SearchContent