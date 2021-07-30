import { getToken } from "../utils/storage/storage";
export const getHeaders = async () => {
  try {
    const token = getToken();
    let Headers = {
      authorization: "Bearer " + token,
    };
    return Headers;
  } catch (error) {}
};

// export const getPubSubToken = async () => {
//   try {
//     const state = await store.getState();
//     const {
//       user: { pubsub_token: pubSubToken },
//     } = state.auth;

//     return pubSubToken;
//   } catch (error) {}
// };

// export const getUserDetails = async () => {
//   try {
//     const state = await store.getState();
//     const {
//       user: { id: userId, account_id: accountId },
//     } = state.auth;
//     return { accountId, userId };
//   } catch (error) {}
// };
