const merchantKey = "vT11bhGTmZHslsUNYl1Mh9H/wMuuKww/Mo7gaoe8YBg=";

const transactionController = {
  successfulTransaction: async (req, res) => {
    function decrypt(text, skey) {
      var base64Iv = "0123456789abcdef";
      var key = CryptoJS.enc.Base64.parse(skey);
      var iv = CryptoJS.enc.Utf8.parse(base64Iv);
      var decrypted = CryptoJS.AES.decrypt(text, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      var decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
      return decryptedData;
    }
    // const {
    //   txn_response,
    //   me_id,
    //   pg_details,
    //   fraud_details,
    //   other_details,
    //   qr_img,
    //   qr_expiration_time,
    //   cps_url,
    //   qr_img_src,
    // } = req.body;
    const data = req.body;
    // const response = decrypt(data.txn_response, merchantKey);
    // console.log(response);
    // res.sendFile(__dirname + "/index.html");
    console.log(data.txn_response);
  },
};

module.exports = transactionController;
