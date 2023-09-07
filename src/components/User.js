import { useState } from "react";

const User = ({name, location}) => {
    const [count] = useState(0);
    const [count2] = useState(0);
    return(
        <div>
            <h1>"count = " {count}</h1>
            <h1>"count2 = " {count2}</h1>
            <h1>{name}</h1>
            <h1>{location}</h1>
        </div>
    )
}

export default User;