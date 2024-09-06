type BasicComponentProps = {
    type: "basic";
    name: string;
};

type AdvancedComponentProps = {
    type: "advanced";
    name: string;
    email: string;
};

type ProfileCardProps = BasicComponentProps | AdvancedComponentProps;

function Component(props: ProfileCardProps) {
    const { type, name } = props;

    if (type === "basic") {
        return (
            <article className="alert alert-success">
                <h2>Name: {name}</h2>
            </article>
        );
    }

    const { email } = props;

    if (type === "advanced") {
        return (
            <article className="alert alert-danger">
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
            </article>
        );
    }
}
export default Component;
