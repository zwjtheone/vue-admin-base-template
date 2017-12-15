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
export default function(val) {
    let result;
    if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(val)) {
        return val;
    }
    let a = RegExp.$1;
    let b = RegExp.$2;
    let c = RegExp.$3;
    let re = new RegExp("(\\d)(\\d{3})(,|$)");
    while (re.test(b)) b = b.replace(re, "$1,$2$3");
    result = a + "" + b + "" + c;
    return result;
}
