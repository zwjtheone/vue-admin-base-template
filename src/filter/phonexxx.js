/**
 * VERSION: 0.2.0
 * vue-base-template
 * Created on 2018/1/26.~
 * Talk is cheap. Show me the code.
 * GIT:https://github.com/zwj47
 *
 * @author: by Jay99, email:zwj@zwj.space
 * ==============================================
 */
export default function(value) {
    if (!value) return "";
    let tempStr = "";
    let tempStrArr = value.toString().split("");
    tempStrArr.forEach(function(ele, index) {
        if (index < 3 || index > 6) {
            tempStr += ele;
        } else {
            tempStr += "*";
        }
    });
    return tempStr;
}
