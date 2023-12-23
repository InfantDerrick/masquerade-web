import { MeowProps } from "./types";

const Meow = ({ name } : MeowProps) => {
    return (
        <p>Hello my meow is {name}</p>
    );
}

export default Meow;