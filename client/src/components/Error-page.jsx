import { useRouteError } from "react-router-dom";


function ErrorPage(){
    const error = useRouteError();
    console.log(error);

    return(
        <div className="error-page">
            <h1>Sorry Couldn't Find Page!</h1>
            <p>sorry couldn't find the page you were searching for.</p>

            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    );
}


export default ErrorPage;