import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface Post {
  title: string;
  content: string;
}
export interface CurrentMenu {
  oneDepth: string;
  twoDepth: string;
}
export interface PostsState {
  currentMenu: CurrentMenu;
  currentPosts: Post[] | null;
  singlePost: Post | null;
}

const initialState: PostsState = {
  currentMenu: {
    oneDepth: "intro",
    twoDepth: "1",
  },
  currentPosts: null,
  singlePost: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changeOuterMenu: (state, action: PayloadAction<string>) => {
      state.currentMenu.oneDepth = action.payload;
    },
    changeMenu: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.currentMenu.twoDepth = action.payload;
    },
    // getPosts: (state, action: PayloadAction<Post[]>) => {
    //   state.currentPosts = action.payload;
    //   //state.posts?.push(payload.data);
    // },
  },
});

export const { changeOuterMenu, changeMenu } = postsSlice.actions;

export const selectCount = (state: RootState) => state.posts;

export default postsSlice.reducer;
