import { createStore } from 'vuex';

export default createStore({
    state: {
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
        statuses: {
            active: { title: 'Акивный', css: '' },
            done: { title: 'Завершена', css: 'primary' },
            cancelled: { title: 'Отменена', css: 'danger' },
            pending: { title: 'Выполняется', css: 'warning' },
        },
    },
    mutations: {
        ADD_TASK(state, task) {
            state.tasks.push(task);
        },
        CHANGE_TASK_STATUS(state, { task, status }) {
            const idx = state.tasks.findIndex((t) => t.id === task.id);
            state.tasks[idx].status = status;
        },
    },
    actions: {
        addTask({ commit, dispatch }, task) {
            if (Date.parse(task.date) - Date.parse(new Date()) < 0) {
                task.status = 'cancelled';
            }

            commit('ADD_TASK', task);
            dispatch('syncStorage');
        },
        changeTaskStatus({ commit, dispatch, state }, { task, status }) {
            commit('CHANGE_TASK_STATUS', { task, status });
            dispatch('syncStorage');
        },
        syncStorage({ state }) {
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
    },
    getters: {
        activeTasks(state) {
            return state.tasks.filter((task) => task.status === 'active').length;
        },
        findTaskById(state) {
            return (id) => state.tasks.find((task) => task.id === id);
        },
    },
    modules: {},
});
