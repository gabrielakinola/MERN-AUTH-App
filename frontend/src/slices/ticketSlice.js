import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isTicketPage: false,
  imgUrl: "",
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    addTicket: (state, { payload }) => {
      state.tickets = state.tickets.concat(payload);
    },
    setImgUrl: (state, { payload }) => {
      state.imgUrl = payload;
    },
    setIsTicket: (state) => {
      state.isticketPage = !state.isticketPage;
    },

    clearFormState: (state) => {
      state.tickets = [];
    },
  },
});

export const { addTicket, setIsTicket, setImgUrl, clearFormState } =
  ticketSlice.actions;
export default ticketSlice.reducer;
