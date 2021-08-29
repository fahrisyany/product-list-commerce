import { ItemInterface } from "../../interfaces/item.interface";
export const GET_DATAS_REQUESTED = "GET_DATAS_REQUESTED";
export const GET_DATAS_SUCCESS = "GET_DATAS_SUCCESS";
export const GET_DATAS_FAILED = "GET_DATAS_FAILED";
export const SORT_DATA_ASC = "SORT_DATA_ASC";
export const SORT_DATA_DSC = "SORT_DATA_DSC";
export const SORT_DATA_POPULAR = "SORT_DATA_POPULAR";

interface GetDataActionInterface {
  type: typeof GET_DATAS_REQUESTED;
}
interface GetDataFailActionInterface {
  type: typeof GET_DATAS_FAILED;
  message: string;
}
interface GetDataSuccessActionInterface {
  type: typeof GET_DATAS_SUCCESS;
  datas: ItemInterface[];
}
interface SortDataAscInterface {
  type: typeof SORT_DATA_ASC;
}
interface SortDataDscInterface {
  type: typeof SORT_DATA_DSC;
}

export type DataActionTypes =
  | GetDataActionInterface
  | GetDataFailActionInterface
  | GetDataSuccessActionInterface
  | SortDataAscInterface
  | SortDataDscInterface;
