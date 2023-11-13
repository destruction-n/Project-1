import UserSvg from "src/client/components/images/UserSvg";
import { IconInitials, UserText } from "src/client/components/User/styles";

const getInitials = (username: string) => {
  return username[0]
};

export const getIcon = (username: string) => {
  if (username) return <IconInitials>{getInitials(username)}</IconInitials>;
  else return <UserSvg />;
};

export const getUserText = (username: string) => {
  return username ? (
    <UserText>{username}</UserText>
  ) : (
    <UserText>Log In</UserText>
  );
};
