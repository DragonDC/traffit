import { IUserAddress } from "modules/user/types";

interface IProps {
  userAddress: IUserAddress;
}

const UserAddress = ({ userAddress }: IProps) => {
  const { city, street, zipcode } = userAddress;
  return <span>{`${street}, ${city}, ${zipcode}`}</span>;
};

export { UserAddress };
