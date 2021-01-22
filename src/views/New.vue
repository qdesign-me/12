<template>
    <form class="card" @submit.prevent="submit">
        <h1>Создать новую задачу</h1>
        <div class="form-control">
            <label for="title">Название</label>
            <input type="text" id="title" v-model="form.title" />
        </div>

        <div class="form-control">
            <label for="date">Дата дэдлайна</label>
            <input type="date" id="date" v-model="form.date" />
        </div>

        <div class="form-control">
            <label for="description">Описание</label>
            <textarea id="description" v-model="form.description"></textarea>
        </div>

        <button class="btn primary" type="submit" :disabled="!isValidForm">Создать</button>
    </form>
</template>

<script>
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const NEW_TASK = { title: '', date: '', description: '' };
        const form = reactive({ ...NEW_TASK });
        const isValidForm = computed(() => {
            return form.title && form.date && form.description;
        });

        const submit = () => {
            store.dispatch('addTask', { ...form, status: 'active', id: Date.now() });
            Object.assign(form, NEW_TASK);
            router.push('/');
        };
        return { form, isValidForm, submit };
    },
};
</script>
