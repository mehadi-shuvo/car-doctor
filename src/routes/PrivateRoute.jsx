import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center max-h-screen">
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={['#ff3811', '#ff3811', '#ff3811']}
                backgroundColor="#22222"
            />
        </div>
    }
    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;