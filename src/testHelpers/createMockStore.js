import reduxMockStore from "redux-mock-store";
import thunk from "redux-thunk";

export const createMockStore = reduxMockStore([thunk]);

export default createMockStore;
