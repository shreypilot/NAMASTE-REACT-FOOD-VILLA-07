import "./Footer.css";
import {  useContext } from "react";
import userContext from "./utils/userContext";

const Footer = () =>{
const {user} = useContext(userContext);

    return(
        
        <>
        <h1>Copyright</h1>
        <h2>This site is developed by {user.name}-{user.email}</h2>
        </>
    )
};
export default Footer;