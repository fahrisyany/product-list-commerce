import * as type from "../types/data.types";
import { GlobalStateInterface } from "../../interfaces/sagas.interface";

const initialState: GlobalStateInterface = {
  datas: [],
  loading: false,
  error: "",
};

export default function datasReducer(
  state = initialState,
  action: type.DataActionTypes
): GlobalStateInterface {
    
  const sortByPriceAsc = () =>
    state.datas.sort((a, b) => a.salePrice - b.salePrice);

  const sortByPriceDsc = () =>
    state.datas.sort((a, b) => b.salePrice - a.salePrice);

  switch (action.type) {
    case type.GET_DATAS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_DATAS_SUCCESS:
      return {
        ...state,
        datas: action.datas,
        loading: false,
      };
    case type.GET_DATAS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.SORT_DATA_ASC:
      return {
        ...state,
        loading: false,
        datas: sortByPriceAsc(),
      };
    case type.SORT_DATA_DSC:
      return {
        ...state,
        loading: false,
        datas: sortByPriceDsc(),
      };
    default:
      return state;
  }
}
