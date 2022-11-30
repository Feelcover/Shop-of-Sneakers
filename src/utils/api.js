import axios from "axios";

export const Api = {
  url: "https://6373698a348e9472990bb74f.mockapi.io"
};

export const getItems = async (setFunc) => {
  await axios.get(`${Api.url}/Items`)
  .then((res) => {
     setFunc(res.data)
  })
  .catch(function (error) {
    console.log(error);
  })
};


export const getBasketItems = async (setFunc) => {
  await axios.get(`${Api.url}/Basket`)
    .then((res) => {
       setFunc(res.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  };


  export const getFavorites = async (setFunc) => {
    await axios.get(`${Api.url}/Favorites`)
    .then((res) => {
       setFunc(res.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  };


  export const postAddBasketItems = async (item) => {
    await axios.post(`${Api.url}/Basket`, item)
    .then(function (res) {
      console.log(res.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  export const postDeleteBasketItems = async (id) => {
    await axios.delete(`${Api.url}/Basket/${id}`)
    .then(function (res) {
      console.log(res.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  export const postAddInFavorite = async (item) => {
    await axios.post(`${Api.url}/Favorites`, item)
    .then(function (res) {
      console.log(res.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  export const postDeleteInFavorites = async (id) => {
    await axios.delete(`${Api.url}/Favorites/${id}`)
    .then(function (res) {
      console.log(res.statusText);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  export const allGet = async (setBasketItems, setFavorites, setItems) => {
    await getBasketItems(setBasketItems);
    await getFavorites(setFavorites);
    await getItems(setItems);
  }