import { ItemInterface } from "./item.interface";

export interface GlobalStateInterface {
  datas: ItemInterface[];
  loading: boolean;
  error?: string;
}
