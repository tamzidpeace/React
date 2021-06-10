import {

    useParams
} from "react-router-dom";

export default function Todo() {

    let {id} = useParams()
    return(
        <h1>mTodo Component{id}</h1>
    );
}