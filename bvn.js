let bvns = ["7128217328", "12328423912"];

const bvn = (payload) => {
  const checkBVN = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bvns.includes(payload)) {
        resolve("happy");
      }
    }, 4800);
  });
  return checkBVN;

  // if (bvn.length == "") {
  //   setTimeout(() => {
  //     return JSON.stringify({
  //       Message:
  //         "One or more of your request parameters failed validation. Please retry",
  //       Code: 400,
  //     });
  //   }, 1000);
  // }
};

module.exports = bvn;
