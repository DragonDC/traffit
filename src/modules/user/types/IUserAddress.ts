import { IGeo } from "modules/user/types";

export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}
