import { useState } from "react";

type Link = {
    id: number;
    url: string;
    text: string;
};

const navLinks: Link[] = [
    {
        id: 1,
        url: "some url",
        text: "some text",
    },
    {
        id: 2,
        url: "some url",
        text: "some text",
    },
    {
        id: 3,
        url: "some url",
        text: "some text",
    },
];

function Component() {
    const [text, setText] = useState("shakeAndBake");
    const [number, setNumber] = useState<number>(1);

    // const [list, setList] = useState([]);
    const [list, setList] = useState<string[]>([]);

    const [links, setLinks] = useState<Link[]>(navLinks);

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
                    setLinks([
                        ...links,
                        {
                            id: 4,
                            url: "hello",
                            text: "hello",
                        },
                    ]);
                }}
            >
                click me
            </button>
        </div>
    );
}
export default Component;
