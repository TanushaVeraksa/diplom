import { takeEvery } from "redux-saga/effects";

import { GET_PREMIERES } from "../../constants/premieres";
import { getPremieres } from "../workers/premieres";

export default function* showsWatcher() {
  yield takeEvery(GET_PREMIERES, getPremieres);
}