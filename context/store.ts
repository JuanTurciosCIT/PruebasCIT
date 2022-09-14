import { Action, configureStore, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { FooterSection } from "utils/types/commonContent.interface";

// slices
export const footerContentSlice = createSlice({
  name: "footerContent",
  initialState: {
    contact: {},
    locations: {},
  } as FooterSection,
  reducers: {
    setFooterContent: (state, action: PayloadAction<FooterSection>) => {
      state.contact = action.payload.contact;
      state.locations = action.payload.locations;
    },
  },
});

const store = () => configureStore({
  reducer: {
    [footerContentSlice.name]: footerContentSlice.reducer,
  }
})

export default store;
export const footerContentActions = footerContentSlice.actions;

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
