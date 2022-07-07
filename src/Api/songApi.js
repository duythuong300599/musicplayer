import axiosClient from "./axiosClient";

const songApi = {
  getChartHome: () => {
    const url = "/charthome";
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
  getInfoSong: (id) => {
    const url = `/infosong?id=${id}`;
    return axiosClient.get(url);
  },
  getLyrics: (id) => {
    const url = `/lyric?id=${id}`;
    return axiosClient.get(url);
  },
  getHomePage: (id) => {
    const url = `/home?page=${id}`;
    return axiosClient.get(url);
  },
  getHome: (id) => {
    const url = `/home`;
    return axiosClient.get(url);
  },
  getAlbumDetails: (id) => {
    const url = `detailplaylist?id=${id}`;
    return axiosClient.get(url);
  },
};

export default songApi;
