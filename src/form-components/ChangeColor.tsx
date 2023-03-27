import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name={"red"}
                onChange={updateColor}
                id={"red"}
                label={"red"}
                value={"red"}
                checked={"red" === chosenColor}
                style={{ backgroundColor: "red" }}
            />
            <Form.Check
                inline
                type="radio"
                name={"blue"}
                onChange={updateColor}
                id={"blue"}
                label={"blue"}
                value={"blue"}
                checked={"blue" === chosenColor}
                style={{ backgroundColor: "blue" }}
            />
            <Form.Check
                inline
                type="radio"
                name={"green"}
                onChange={updateColor}
                id={"green"}
                label={"green"}
                value={"green"}
                checked={"green" === chosenColor}
                style={{ backgroundColor: "green" }}
            />
            <Form.Check
                inline
                type="radio"
                name={"orange"}
                onChange={updateColor}
                id={"orange"}
                label={"orange"}
                value={"orange"}
                checked={"orange" === chosenColor}
                style={{ backgroundColor: "orange" }}
            />
            <Form.Check
                inline
                type="radio"
                name={"purple"}
                onChange={updateColor}
                id={"purple"}
                label={"purple"}
                value={"purple"}
                checked={"purple" === chosenColor}
                style={{ backgroundColor: "purple" }}
            />
            <Form.Check
                inline
                type="radio"
                name={"cyan"}
                onChange={updateColor}
                id={"cyan"}
                label={"cyan"}
                value={"cyan"}
                checked={"cyan" === chosenColor}
                style={{ backgroundColor: "cyan" }}
            />
            <Form.Check
                inline
                type="radio"
                name={"magenta"}
                onChange={updateColor}
                id={"magenta"}
                label={"magenta"}
                value={"magenta"}
                checked={"magenta" === chosenColor}
                style={{ backgroundColor: "magenta" }}
            />
            <Form.Check
                inline
                type="radio"
                name={"white"}
                onChange={updateColor}
                id={"white"}
                label={"white"}
                value={"white"}
                checked={"white" === chosenColor}
                style={{ backgroundColor: "white" }}
            />
            <Form.Check
                inline
                type="radio"
                name={"black"}
                onChange={updateColor}
                id={"black"}
                label={"black"}
                value={"black"}
                checked={"black" === chosenColor}
                style={{ backgroundColor: "black" }}
            />
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}.
                </span>
            </div>
        </div>
    );
}
