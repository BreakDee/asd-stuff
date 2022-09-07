function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
  }

function openurl() {
  url = makeid(8)
  window.open("https://www.bing.com/search?q=" + url + "&PC=U316&FORM=CHROMN", "_blank");
  print(url)
}

let amount = prompt("Amount", "Amount");
let text;

if (amount == null || amount == "") {
  amount = 0;
} else {
  
  for (let i = 0; i < amount; i++) {
    openurl()
    
  }
}
