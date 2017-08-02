export function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
}