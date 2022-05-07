import http from '../http-common';

export const addTalk = async (talk) => {
  return await http.post("/addTalk", talk);
};