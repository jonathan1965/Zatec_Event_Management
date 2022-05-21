import { createSlice } from '@reduxjs/toolkit';

const getInitialEvent = () => {
  // getting Event list
  const localEventList = window.localStorage.getItem('EventList');
  // if Event list is not empty
  if (localEventList) {
    return JSON.parse(localEventList);
  }
  window.localStorage.setItem('EventList', []);
  return [];
};

const initialValue = {
  filterStatus: 'all',
  EventList: getInitialEvent(),
};

export const EventSlice = createSlice({
  name: 'Event',
  initialState: initialValue,
  reducers: {
    addEvent: (state, action) => {
      state.EventList.push(action.payload);
      const EventList = window.localStorage.getItem('EventList');
      if (EventList) {
        const EventListArr = JSON.parse(EventList);
        EventListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('EventList', JSON.stringify(EventListArr));
      } else {
        window.localStorage.setItem(
          'EventList',
          JSON.stringify([{...action.payload}])
        );
      }
    },
  },
});

export const { addEvent} = EventSlice.actions;
export default EventSlice.reducer;
