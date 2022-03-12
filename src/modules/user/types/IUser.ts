import { IUserAddress } from "modules/user/types";
import { ICompany } from "modules/user/types";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: ICompany;
}
