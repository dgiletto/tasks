import React from "react";
import "./App.css";
import rashford from "./Assets/rashford.jpg";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

console.log(rashford);

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World UD CISC275 with React Hooks and TypeScript Dylan
                Giletto
            </header>
            <h2>This is my second header</h2>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            Unordered List:
            <ul>
                <li>First thing</li>
                <li>Second thing</li>
                <li>Last but not least</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img src={rashford} alt="The goat Marcus Rashford" />
            <Container>
                <Row>
                    <Col className="App-column1">Column 1</Col>
                    <Col className="App-column2">Column 2</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
