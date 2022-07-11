import LoginHeader from "../components/LoginHeader";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <>
            <LoginHeader
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}