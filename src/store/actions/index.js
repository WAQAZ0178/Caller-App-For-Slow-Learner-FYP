import { IMATE_API } from "../setting/setting";

const postData = async (url,data) => {
    const response = await client.post(url, data);
    return response;
  };
  const getData = async (url) => {
    console.log('url: ',url);
    const response = await client.get(url);
    return response;
  };
const IMATE_ACTIONS = {
    postData,
    getData,
};

export default IMATE_ACTIONS;