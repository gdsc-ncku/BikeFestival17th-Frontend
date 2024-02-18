import { req } from "./instance";

export const apiSubscribeEvent = (event_id,start,end,detail) =>
  req({
    method: "POST",
    url: "/users/events",
    data: {
      id: event_id,
      event_time_start: start,
      event_time_end: end,
      event_detail: detail,
    },
  });

// export const apiUnSubscribeEvent = (event_id) => 
//   req({
//     method: "DELETE",
//     url: `/users/events/${event_id}`,
//   });

export const apiUnSubscribeEvent = (event_id) => 
  req({
    method: "POST",
    url: `/users/events/delete/${event_id}`,
  });



export const apiGetUserEvents = () => 
  req({
    method: "GET",
    url: "/users/events",
  });
