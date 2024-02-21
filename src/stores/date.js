import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useDateStore = defineStore('date', () => {
    const currentDate = ref('3/2')

    const selectedDate = computed(() => currentDate.value);

    async function selectDate(newDate) {
        currentDate.value = newDate;
    }
    return {
        selectedDate,
        selectDate
    }
})