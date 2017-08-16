import rp from 'request-promise';

const arrayToQueryString = (data = []) =>
  data.join('&');

const objectToParamsArray = (params = {}) =>
  Object
    .keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`);

const embedToArray = (embed = []) =>
  embed
    .map(entry => `embed[]=${encodeURIComponent(entry)}`);

const request = ({ url }) =>
  rp({ url, json: true });

const stripHTML = html =>
  (html && html.replace(/<(?:.|\n)*?>/gm, '')) || null;

export default {
  arrayToQueryString,
  objectToParamsArray,
  embedToArray,
  request,
  stripHTML,
};
