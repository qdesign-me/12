<template>
    <app-task-details :task="task" v-if="task"></app-task-details>
    <h3 class="text-white center" v-else>
        Задачи с id = <strong>{{ id }}</strong> нет.
    </h3>
</template>

<script>
import AppTaskDetails from '../components/AppTaskDetails';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
    components: { AppTaskDetails },

    setup() {
        const store = useStore();
        const route = useRoute();
        const id = route.params.id;
        const task = store.getters.findTaskById(+id);

        return { task, id };
    },
};
</script>

<style scoped></style>
