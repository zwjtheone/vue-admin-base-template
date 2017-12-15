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
import moment from "moment";
// npm install moment -s 插件
export default function(timestamp, format) {
    // 秒数转时间<span>{{ 时间秒数 | timestampFormat('YYYY/MM/DD') }}</span>
    let result;
    let time = parseInt(timestamp);
    if (!time) {
        result = "-";
    } else if (format) {
        result = moment(time).format(format);
    } else {
        result = moment(time).format("YYYY-MM-DD HH:mm:ss");
    }
    return result;
}
