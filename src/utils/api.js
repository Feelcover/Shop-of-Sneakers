import axios from "axios";

export const getItems = setFunc => {
  axios.get("https://6373698a348e9472990bb74f.mockapi.io/Items")
  .then((res) => {
     setFunc(res.data)
  })
  .catch(function (error) {
    console.log(error);
  })
};

export const getBasketItems = setFunc => {
    axios.get("https://6373698a348e9472990bb74f.mockapi.io/Basket")
    .then((res) => {
       setFunc(res.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  };
