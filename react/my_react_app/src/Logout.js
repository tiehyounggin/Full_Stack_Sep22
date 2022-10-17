import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postRequestWithHeader } from "./CommonMethods";


function Logout(){

    let navigate = useNavigate();

    const logout = () => {

        console.log(localStorage.getItem("user_id"));
        console.log(localStorage.getItem("token"));

    postRequestWithHeader("logout/")
        .then(res => {
            if(!res.ok){
                throw res;
            }else{
                localStorage.removeItem("user_id");
                localStorage.removeItem("token");
                res.json().then(res2 => console.log(res2));
                navigate("/Login2");
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }

    useEffect(() => {
        logout();
    }, [])

    return(
        <>
        </>
    )
}

export default Logout;