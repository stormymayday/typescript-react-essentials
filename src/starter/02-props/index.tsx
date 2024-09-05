import React from "react";

// Type Alias
type ComponentProps = {
    name: string;
    id: number;
    children?: React.ReactNode;
};

// Interface
// interface ComponentProps {
//     name: string;
//     id: number;
// }

function Component({ name, id, children }: ComponentProps) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>ID: {id}</h2>
            {children}
        </div>
    );
}
export default Component;
