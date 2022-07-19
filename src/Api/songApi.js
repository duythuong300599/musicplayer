import axiosClient from "./axiosClient";

const songApi = {
  getChartHome: () => {
    const url = "/charthome";
    return axiosClient.get(url);
  },
  getSong: (id) => {
    const url = `/song?id=${id}`;
    return axiosClient.get(url);
  },
};

export default songApi;
