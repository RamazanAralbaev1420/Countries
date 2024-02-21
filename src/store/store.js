import { configureStore } from '@reduxjs/toolkit';
import singlePageSlice from './OpenSingleSlice';

export const store =  configureStore({
  reducer: {
    country: singlePageSlice,
    
  },

  
});