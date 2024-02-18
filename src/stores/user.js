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
            if (error.response.status === 401) {
                dialogStore.showDialog({
                    'title': 'Warning',
                    'firstLine': '登入 Line 帳號才能訂閱活動!',
                },'warning');
                return;
            }
        });
    }

    async function subscribeEvent(event_id,start,end,detail,name) {
        console.log('subscribe event');
        apiSubscribeEvent(event_id,start,end,detail)
        .then(() => {
            userEvents.value[event_id] = true;
            dialogStore.showDialog({
                'title': 'Success',
                'firstLine': '成功訂閱活動',
                'secondLine': name,
            },'success');
        }).catch((error) => {
            console.log(error);
            // 401: Unauthorized

            if (error.response.status === 401) {
                dialogStore.showDialog({
                    'title': 'Error',
                    'firstLine': '請先登入 Line 帳號才能訂閱活動',
                },'error');
                return;
            }

            // 422: To many subscriptions
            if (error.response.status === 422) {
                dialogStore.showDialog({
                    'title': 'Warning',
                    'firstLine': '只能訂閱 10 個活動',
                },'warning');
                return;
            }
        });
    }

    async function unSubscribeEvent(event_id,name) {
        apiUnSubscribeEvent(event_id)
        .then((response) => {
            delete userEvents.value[event_id];
            dialogStore.showDialog({
                'title': 'Success',
                'firstLine': '成功取消訂閱活動',
                'secondLine': name,
            },'success');
        }).catch((error) => {
            dialogStore.showDialog({
                'title': 'Success',
                'firstLine': error.response.data.data.msg,
            },'success');
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