// getting cart items from localstorage

const getMyCart = async () => {
  const cart = localStorage.getItem("react-use-cart");
  return cart ? JSON.parse(cart) : [];
};

const Services = {
  getMyCart,
};

export default Services;
