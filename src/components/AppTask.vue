<template>
    <div class="card">
        <h2 class="card-title">
            {{ task.title }}
            <AppTaskStatus :type="task.status" />
        </h2>
        <p>
            <strong>
                <small>
                    {{ new Date(task.date).toLocaleDateString() }}
                </small>
            </strong>
        </p>
        <router-link class="btn primary" :to="`/task/${task.id}`">Посмотреть</router-link>
    </div>
</template>

<script>
import AppTaskStatus from '@/components/AppTaskStatus';
export default {
    props: ['task'],
    components: {
        AppTaskStatus,
    },
};
</script>

<style lang="scss" scoped></style>
