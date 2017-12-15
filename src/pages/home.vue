<template>
    <div>
        <p>基础模板</p>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <br><br>
        <Button type="info">信息按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="error">错误按钮</Button>
        <i-button type="error">错误按钮</i-button>
        <i-switch v-model="switch1" @on-change="change"></i-switch>
        <button style="width: 200px;height: 200px;" v-waves>21312313</button>
        <input v-focus v-model="message">
        {{ message | numFormateMillion }}
        <img src="../assets/img/logo.png">
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                switch1: false,
                message: 0
            };
        },
        methods: {
            change(status) {
                this.$Message.info("开关状态：" + status);
            }
        }
    };
</script>
<style lang="less">
    p {
        color : red;
    }
</style>
