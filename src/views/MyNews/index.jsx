import ComponentsWrapper from "../../components/ComponentsWrapper";
import Content from "./components/Content";
import LeftAside from "./components/LeftAside";
import RightAside from "./components/RightAside";


const MyNews = () => {
    return (
        <ComponentsWrapper>
            <LeftAside />
            <Content />
            <RightAside />
        </ComponentsWrapper>
    );
}

export default MyNews;
