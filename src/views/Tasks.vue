<template>
    <h3 class="text-white">Всего активных задач: {{ $store.getters.activeTasks }}</h3>
    <div class="flex">
        <h3 class="text-white">Фильтр</h3>
        <div class="form-control" style="margin-left:10px">
            <select v-model="selectedStatus">
                <option value="">Все</option>
                <option v-for="(status, key) in statuses" :key="key" :value="key">{{ status.title }}</option>
            </select>
        </div>
    </div>
    <template v-if="tasks.length">
        <app-task v-for="task in tasks" :key="task.id" :task="task"></app-task>
    </template>
    <h1 v-else class="text-white center">Задач пока нет</h1>
</template>

<script>
import AppTask from '../components/AppTask';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
export default {
    components: { AppTask },

    setup() {
        const store = useStore();
        const statuses = store.state.statuses;
        const selectedStatus = ref('');
        const tasks = computed(() => {
            const all = store.state.tasks;
            if (!selectedStatus.value) return all;
            return all.filter((t) => t.status === selectedStatus.value);
        });
        return { statuses, selectedStatus, tasks };
    },
};
</script>
