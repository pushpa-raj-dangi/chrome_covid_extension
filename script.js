if (navigator.onLine) {
  fetch("https://api.covid19api.com/total/country/nepal")
    .then((response) => response.json())
    .then((data) => {
      data = data.reverse();

      document.getElementById("active").innerText = data[0].Active;
      document.getElementById("confirmed").innerText = data[0].Confirmed;
      document.getElementById("recover").innerText = data[0].Recovered;
      document.getElementById("deaths").innerText = data[0].Deaths;

      console.log(data);
    });
} else {
  document.getElementById("content").innerHTML =
    "<br/><br/>No Internet Connection<br/><br/>";
}