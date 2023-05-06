import { configureStore } from "@reduxjs/toolkit";
/* import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import transactionReducer from "./transactionReducer"; */

//WHAT TO UPDATE:
// User : Log in and Log out , see only his data
// Profile : Update profil
// Transaction : display monthly transaction, update modify or delete transactions 

export const store = configureStore({
    reducer: {
/*       user: userReducer,
      profile: profileReducer,
      transaction: transactionReducer, */
    },
  });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch