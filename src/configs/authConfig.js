const oidcConfig = {
    client_id: "test-react-web",
    redirect_uri: window.location.origin + "/authentication/callback",
    silent_redirect_uri: window.location.origin + "/authentication/silent-callback",
    scope: "openid profile email offline_access", // offline_access scope allow your client to retrieve the refresh_token
    authority: "http://localhost:8081/realms/MyRealm",

};

export default oidcConfig;