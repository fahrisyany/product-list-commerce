import * as type from "../types/data.types";
import { DropdownValueType } from "../../components/dropdownCustom/DropdownCustom";

export function getData(): type.DataActionTypes {
  return {
    type: type.GET_DATAS_REQUESTED,
  };
}

export function sortData(value: DropdownValueType): type.DataActionTypes {
  switch (value) {
    case "lowest":
      return {
        type: type.SORT_DATA_ASC,
      };

    case "highest":
      return {
        type: type.SORT_DATA_DSC,
      };
    case "popular":
      return {
        type: type.GET_DATAS_REQUESTED,
      };
  }
}
