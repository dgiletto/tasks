import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>CheckAnswer</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {expectedAnswer === answer && <div>✔️</div>}
            {expectedAnswer !== answer && <div>❌</div>}
        </div>
    );
}
