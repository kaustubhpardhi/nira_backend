const merchantKey = "vT11bhGTmZHslsUNYl1Mh9H/wMuuKww/Mo7gaoe8YBg=";
const Receipt = require("../models/receiptModel");

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
    const pawatiNumber = req.query.pawti;
    Receipt.findOne({ pawatiNumber: pawatiNumber }, (error, receipt) => {
      if (error) {
        res.send(error);
      } else {
        res.send(`
          <div
            class="pdfBody"
            style="
              padding-top: 4px;
              padding-left: 6px;
              background: rgb(255, 255, 153);
              border: 1px solid black;
              width: auto;
            "
          >
            <h5
              style="
                color: #8c2d29;
                font-weight: 700;
                text-align: center;
                margin-top: 3px;
                font-size:30px;
              "
            >
              Shri Laxmi Narasinha Deosthan Trust Nira Narasingpur
            </h5>
            <div
              class="printFlex"
              style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3px"
            >
              <div>
              <img src="https://drive.google.com/thumbnail?id=1x1gyir0VHW018wd8Mfwa6zsHsm6EmqxW" alt="GodImage" width="320" height="300" />
                <p class="pdfAmount" style="font-size: 24px; text-align: center">
                  <b>Amount :₹${receipt.amount} </b> 
                </p>
              </div>
              <div>
                <table style="text-align: left" class="pdfTable">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>${receipt.Name}</td>
                    </tr>
                    <tr>
                      <th>Mobile</th>
                      <td>${receipt.mobileNumber}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>${receipt.email}</td>
                    </tr>
                    <tr>
                      <th>Receipt No</th>
                      <td>${receipt.pawatiNumber}</td>
                    </tr>
                    <tr>
                      <th>Receipt Date</th>
                      <td>${receipt.receiptDate}</td>
                    </tr>
                    <tr>
                    <th>Gotra</th>
                    <td>${receipt.gotra}</td>
                  </tr>
                  <tr>
                  <th>Purpose</th>
                  <td>${receipt.purpose}</td>
                </tr>
                
                  </tbody>
                </table>
              </div>
            </div>
            <div class="pdfBottom" style="display: grid; grid-template-columns: 2fr 1fr; gap: 1; align-items: center; padding-top: 10px">
  <div class="pdfBottomFirst" style="text-align: center">
    Donations to the trust are exempt u/s 80G of the Income Tax Act
    <br />
    Nira Narsinhpur, Indapur Thaluka, Maharashtra 413211
  </div>
  <div class="pdfBottomSecond" style="display: flex">
    <div style="margin-left: auto">
      <img
        class="pdfBottomImg"
        src=" https://drive.google.com/thumbnail?id=17W8x7xDGew0VYuMU3k_sQqyhCbdqXx38"
        style="max-width: 150px; display: block; margin-left: auto; margin-bottom: 16px"
        alt=""
      />
  
    </div>
  </div>
</div>

          </div>
        `);
      }
    });

    console.log(data.txn_response);
  },
};

module.exports = transactionController;
