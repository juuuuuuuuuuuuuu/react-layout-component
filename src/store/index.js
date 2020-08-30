import { configureStore } from '@reduxjs/toolkit'
import main from './main';

export default configureStore({
  reducer: {
    main,
  }
});