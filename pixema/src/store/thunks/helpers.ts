import { userApi } from "src/client/api/userApi";

export const getTokens = async (email: string, password: string) => {
  const res = await userApi.getTokens(email, password);
  return res?.data;
};

export const signIn = async (token: string) => {
  const res = await userApi.signIn(token);
  return res?.data;
};

export const isTokenValid = async (token: string) => {
  const res = await userApi.verifyToken(token);
  return res?.status === 200;
};

export const refreshAccessToken = async (token: string) => {
  const res = await userApi.refreshToken(token)
  return res?.data;
}
export const getRatingForFilters = (
  lengthOfFilmsArr: number,
  ratingFrom: number,
  ratingTo: number
) => {
  const numberOfRatigs = ratingTo - ratingFrom + 1;
  const numberOfParts = Math.ceil(lengthOfFilmsArr / numberOfRatigs);
  const numberOfFilmsInOnePart = Math.ceil(lengthOfFilmsArr / numberOfParts);

  const ratings = [];

  for (let i = 1; i <= lengthOfFilmsArr; i++) {
    const inWichPartIsFilm = Math.ceil(i / numberOfFilmsInOnePart);
    const rating = ratingFrom + inWichPartIsFilm - 1;
    ratings.push(rating);
  }

  return ratings;
};

