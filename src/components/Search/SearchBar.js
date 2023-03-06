import {Input} from "antd";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate(`/search/${searchTerm}`)
    }

    return (
        <Input.Search
            placeholder='Search'
            style={{verticalAlign: 'middle'}}
            enterButton
            onSearch={handleSearch}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    )
}

export default SearchBar