import { useState } from "react";
import { Row, Col } from "reactstrap";

import PlaintextField from "./PlaintextField";
import LaTeXField from "./LaTeXField";

const MainContainer = () => {
    const [state, setState] = useState({
        plaintext: "Integral of f with respect to x in range 2 to 3 is 5.",
        latex: "\\int\\limits_{2}^{3}f dx = 5",
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleTranslate = () => {
        // TODO: API callback
        console.log(state.plaintext);
    };

    return (
        <Row className="p-2 p-md-4">
            <Col md className="my-2">
                <PlaintextField
                    value={state.plaintext}
                    onChange={handleChange}
                    onTranslate={handleTranslate}
                />
            </Col>
            <Col md className="my-2">
                <LaTeXField value={state.latex} onChange={handleChange} />
            </Col>
        </Row>
    );
};

export default MainContainer;
