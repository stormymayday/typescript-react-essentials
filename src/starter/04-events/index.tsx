import { useState } from "react";

type Person = {
    name: string;
};

function Component() {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");

    // Reference Function for the email input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Using Type Assertion
        // const formData = new FormData(e.target as HTMLFormElement);

        // Using e.currentTarget
        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData);
        console.log(data);

        const text = formData.get("text") as string;

        const person: Person = { name: data.text as string };

        // console.log(person);
    };

    return (
        <section>
            <h2>events example</h2>
            {/* <form onSubmit={handleSubmit}
             className="form"> */}
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(`hello`);

                    // const formData = new FormData(e.currentTarget);
                    const formData = new FormData(e.target as HTMLFormElement);

                    const data = Object.fromEntries(formData);

                    const text = formData.get("text") as string;

                    const person: Person = { name: data.text as string };
                }}
            >
                <input
                    type="text"
                    className="form-input mb-1"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    name="text"
                />
                <input
                    type="email"
                    className="form-input mb-1"
                    value={email}
                    onChange={handleChange}
                    name="email"
                />
                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
        </section>
    );
}
export default Component;
