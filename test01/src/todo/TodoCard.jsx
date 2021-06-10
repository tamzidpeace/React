export default function TodoCard(props) {

    const {id, title, completed} = props.todo;

    return (

        <div>
            <p key={id}>{title} {`Completed: ${completed}`}</p>
        </div>

    );
}