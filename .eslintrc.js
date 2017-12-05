module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 6,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        commonjs: true
    },
    extends: "eslint:recommended",
    // required to lint *.vue files
    plugins: [
        "html", "vue"
    ],
    // check if imports actually resolve
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "build/webpack.base.conf.js"
            }
        }
    },
    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    "rules": {
        "accessor-pairs": 2,// 定义对象的set存取器属性时，强制定义get
        "arrow-spacing": [2, { "before": true, "after": true }],
        "block-spacing": [2, "always"],
        "brace-style": [2, "1tbs", { "allowSingleLine": true }],// if while function 后面的{必须与if在同一行，java风格。
        "camelcase": [0, { "properties": "always" }],// 双峰驼命名格式
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        "comma-dangle": [2, "never"],
        "comma-spacing": [2, { "before": false, "after": true }],// 控制逗号前后的空格
        // 控制逗号在行尾出现还是在行首出现
        // http://eslint.org/docs/rules/comma-style
        "comma-style": [2, "last"],
        // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
        "computed-property-spacing": [2, "never"],
        // 强制方法必须返回值，TypeScript强类型，不配置
        "consistent-return": 0,
        "constructor-super": 2,// 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
        // if else while for do后面的代码块是否需要{ }包围，参数：
        //    multi  只有块中有多行语句时才需要{ }包围
        //    multi-line  只有块中有多行语句时才需要{ }包围, 但是块中的执行语句只有一行时，
        //                   块中的语句只能跟和if语句在同一行。if (foo) foo++; else doSomething();
        //    multi-or-nest 只有块中有多行语句时才需要{ }包围, 如果块中的执行语句只有一行，执行语句可以零另起一行也可以跟在if语句后面
        //    [2, "multi", "consistent"] 保持前后语句的{ }一致
        //    default: [2, "all"] 全都需要{ }包围
        "curly": [2, "multi-line"],
        // switch语句强制default分支，也可添加 // no default 注释取消此次警告
        "default-case": 2,
        // 强制object.key 中 . 的位置，参数:
        // property，'.'号应与属性在同一行
        // object, '.' 号应与对象名在同一行
        "dot-location": [2, "property"],
        "eol-last": 2,// 文件末尾强制换行
        "eqeqeq": [2, "allow-null"],// 使用 === 替代 ==
        // 方法表达式是否需要命名
        "func-names": 0,
        // 方法定义风格，参数：
        // declaration: 强制使用方法声明的方式，function f(){} e.g [2, "declaration"]
        // expression：强制使用方法表达式的方式，var f = function() {}  e.g [2, "expression"]
        // allowArrowFunctions: declaration风格中允许箭头函数。 e.g [2, "declaration", { "allowArrowFunctions": true }]
        "func-style": 0,
        "generator-star-spacing": [2, { "before": true, "after": true }],
        "handle-callback-err": [2, "^(err|error)$"],
        "indent": [2, 4, { "SwitchCase": 1 }],
        "jsx-quotes": [2, "prefer-single"],
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": [2, { "before": true, "after": true }],
        "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
        "new-parens": 2,
        "no-alert": 0,//禁止使用alert confirm prompt
        "no-array-constructor": 2,//禁止使用数组构造器
        "no-caller": 2,//禁止使用arguments.caller或arguments.callee
        "no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
        "no-console": "off",//禁止使用console
        "no-class-assign": 2,//禁止给类赋值
        "no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
        "no-const-assign": 2,//禁止修改const声明的变量
        "no-control-regex": 2,//禁止在正则表达式中使用控制字符
        "no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
        "no-continue": 0,//禁止使用continue
        "no-delete-var": 2,//不能对var声明的变量使用delete操作符
        "no-div-regex": 0,//不能使用看起来像除法的正则表达式/=foo/
        "no-dupe-args": 2,//函数参数不能重复
        "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-dupe-class-members": 2,
        "no-duplicate-case": 2,//switch中的case标签不能重复
        "no-empty-character-class": 2,
        "no-empty-pattern": 2,
        "no-eval": 2,//禁止使用eval
        "no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
        "no-extend-native": 0,//禁止扩展native对象
        "no-extra-bind": 2,//禁止不必要的函数绑定
        "no-extra-boolean-cast": 2,//禁止不必要的bool转换
        "no-extra-parens": [2, "functions"],//禁止非必要的括号
        "no-fallthrough": 2,//禁止switch穿透
        "no-extra-semi": 2,//禁止多余的冒号
        "no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
        "no-func-assign": 2,//禁止重复的函数声明
        "no-implied-eval": 2,//禁止使用隐式eval
        "no-implicit-coercion": 1,//禁止隐式转换
        "no-inline-comments": 0,//禁止行内备注
        "no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数）
        "no-invalid-regexp": 2,//禁止无效的正则表达式
        "no-invalid-this": 0,//禁止无效的this，只能用在构造器，类，对象字面量
        "no-irregular-whitespace": 2,//不能有不规则的空格
        "no-iterator": 2,//禁止使用__iterator__ 属性
        "no-label-var": 2,//label名不能与var声明的变量名相同
        "no-labels": [2, { "allowLoop": false, "allowSwitch": false }],//禁止标签声明
        "no-lone-blocks": 2,//禁止不必要的嵌套块
        "no-lonely-if": 2,//禁止else语句内只有if语句
        "no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
        "no-mixed-requires": [0, false],//声明时不能混用声明类型
        "no-mixed-spaces-and-tabs": 2,//禁止混用tab和空格
        "linebreak-style": [0, "windows"],//换行风格
        "no-multi-spaces": 2,//不能用多余的空格
        "no-multi-str": 2,//字符串不能用\换行
        "no-multiple-empty-lines": [2, { "max": 1 }],//空行最多不能超过1行
        "no-native-reassign": 2,//不能重写native对象
        "no-negated-in-lhs": 2,//in 操作符的左边不能有!
        "no-nested-ternary": 0,//禁止使用嵌套的三目运算
        "no-new": 0,//禁止在使用new构造一个实例后不赋值
        "no-new-func": 1,//禁止使用new Function
        "no-new-object": 2,//禁止使用new Object()
        "no-new-require": 2,//禁止使用new require
        "no-new-symbol": 2,
        "no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
        "no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()
        "no-octal": 2,//禁止使用八进制数字
        "no-octal-escape": 2,//禁止使用八进制转义序列
        "no-path-concat": 2,//node中不能使用__dirname或__filename做路径拼接
        "no-plusplus": 0,//禁止使用++，--
        "no-param-reassign": 2,//禁止给参数重新赋值
        "no-proto": 2,//禁止使用__proto__属性
        "no-process-env": 0,//禁止使用process.env
        "no-process-exit": 0,//禁止使用process.exit()
        "no-redeclare": 2,//禁止重复声明变量
        "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
        "no-return-assign": [2, "except-parens"],//return 语句中不能有赋值表达式
        "no-self-assign": 2,
        "no-self-compare": 2,//不能比较自身
        "no-sequences": 2,//禁止使用逗号运算符
        "no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
        "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
        "no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
        "no-ternary": 0,//禁止使用三目运算
        "no-this-before-super": 2,//在调用super()之前不能使用this或super
        "no-throw-literal": 1,//禁止抛出字面量错误 throw "error";
        "no-trailing-spaces": 2,//一行结束后面不要有空格
        "no-undef": 2,//不能有未定义的变量
        "no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
        "no-undefined": 2,//不能使用undefined
        "no-unexpected-multiline": 2,//避免多行表达式
        "no-underscore-dangle": 1,//标识符不能以_开头或结尾
        "no-unmodified-loop-condition": 2,
        "no-unneeded-ternary": [2, { "defaultAssignment": false }],//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
        "no-unreachable": 2,//不能有无法执行的代码
        "no-unsafe-finally": 2,
        "no-unused-vars": [2, { "vars": "all", "args": "none" }],//不能有声明后未被使用的变量或参数
        "no-useless-call": 2,//禁止不必要的call和apply
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "no-useless-escape": 0,
        "no-whitespace-before-property": 2,
        "no-var": 0,//禁用var，用let和const代替
        "no-with": 2,//禁用with
        "one-var": [2, { "initialized": "never" }],//连续声明
        //换行时运算符在行尾还是行首
        "operator-linebreak": [2, "after", { "overrides": { "?": "before", ":": "before" } }],
        "padded-blocks": [2, "never"],//块语句内行首行尾是否要空行
        //引号类型 `` "" ''
        "quotes": [0, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "quote-props": 0,//对象字面量中的属性名是否强制双引号
        //语句强制分号结尾
        "semi": [2, "always"],
        "semi-spacing": [2, { "before": false, "after": true }],//分号前后空格
        "space-before-blocks": [2, "always"],//不以新行开始的块{前面要不要有空格
        "space-before-function-paren": [2, "never"],//函数定义时括号前面要不要有空格
        "space-in-parens": [2, "never"],//小括号里面要不要有空格
        "space-infix-ops": 2,//中缀操作符周围要不要有空格
        //一元运算符的前/后要不要加空格
        "space-unary-ops": [2, { "words": true, "nonwords": false }],
        //注释风格不要有空格什么的
        "spaced-comment": [2, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","] }],
        "template-curly-spacing": [2, "never"],
        "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
        "valid-typeof": 2,//必须使用合法的typeof的值
        "wrap-iife": [2, "any"],//立即执行函数表达式的小括号风格
        "yield-star-spacing": [2, "both"],
        "yoda": [2, "never"],//禁止尤达条件
        "prefer-const": 0,//首选const
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
        "object-curly-spacing": [2, "always", { objectsInObjects: false }],//大括号内是否允许不必要的空格
        "array-bracket-spacing": [2, "never"], // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        "vue/jsx-uses-vars": 2
    }
};
