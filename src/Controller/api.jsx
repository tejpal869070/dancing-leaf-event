import axios from "axios";

var API_URL = "http://192.168.1.5:4999/";

export const HomePageData = async () => {
  try {
    const response = await axios.get(API_URL + "api/home");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ContactUs = async (formData) => {
  try {
    const response = await axios.post(API_URL + "user/add-contact-us", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
