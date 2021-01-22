<template>
    <the-nav></the-nav>
    <router-view />
</template>

<script>
import TheNav from '@/components/TheNav';
export default {
    components: {
        TheNav,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    margin: 100px 0 0;
}
.card {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
}
form {
    text-align: left;
}
</style>
