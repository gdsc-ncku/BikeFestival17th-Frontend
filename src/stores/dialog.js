import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
    const type = ref(''); // 'error' , 'success' , 'warning' , info
    const closeTime = ref(null);
    const show = ref(false);
    const content = ref({
        'title': '',
        'firstLine': '',
        'secondLine': '',
    })

    const isShow = computed(() => show.value);
    const dialogContent = computed(() => content.value);
    const dialogType = computed(() => type.value);
    const timer = new Date();
    const span = 3500;

    async function showDialog(newContent, newType) {
        console.log('show dialog');
        console.log(newContent);
        show.value = true;
        type.value = newType;
        content.value = newContent;

        const close = timer + span;
        closeTime.value = close;

        console.log(timer.getTime());
        console.log(closeTime.value);

        setTimeout(() => {
            if (closeTime.value > close) {
                return;
            }
            show.value = false;
        }, span);
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