<template>
    <div class="header">
        <nav class="nav">
            头部
        </nav>
    </div>
</template>

<script>
    export default {
        name: "myHeader",
        data() {
            return {};
        },
        created() {
        },
        computed: {},
        methods: {}
    };
</script>
<style lang="less" scoped>
    .header {
        height           : 80px;
        background-color: #2B85E4;
        .nav {
            width       : 1170px;
            margin      : 0 auto;
            line-height : 80px;
            .title {
                text-align : center;
                .head_nav {
                    height     : 80px;
                    width      : 80%;
                    box-sizing : border-box;
                    cursor     : pointer;
                }
                .head_nav_style {
                    border-bottom : 2px solid red;
                    color         : red;
                }
            }
            .login {
                font-size      : 14px;
                color          : #333333;
                letter-spacing : 0;
                .login_success {
                    .line {
                        margin : 0 5px;
                    }
                    .message {
                        font-size      : 14px;
                        color          : #DC302E;
                        letter-spacing : 0;
                    }
                }
                .login_function {
                    height      : 80px;
                    line-height : 80px;
                    .login_btn {
                        display      : inline-block;
                        width        : 80px;
                        height       : 42px;
                        line-height  : 42px;
                        font-size    : 15px;
                        text-align   : center;
                        color        : #FFFFFF;
                        border       : 1px solid #DC302E;
                        margin-right : 10px;
                        cursor       : pointer;
                    }
                    .login_btn_background_red {
                        background : #DC302E;
                    }
                    .login_btn_background_whide {
                        color : #DC302E;
                    }
                }
            }
            .logo {
                vertical-align : middle;
            }
        }
    }
</style>
