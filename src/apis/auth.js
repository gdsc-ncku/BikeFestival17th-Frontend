import req from "./instance";

export const apiLogin = req({
    method: "GET",
    url: "/line-login/auth",
    query: {
        redirect_uri: 'https://gdsc-ncku.github.io/BikeFestival17th-Frontend/webhook',
    },
});

export const apiCallback = (code,state) => req({
    method: "GET",
    url: "/line-login/callback",
    query: {
        code: code,
        state: state,
    },
});