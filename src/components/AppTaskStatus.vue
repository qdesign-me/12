<template>
    <span :class="['badge', $store.state.statuses[type].css]">{{ $store.state.statuses[type].title }}</span>
</template>

<script>
export default {
    props: ['type'],
};
</script>
