// Look at this: https://www.hacksoft.io/blog/google-oauth2-with-django-react-part-2
const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
GOOGLE_CLIENT_ID =
  "638003113289-mtps7dnk9t6hk1v2f0rpn7mjikiif9kn.apps.googleusercontent.com";

const scope = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
  //"https://www.googleapis.com/auth/gmail.readonly",
].join(" ");

const params = {
  response_type: "code",
  client_id: `${GOOGLE_CLIENT_ID}`,
  redirect_uri: "http://localhost:8000/googleoauth/v1/auth/login/google/",
  prompt: "select_account", // consent screen type
  access_type: "offline",
  scope,
};

const urlParams = new URLSearchParams(params).toString();

const finalUrl = `${googleAuthUrl}?${urlParams}`;
// console.log(finalUrl);
document.getElementById("googleLogin").setAttribute("href", finalUrl);

///////////////Donut chart////////////////
function updateChart() {
  let xmlhttp = new XMLHttpRequest();
  let url = "http://localhost:8000/chart/";

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let resp = JSON.parse(this.responseText);
      drawChart(
        (colors = resp.colors),
        (series = resp.series),
        (labels = resp.labels)
      );
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function drawChart(colors = [], series = [], labels = []) {
  var options = {
    chart: {
      type: "donut",
    },
    labels: labels,
    colors: colors,
    dataLabels: {
      enabled: false, // do not show data percentage on chart
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
        },
      },
    },
    fill: {
      type: "gradient",
      colors: colors,
    },
    title: {
      text: "Gradient Donut Chart",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    stroke: {
      show: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();
}