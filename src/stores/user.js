import { ref,computed } from 'vue'
import { defineStore } from 'pinia';
import { apiUnSubscribeEvent,apiSubscribeEvent,apiGetUserEvents } from '../apis/user';
import { useDialogStore } from './dialog';

export const useEventStore = defineStore('loading', () => {
    const userEvents = ref({});
    const dialogStore = useDialogStore();

    const isEventSubscribed = computed((event_id) => {
        return userEvents.value[event_id];
    });

    async function fetchUserEvents() {
        try {
            const response = await apiGetUserEvents();
            // update userEvents ref
            // response.data = [{id: 1, name: 'event1'}, {id: 2, name: 'event2'}]
            const dict = {};
            response.data.forEach(event => {
                dict[event.id] = true;
            });
            userEvents.value = dict;
        } catch (error) {
            console.log(error);
            dialogStore.setError({
                'title': 'Error',
                'firstLine': 'Failed to fetch user events',
                'secondLine': '',
            });
        }
    }

    async function subscribeEvent(event_id) {
        apiSubscribeEvent(event_id)
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
        .then(() => {
            delete userEvents.value[event_id];
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