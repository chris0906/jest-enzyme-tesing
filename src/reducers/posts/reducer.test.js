import { types } from "./../../actions/types";
import postReducer from "./reducer";

describe("Posts Reducer", () => {
  it("Should return default state", () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it("should returen new state if receiving type", () => {
    const posts = [
      { title: "Test 1" },
      { title: "Test 2" },
      { title: "Test 3" }
    ];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
