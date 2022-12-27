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
    //res.send("hey");
    // res.sendFile(__dirname + "/index.html");
    res.send(`<div
    class="pdfBody"
    style="
      padding-top: 4px;
      padding-left: 6px;
      background: rgb(255, 255, 153);
      border: 1px solid black;
      width: 50%;
    "
  >
    <h5
      style="
        color: #8c2d29;
        font-weight: 700;
        text-align: center;
        margin-top: 3px;
      "
    >
      Shri Laxmi Narasinha Deosthan Trust Nira Narasingpur
    </h5>
    <div
      class="printFlex"
      style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3px"
    >
      <div>
        <img src="https://1.bp.blogspot.com/-1rsyOzHMnnU/T8n7SCglQFI/AAAAAAAAAGE/e3SfCdEibIc/s640/murti.jpg" alt="GodImage" />
        <p class="pdfAmount" style="font-size: 24px; text-align: center">
          <b>Amount : </b> &#x20B9;
        </p>
      </div>
      <div>
        <table style="text-align: left" class="pdfTable">
          <tbody>
            <tr>
              <th>Receipt No</th>
              <td>:</td>
            </tr>
            <tr>
              <th>Receipt Date</th>
              <td>:</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>${req.params.fName}</td>
            </tr>
            <tr>
              <th>Gotra</th>
              <td>:</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>:</td>
            </tr>
            <tr>
              <th>State</th>
              <td>:</td>
            </tr>
            <tr>
              <th>Mobile</th>
              <td>:</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>:</td>
            </tr>
            <tr>
              <th>PAN</th>
              <td>:</td>
            </tr>
            <tr>
              <th>Aadhar</th>
              <td>:</td>
            </tr>
            <tr>
              <th>Purpose</th>
              <td>:</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `);
    console.log(data.txn_response);
  },
};

module.exports = transactionController;
