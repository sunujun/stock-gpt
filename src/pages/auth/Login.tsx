import GoogleLoginButton from '../../components/GoogleLoginButton';

const Login = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-800">
            {/* <div className="w-96 flex flex-col flex-auto justify-center items-center self-center">
                <div className="mb-2 text-center">Welcome to StockGPT</div>
                <div className="mb-4 text-center">Log in with your account to continue</div>
                <div className="flex flex-row gap-3">
                    <button className="btn relative btn-primary">
                        <div className="flex w-full gap-2 items-center justify-center">Log in</div>
                    </button>
                    <button className="btn relative btn-primary">
                        <div className="flex w-full gap-2 items-center justify-center">Sign up</div>
                    </button>
                </div>
            </div> */}
            <GoogleLoginButton />
        </div>
    );
};

export default Login;
