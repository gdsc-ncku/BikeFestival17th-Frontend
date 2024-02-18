import { ref,computed } from 'vue'
import { defineStore } from 'pinia';
import { apiUnSubscribeEvent,apiSubscribeEvent,apiGetUserEvents } from '../apis/user';
import { useDialogStore } from './dialog';

export const useEventStore = defineStore('loading', () => {
    const userEvents = ref({});
    const dialogStore = useDialogStore();

    // https://github.com/vuejs/pinia/discussions/2183
    const isEventSubscribed = computed(() => (event_id) => {
        return userEvents.value[event_id];
    });


    async function fetchUserEvents() {
        apiGetUserEvents()
        .then((response) => {
            const dict = {};
            response.data.data.forEach(event => {
                dict[event.id] = true;
            });
            userEvents.value = dict;

        }).catch((error) => {
            console.log(error);
            dialogStore.setError({
                'title': 'Error',
                'firstLine': 'Failed to fetch user events',
                'secondLine': '',
            });
        });
    }

    async function subscribeEvent(event_id,start,end,detail) {
        console.log('subscribe event');
        apiSubscribeEvent(event_id,start,end,detail)
        .then(() => {
            userEvents.value[event_id] = true;
            dialogStore.setSuccess({
                'title': 'Success',
                'firstLine': 'You have successfully subscribed to the event',
                'secondLine': '',
            });
        }).catch((error) => {
            console.log(error);
            dialogStore.setError({
                'title': 'Error',
                'firstLine': 'Failed to subscribe to the event',
                'secondLine': '',
            });
        });
    }

    async function unSubscribeEvent(event_id) {
        apiUnSubscribeEvent(event_id)
        .then((response) => {
            delete userEvents.value[event_id];
            console.log("ubSubscribed response",response);
            dialogStore.setSuccess({
                'title': 'Success',
                'firstLine': 'You have successfully unsubscribed from the event',
                'secondLine': '',
            });
        }).catch((error) => {
            console.log(error);
            dialogStore.setError({
                'title': 'Error',
                'firstLine': 'Failed to unsubscribe from the event',
                'secondLine': '',
            });
        });
    }

    return {
        userEvents,
        fetchUserEvents,
        subscribeEvent,
        unSubscribeEvent,
        isEventSubscribed
    }
})