const base_url = "https://cryptolearn-api.herokuapp.com/";
/*
 * fetch_data API
 * This util file is used to connect and communicate with the REST server.
 */
export const fetch_data = async (url) => {
  url = url.replaceAll(/[#%\\]/g, "1"); // Replace problematic characters with "1"
  const res = await fetch(base_url + url);
  const res_data = await res.json();
  return res_data;
};
