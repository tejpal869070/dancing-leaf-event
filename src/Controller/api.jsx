import axios from "axios";

var API_URL = "https://test.5xwin.in/";

export const HomePageData = async () => {
  try {
    const response = await axios.get(API_URL + "api/home");
    return response.data;
  } catch (error) {
    throw error;
  }
};
