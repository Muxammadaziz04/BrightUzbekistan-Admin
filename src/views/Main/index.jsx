import ComponentsWrapper from '../../components/ComponentsWrapper';
import Content from './Components/Content';
import LeftAside from './Components/LeftAside';
import RightAside from './Components/RightAside';

const Main = () => {
    return (
        <ComponentsWrapper>
            <LeftAside />
            <Content />
            <RightAside />
        </ComponentsWrapper>
    );
}

export default Main;
