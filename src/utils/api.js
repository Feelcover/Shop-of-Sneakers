import axios from "axios";

export const Api = {
  url: "https://6373698a348e9472990bb74f.mockapi.io"
};

export const getItems = (setFunc) => {
  axios.get(`${Api.url}/Items`)
  .then((res) => {
     setFunc(res.data)
  })
  .catch(function (error) {
    console.log(error);
  })
};


export const getBasketItems = (setFunc) => {
    axios.get(`${Api.url}/Basket`)
    .then((res) => {
       setFunc(res.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  };


  export const getFavorites = (setFunc) => {
    axios.get(`${Api.url}/Favorites`)
    .then((res) => {
       setFunc(res.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  };


  export const postAddBasketItems = (item) => {
    axios.post(`${Api.url}/Basket`, item)
    .then(function (res) {
      console.log(res.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  export const postDeleteBasketItems = (id) => {
    axios.delete(`${Api.url}/Basket/${id}`)
    .then(function (res) {
      console.log(res.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  export const postAddInFavorite = (item) => {
    axios.post(`${Api.url}/Favorites`, item)
    .then(function (res) {
      console.log(res.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  export const postDeleteInFavorites = (id) => {
    axios.delete(`${Api.url}/Favorites/${id}`)
    .then(function (res) {
      console.log(res.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
  }