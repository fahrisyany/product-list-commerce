import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../types/data.types";
// import { environment } from '../../environments/environments'
import { ItemInterface } from "../../interfaces/item.interface";
import { ResponseInterface } from "../../interfaces/response.interface";

const apiUrl =
  "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json";

function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      throw err;
    });
}

function* fetchData() {
  try {
    const datas: ResponseInterface<ItemInterface> = yield call(getApi);
    const { results } = datas;
    yield put({ type: type.GET_DATAS_SUCCESS, datas: results });
  } catch (e) {
    yield put({ type: type.GET_DATAS_FAILED, message: "error fetching data" });
  }
}

function* dataSaga() {
  yield takeEvery(type.GET_DATAS_REQUESTED, fetchData);
}

export default dataSaga;
