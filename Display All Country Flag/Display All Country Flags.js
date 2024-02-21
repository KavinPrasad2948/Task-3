const req = new XMLHttpRequest();
//req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
  let Obj = JSON.parse(this.response);
  for (let i = 0;i< Obj.length;i++) {
    console.log(Obj[i].flags.png);
 }
}

