import { COOKIE_KEY_THEME } from "../consts";

export function getThemeCookie() {
    const cookieValue = document.cookie.split(";")
        .find((value)=>value.startsWith(COOKIE_KEY_THEME + "="));
    if (cookieValue) {
        return cookieValue.substring(COOKIE_KEY_THEME.length + 1);
    }
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
}

export function setThemeCookie(isDark: boolean) {
    document.cookie = `${COOKIE_KEY_THEME}=${isDark ? "dark" : "light"};`;
}