import {Routes, Route} from "react-router-dom";
import {Layout} from "antd";
import {NavBar, Contents} from "./layout";
import {VideoDetail, ChannelDetail, SearchContent} from "./components";
import {DrawerProvider} from "./components/Drawer/DrawerProvider";
import {CollapseProvider} from "./components/Drawer/CollapseProvider";

const App = () => {
    return (
        <Layout>
            <DrawerProvider>
                <NavBar />
                <CollapseProvider>
                    <Routes>
                        <Route path="/" element={<Contents />} />
                        <Route path="/video/:id" element={<VideoDetail />} />
                        <Route path="/channel/:id" element={<ChannelDetail />} />
                        <Route path="/search/:searchTerm" element={<SearchContent />} />
                    </Routes>
                </CollapseProvider>
            </DrawerProvider>
        </Layout>
  );
}

export default App;
