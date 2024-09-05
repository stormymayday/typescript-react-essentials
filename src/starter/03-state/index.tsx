import { useState } from "react";

function Component() {
    const [text, setText] = useState("shakeAndBake");
    const [number, setNumber] = useState<number>(1);

    // const [list, setList] = useState([]);
    const [list, setList] = useState<string[]>([]);

    return (
        <div>
            <h2 className="mb-1">State</h2>
            <h3>Text: {text}</h3>
            <h3>Number: {number}</h3>
            <button
                className="btn btn-center"
                onClick={() => {
                    setText("hello");
                    setNumber(2);
                    setList(["hello", "world"]);
                }}
            >
                click me
            </button>
        </div>
    );
}
export default Component;
