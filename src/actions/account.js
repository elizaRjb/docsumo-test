export const SET_ACCOUNT_DETAILS = 'SET_ACCOUNT_DETAILS';

export function setAccountDetails(details) {
  return {
    type: SET_ACCOUNT_DETAILS,
    details
  };
}