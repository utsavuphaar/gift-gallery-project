import { Navigate } from "react-router-dom";

export default ({children})=>{
    if(localStorage.getItem("deliveryBoy")){
        return children;
    }
    else{
        return <Navigate to="/signIndeliveryboy"/> 
    }
}
