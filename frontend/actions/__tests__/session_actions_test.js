// import configureMockStore from "redux-mock-store";
// import thunk from "redux-thunk";
import * as actions from "../session_actions";
// import * as ApiUtil from "../../utils/session_api_util";

// import { testUser } from "../../testUtil/user_helper";

let testUser = {username:'jack',password:'password'}

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);


describe("actions", () => {
  test("signup should create an action to receive users", () => {
    const expectedAction = {
      type: actions.RECEIVE_CURRENT_USER,
      currentUser: testUser
    };

    expect(actions.receiveCurrentUser(testUser)).toEqual(expectedAction);
  });
});
