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

    updateEvent: (state, action) => {
      const EventList = window.localStorage.getItem('EventList');
      if (EventList) {
        const EventListArr = JSON.parse(EventList);
        EventListArr.forEach((Event) => {
          if (Event.id === action.payload.id) {
            Event.status = action.payload.status;
            Event.names = action.payload.names;
            Event.username = action.payload.username;
            Event.tel = action.payload.tel;
            Event.email = action.payload.email;
          }
        }); 
        window.localStorage.setItem('EventList', JSON.stringify(EventListArr));
        state.EventList = [...EventListArr];
      }
    },
    deleteEvent:(state,action)=> {
      const EventList = window.localStorage.getItem('EventList');
      if (EventList) {
        const EventListArr = JSON.parse(EventList);
        EventListArr.forEach((Event, index) => {
          if (Event.id === action.payload) {
            EventListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('EventList', JSON.stringify(EventListArr));
        state.EventList = EventListArr;
      }
    }
  },

});

export const { addEvent, deleteEvent, updateEvent} = EventSlice.actions;
export default EventSlice.reducer;
