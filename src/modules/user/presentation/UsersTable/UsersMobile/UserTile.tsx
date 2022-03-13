import styled from "styled-components";

import {
  UserAddress,
  useUserFieldsTranslation,
} from "modules/user/presentation";
import { IUser } from "modules/user/types";

import { VStack } from "components/VStack";
import { HStack } from "components/HStack";

interface IProps {
  user: IUser;
}

const UserTile = ({ user }: IProps) => {
  const userFieldsTranslation = useUserFieldsTranslation();

  return (
    <MobileTile>
      <VStack gap="10px">
        <HStack gap="10px">
          <FieldDescription>{userFieldsTranslation.username}:</FieldDescription>
          {user.username}
        </HStack>
        <HStack gap="10px">
          <FieldDescription>{userFieldsTranslation.name}:</FieldDescription>
          {user.name}
        </HStack>
        <HStack gap="10px">
          <FieldDescription>{userFieldsTranslation.email}:</FieldDescription>
          {user.email}
        </HStack>
        <HStack gap="10px">
          <FieldDescription>{userFieldsTranslation.address}:</FieldDescription>
          <UserAddress userAddress={user.address} />
        </HStack>
        <HStack gap="10px">
          <FieldDescription>{userFieldsTranslation.phone}:</FieldDescription>
          {user.phone}
        </HStack>
      </VStack>
    </MobileTile>
  );
};

const FieldDescription = styled.span`
  font-weight: bold;
`;

const MobileTile = styled.div`
  border-radius: 5px;
  border: 1px solid lightsteelblue;
  padding: 10px;
`;

export { UserTile };
