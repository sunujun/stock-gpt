import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginButton = () => {
    const clientId = '449694199069-vsrn0con252iu1379cvsuubucp4uo3bh.apps.googleusercontent.com';

    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={res => {
                        console.log(res);
                    }}
                    onError={() => {
                        console.log('error');
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton;
