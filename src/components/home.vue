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
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {};
        },
        methods: {}
    };
</script>
<style lang="less">
    p {
        color : red;
    }
</style>
