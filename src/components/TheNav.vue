<template>
    <div id="nav" class="navbar">
        <h3>Freelance</h3>
        <ul class="navbar-menu">
            <li><router-link to="/">Все задачи</router-link></li>
            <li><router-link to="/new">Создать</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
#nav
    a
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active
            color: #42b983;
</style>
