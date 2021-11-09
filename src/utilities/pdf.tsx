import axios from "axios";

const pdfshift = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .request({
        method: "post",
        url: "https://api.pdfshift.io/v3/convert/pdf",
        responseType: "json",
        data: {
          ...data,
          zoom: 0.5,
          filename: "Tourism New Zealand Mindsets PDF.pdf",
          sandbox: true,
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
