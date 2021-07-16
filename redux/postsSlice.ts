import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// 메인 홈에서는 null로할지 one에 추가할지 고민
export type OneDepth = "aa" | "bb" | "cc";
export type TwoDepth = "two-aa" | "two-dd";

export interface Post {
  title: string;
  content: string;
}
export interface CurrentMenu {
  oneDepth: OneDepth;
  twoDepth: TwoDepth;
}
export interface PostsState {
  currentMenu: CurrentMenu;
  currentPosts: Post[] | null;
  singlePost: Post | null;
}

const initialState: PostsState = {
  currentMenu: {
    oneDepth: "aa",
    twoDepth: "two-dd",
  },
  currentPosts: null,
  singlePost: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // getPosts: (state, action: PayloadAction<Post[]>) => {
    //   state.currentPosts = action.payload;
    //   //state.posts?.push(payload.data);
    // },
  },
});

//export const { getPosts } = postsSlice.actions;

export const selectCount = (state: RootState) => state.posts;

export default postsSlice.reducer;
