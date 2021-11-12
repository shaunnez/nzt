import axios from "axios";

const pdfshift = (data) => {
  console.log(data.source);
  const url = data.source
    .replace(
      "https://insights.tourismnewzealand.com/int/mindsets-/?stage=Stage#/",
      "https://shaunnez.github.io/nzt/#/"
    )
    .replace("http://localhost:3000/#/", "https://shaunnez.github.io/nzt/#/");
  return new Promise((resolve, reject) => {
    axios
      .request({
        method: "post",
        url: "https://api.pdfshift.io/v3/convert/pdf",
        responseType: "json",
        data: {
          source: url,
          zoom: 0.5,
          filename: "Tourism New Zealand Mindsets PDF.pdf",
          sandbox: true,
          wait_for: function () {
            let hasFound = null;
            setInterval(() => {
              var ele = document.getElementById("where");
              if (ele) {
                hasFound = true;
              }
            }, 1000);
            return hasFound;
          },
        },
        auth: { username: "api", password: "96694d0dd73d4782a6e72056ee38b813" },
      })
      .then(resolve)
      .catch((response) => {
        // Handle any error that might have occured
        reject(response);
      });
  });
};

export default pdfshift;
