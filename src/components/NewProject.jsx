import Input from "./Input.jsx";

export default function NewProject () {
    return (
        <div>
            <menu>
                <li>Cancel</li>
                <li>Save</li>
            </menu>
            <div>
                <Input lable="Title" />
                <Input lable="Description" textarea />
                <Input lable="Due Date" />
            </div>
        </div>
    );
}