import {req} from "./instance";

export const apiGetEvents = (page, limit) =>
  req({
    method: "GET",
    url: "/events",
    query: {
      page: page,
      limit: limit,
    },
  });

export const apiSubscribeEvent = (
  event_detail,
  event_id,
  event_time_end,
  event_time_start
) =>
  req({
    method: "POST",
    url: "/events",
    data: {
      event_detail: event_detail,
      event_id: event_id,
      event_time_end: event_time_end,
      event_time_start: event_time_start,
    },
  });

export const apiGetEventsUsers = req({
  method: "GET",
  url: "/events/users",
});

export const apiGetEvent = (event_id) =>
  req({
    method: "GET",
    url: `/events/${event_id}`,
  });
  
export const apiDeleteEvent = (event_id) =>
  req({
    method: "DELETE",
    url: `/events/${event_id}`,
  });