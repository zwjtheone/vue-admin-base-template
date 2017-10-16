<template>
	<div id="app">
		<myHeader></myHeader>
		<router-view></router-view>
		<myFooter></myFooter>
	</div>
</template>

<script>
	import myHeader from "@/components/element/header";
	import myFooter from "@/components/element/footer";

	export default {
    name: "app",
    components: {
        myHeader,
        myFooter
    }
	};
</script>
<style>

</style>
