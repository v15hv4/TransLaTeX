import "./App.css";
import { Container } from "reactstrap";

import Banner from "./components/Banner";
import MainContainer from "./components/MainContainer";

const App = () => {
    return (
        <Container fluid className="px-md-5">
            <Banner />
            <MainContainer />
        </Container>
    );
};

export default App;
