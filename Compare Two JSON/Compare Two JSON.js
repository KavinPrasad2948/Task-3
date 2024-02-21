const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
  const obj = JSON.parse(this.response);
  for (let i = 0; i < obj.length-1; i++) {
    if (JSON.stringify(obj[i]) === JSON.stringify(obj[i+1])) {
      console.log(obj[i]);
    }
  }
}
