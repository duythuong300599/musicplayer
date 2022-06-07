import axiosClient from "./axiosClient";

const songApi = {
  getChartHome: () => {
    const url = "/chart-home";
    return axiosClient.get(url);
  },
  getTop100: () => {
    const url = "/top100";
    return axiosClient.get(url);
  },
  getSong: (id) => {
    const url = `/song?id=${id}`;
    return axiosClient.get(url);
  },
  getHomePage: (id) => {
    const url = `/home?page=${id}`;
    return axiosClient.get(url);
  },
};

export default songApi;
