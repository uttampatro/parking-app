import * as config from "../config/api";
import axios from "./axios";

const getAllUserList = async () => {
  try {
    const response = await axios.get(
      `${config.apiConfig.baseUrl}/v1/getUserList`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllUserListInGarage = async () => {
  try {
    const response = await axios.get(
      `${config.apiConfig.baseUrl}/v1/getUserListInGarage`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async ({ name, vehicleNumber }) => {
  try {
    const response = await axios.post(
      `${config.apiConfig.baseUrl}/v1/createUser`,
      {
        name: name,
        vehicleNumber: vehicleNumber,
      }
    );
    // console.log(response)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const removeUser = async (_id) => {
  try {
    const response = await axios.get(
      `${config.apiConfig.baseUrl}/v1/removeUser/${_id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUserList, getAllUserListInGarage, createUser, removeUser };
