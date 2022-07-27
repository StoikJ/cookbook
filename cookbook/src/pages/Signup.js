import GlobalHeader from "../components/GlobalHeader";
import LoginHeader from "../components/LoginHeader";
import Signup from "../components/Signup";

export default function SignupPage() {
  return (<><GlobalHeader /><div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <>
        <LoginHeader
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/" />
        <Signup />
      </>
    </div>
  </div></>
  );
}
