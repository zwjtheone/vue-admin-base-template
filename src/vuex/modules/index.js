/**
 * VERSION: 0.2.0
 * vue-base-template
 * Created on 2017/12/15.~
 * Talk is cheap. Show me the code.
 * GIT:https://github.com/zwj47
 *
 * @author: by Jay99, email:zwj@zwj.space
 * ==============================================
 */
const files = require.context(".", false, /\.js$/);
const modules = {};
files.keys().forEach(key => {
    if (key === "./index.js") return;
    modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});
export default modules;
