import {req} from "./instance";

export const apiSubscribeEvent = (
  event_id,
  event_detail,
  event_time_end,
  event_time_start
  ) => {
  req({
    method: "POST",
    url: "/users/events",
    data: {
      event_detail: event_detail,
      id: event_id,
      event_time_end: event_time_end,
      event_time_start: event_time_start,
    },
  });
    // return fetch('http://localhost:8000/users/events', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'withCredentials': true,
    //         'credentials': 'include',
    //     },
    //     body: JSON.stringify({id: event_id})
    // })
};

export const apiUnSubscribeEvent = (event_id) => {
  req({
    method: "DELETE",
    url: `/users/events/${event_id}`,
  });
};

export const apiGetUserEvents = () => {
  req({
    method: "GET",
    url: "/events",
  });
};
