function Component({ name, id }: { name: string; id: number }) {
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>ID: {id}</h2>
        </div>
    );
}
export default Component;
