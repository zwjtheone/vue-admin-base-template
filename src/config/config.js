let a = window.location.host.split(".");
a[0] = "api";
a = a.join(".");
let config = {
  loginPopupSrc: `//${a}`//开发测试
};
if (window.location.hostname === "localhost") {
  // config.loginPopupSrc = "http://api.dev.xraychain.com";
  config.loginPopupSrc  = "http://192.168.51.192:18882"
}
export default config
