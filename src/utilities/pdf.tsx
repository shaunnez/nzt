import axios from "axios";

const pdfshift = (data) => {
  const url = data.source
    .replace(
      "https://insights.tourismnewzealand.com/int/mindsets-/?stage=Stage#/",
      "https://shaunnez.github.io/nzt/#/"
    )
    .replace("http://localhost:3000/#/", "https://shaunnez.github.io/nzt/#/")
    .replace(
      "http://localhost:3000/nzt#/",
      "https://shaunnez.github.io/nzt/#/"
    );
  return new Promise((resolve, reject) => {
    axios
      .request({
        method: "post",
        url: "https://api.pdfshift.io/v3/convert/pdf",
        responseType: "json",
        data: {
          source: url,
          zoom: 0.45,
          filename: "Tourism New Zealand Mindsets PDF.pdf",
          sandbox: false,
          margin: "62px",
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
        auth: { username: "api", password: "ebe3d5a4279343cab40f10324a25e6c8" },
      })
      .then(resolve)
      .catch((response) => {
        // Handle any error that might have occured
        reject(response);
      });
  });
};

export default pdfshift;
