import { Link } from "react-router-dom";
import HeaderLanding from "../components/HeaderLanding";
import MainLanding from "../components/MainLanding";
import FooterLanding from "../components/FooterLanding";

function LandingPage() {
    return (
        <>
            <HeaderLanding />
            <MainLanding />
            <FooterLanding />
        </>
    );
}  

export default LandingPage;