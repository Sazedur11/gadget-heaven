import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-themecolor text-4xl font-bold text-center mt-50">404 Error</h2>
            <Link className="text-white font-semibold text-center bg-themecolor p-4 w-50 mx-auto flex justify-center rounded-2xl mt-8" to={'/'}>Back To Home Page</Link>
        </div>
    );
};

export default ErrorPage;