console.clear();

const winHtml = `<!DOCTYPE html>
    <script>
      console.clear();

      amount = 0

      function print(ctx) {
        console.log(ctx);
      }

      function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
                                                 charactersLength));
        }
        return result;
      }

      function openurl() {
        ranurl = makeid(8);
          url = "https://www.bing.com/search?q=" + ranurl + "&PC=U316&FORM=CHROMN"
          window.open(url, "_self");
        print(url);
      }

      function spam() {
        amount = document.getElementById("amount").value;
        for (let i = 0; i < amount; i++) {
          print("spamming " + amount + "of pages");
          openurl();
        }
        window.close();
      }
      
    </script>

    <html>
        <head>
            <title>Bing Spammer</title>
        </head>
        <body>
            <input type="number" id="amount"></input>
            <button onclick="spam();">spam!</button>
        </body>
    </html>`;

const winUrl = URL.createObjectURL(
    new Blob([winHtml], { type: "text/html" })
);

const asd = window.open(
    winUrl,
    "win",
    `width=800,height=400,screenX=200,screenY=200`
);
