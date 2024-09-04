// Type Alias
type ComponentProps = {
    name: string;
    id: number;
};

// Interface
// interface ComponentProps {
//     name: string;
//     id: number;
// }

function Component({ name, id }: ComponentProps) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>ID: {id}</h2>
        </div>
    );
}
export default Component;
