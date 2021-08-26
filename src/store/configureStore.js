import { configureStore } from "@reduxjs/toolkit";
import reducer from "./counter";

const store = configureStore({ reducer });

export default store;
