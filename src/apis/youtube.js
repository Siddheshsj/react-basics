import axios from "axios";

const KEY = "AIzaSyDVz4C8U4PjZBI0qK8CH_YCc-xHjIse5Cg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
