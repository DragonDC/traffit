import { IUser } from "modules/user/types";

export const createUser = (user?: IUser): IUser => {
  return {
    username: "Username",
    name: "Name",
    address: {
      zipcode: "zipcode",
      geo: {
        lat: 123,
        lng: 321,
      },
      street: "Street",
      suite: "Suite",
      city: "City",
    },
    id: 123,
    company: {
      name: "Company name",
      bs: "BS",
      catchPhrase: "Phrases",
    },
    email: "email@gmail.com",
    phone: "6969-666-666",
    website: "www.testowowowo.pl",
    ...user,
  };
};
