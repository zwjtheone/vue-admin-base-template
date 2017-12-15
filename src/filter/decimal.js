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
    let ArrayVal = Number(val).toString().split(".");
    let Decimalpoint = "";
    if (ArrayVal[1]) {
        if (ArrayVal[1].length === 1) {
            Decimalpoint = `${ArrayVal[1]}0`;
        } else if (ArrayVal[1].length === 2) {
            Decimalpoint = ArrayVal[1];
        } else if (ArrayVal[1].length >= 3) {
            Decimalpoint = ArrayVal[1].substring(0, 2);
        }
    } else {
        Decimalpoint = "00";
    }
    return `${ArrayVal[0]}.${Decimalpoint}`;
}
