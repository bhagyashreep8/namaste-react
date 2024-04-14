import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError();
    return(<div>
        <h3>Oops something went wrong!!</h3>
        <h4>{err.error.message}</h4>
    </div>)
}

export default Error;