<template>
    <div class="app">
        <h1>你好</h1>
        <Person/>
    </div>
</template>


<script lang="ts">
    import Person from './components/person.vue'

    export default {
        name: 'App',
        components: {Person}
    }
</script>


<style>
    .app {
        padding: 20px;
        background: #ddd;
        border-radius: 20px;
        box-shadow: 0 0 10px;
    }
</style>