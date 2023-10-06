const wait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
//     setTimeout(()=> reject("Rejected"), 5000);
  });
};

export default wait;
