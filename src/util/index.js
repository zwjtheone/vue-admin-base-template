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
export default {
    /**
     * url: 地址
     * query: 请求参数
     * ex: queryString('localhost:3000',{a:1,b:2}) => localhost:3000?a=1&b=2
     *
     * @param {string} url
     * @param {obj} query
     */
    queryString (url, query) {
        return query && Object.keys(query).length > 0 ? `${url}?${Object.keys(query).map(param => `${param}=${query[param]}`).join('&')}` : url;
    },
    
    /* -----------------------------localStorage------------------------------------ */
    /*
		 * set localStorage
		 */
    /* eslint-disable no-param-reassign */
    setStorage (name, content) {
        if (!name) return;
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        window.localStorage.setItem(name, content);
    },
    
    /**
     * get localStorage
     */
    getStorage (name) {
        if (!name) return;
        const content = window.localStorage.getItem(name);
        return JSON.parse(content);
    },
    
    /**
     * delete localStorage
     */
    removeStorage (name) {
        if (!name) return;
        window.localStorage.removeItem(name);
    },
    
    /**
     * 随机标识
     */
    randomToken () {
        let token = localStorage.token;
        if (!token)
            token = localStorage.token = Math.random().toString(36).substr(-8);
        
        return token;
    },
    
    /* 合法uri */
    validateURL (textval) {
        const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
        return urlregex.test(textval);
    },
    
    /* 小写字母 */
    validateLowerCase (str) {
        const reg = /^[a-z]+$/;
        return reg.test(str);
    },
    
    /* 大写字母 */
    validateUpperCase (str) {
        const reg = /^[A-Z]+$/;
        return reg.test(str);
    },
    
    /* 大小写字母 */
    validatAlphabets (str) {
        const reg = /^[A-Za-z]+$/;
        return reg.test(str);
    },
    
    /**
     * validate email
     * @param email
     * @returns {boolean}
     */
    /* eslint-disable */
    validateEmail (email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    
    /**
     *
     * @returns tickit
     */
    createUniqueString () {
        const timestamp = +new Date() + '';
        const randomNum = parseInt((1 + Math.random()) * 65536) + '';
        return (+(randomNum + timestamp)).toString(32);
    },
    
    // 深度克隆
    deepClone (source) {
        if (!source && typeof source !== 'object') {
            throw new Error('error arguments', 'shallowClone');
        }
        const targetObj = source.constructor === Array ? [] : {};
        for (const keys in source) {
            if (source.hasOwnProperty(keys)) {
                if (source[keys] && typeof source[keys] === 'object') {
                    targetObj[keys] = source[keys].constructor === Array ? [] : {};
                    targetObj[keys] = deepClone(source[keys]);
                } else {
                    targetObj[keys] = source[keys];
                }
            }
        }
        return targetObj;
    }
    /* eslint-enable */
};
