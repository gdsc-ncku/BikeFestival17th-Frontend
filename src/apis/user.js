import {req} from "./instance";

export const apiSubscribeEvent = (event_id) => {
  req({
    method: "POST",
    url: "/users/events",
    data: {
      id: event_id,
    },
    headers:{
        withCredentials: true
    }
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
