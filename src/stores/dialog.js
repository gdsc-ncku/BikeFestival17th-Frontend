import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
    const type = ref(''); // 'error' , 'success' , 'warning' , info
    const show = ref(false);
    const content = ref({
        'title': '',
        'firstLine': '',
        'secondLine': '',
    })

    const isShow = computed(() => show.value);
    const dialogContent = computed(() => content.value);
    const dialogType = computed(() => type.value);

    async function showDialog(newContent, newType) {
        console.log('show dialog');
        console.log(newContent);
        show.value = true;
        type.value = newType;
        content.value = newContent;
        setTimeout(() => {
            show.value = false;
        }, 3000);
    }

    async function reset() {
        show.value = false;
    }

    return {
        dialogContent,
        isShow,
        dialogType,
        showDialog,
        reset
    }
})