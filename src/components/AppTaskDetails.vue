<template>
    <div class="card">
        <h2>{{ task.title }}</h2>
        <p><strong>Статус</strong>: <AppTaskStatus :type="task.status" /></p>
        <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
        <p><strong>Описание</strong>: {{ task.description }}</p>
        <div>
            <button class="btn" @click="take">Взять в работу</button>
            <button class="btn primary" @click="done">Завершить</button>
            <button class="btn danger" @click="cancel">Отменить</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
//import { useRouter } from 'vue-router';
import AppTaskStatus from '@/components/AppTaskStatus';
export default {
    props: ['task'],
    components: {
        AppTaskStatus,
    },
    setup(props) {
        const store = useStore();
        //const router = useRouter();
        const task = props.task;
        const take = () => {
            store.dispatch('changeTaskStatus', { task, status: 'pending' });
            // router.push('/');
        };
        const done = () => {
            store.dispatch('changeTaskStatus', { task, status: 'done' });
            // router.push('/');
        };
        const cancel = () => {
            store.dispatch('changeTaskStatus', { task, status: 'cancelled' });
            // router.push('/');
        };
        return {
            take,
            done,
            cancel,
        };
    },
};
</script>
