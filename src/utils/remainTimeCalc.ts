export const remainTimeCalc = (nicknameExpireAt: string) => {
  const DateNicknameExpireAt = new Date(nicknameExpireAt);
  const DateNicknameExpireAtKR = DateNicknameExpireAt.setHours(DateNicknameExpireAt.getHours() + 9);
  const remainMSec = new Date(DateNicknameExpireAtKR).getTime() - new Date().getTime();
  return remainMSec / 1000;
};
