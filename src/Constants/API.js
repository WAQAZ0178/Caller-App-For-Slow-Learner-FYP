import axios from 'axios';
// import { Platform } from 'react-native';
import URLS from './Constants';
const getUrl = rel => `${URLS.BASEURL}${rel}`;

export const RemoveFromWishlist = async (relativeUrl, data) => {
  const url = getUrl(relativeUrl);
  console.log('url :', url);
  const config = {
    method: 'DELETE',
    url: url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: data,
  };

  const response = await axios(config)
    .then(res => res)
    .catch(error => {
      return {status: 404};
    });
  return response;
};

export const getData = async (relativeUrl, data) => {
  const url = getUrl(relativeUrl);
  console.log('url :', url);
  const config = {
    method: 'get',
    url: url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: data,
  };

  const response = await axios(config)
    .then(res => res)
    .catch(error => {
      return {status: 404};
    });
  return response;
};

export const postData = async (relativeUrl, data, id) => {
  // console.log('data::::', data);
  const url = getUrl(relativeUrl);
  console.log('url :', url);
  const config = {
    method: 'post',
    url: url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: id,
    },
    data: data,
  };
  const response = await axios(config)
    .then(res => res)
    .catch(error => {
      // console.log(response);
      return {status: 500};
    });
  return response;
};
export const postFormData = async (relativeUrl, data, token) => {
  // console.log('data::::',data);
  // console.log('token::::',token);
  const url = getUrl(relativeUrl);
  console.log('url :', url);
  const config = {
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'multipart/form-data; ',
      Authorization: token,
    },
    data: data,
  };
  const response = await axios(config)
    .then(res => res)
    .catch(error => {
      // console.log(response);
      return {status: 500};
    });
  return response;
};

export const sendMessageToServer = async (socket, msgInfo) => {
  socket.emit('chat message', msgInfo);
};
export const allowCCDToPatient = (socket, patient) => {
  socket.emit('allowCCDToPatient', patient);
};
