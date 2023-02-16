<script>
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";

// Look at this: https://www.hacksoft.io/blog/google-oauth2-with-django-react-part-2
const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_CLIENT_ID =
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

///////////////Donut chart////////////////
export default {
  data() {
    return {
      shown: "shown",
      googleLoginUrl: finalUrl,
      // axios
      info: "",

      // apexchart
      series: [],
      options: {},
    };
  },
  methods: {
    async updateChart() {
      axios.get("http://localhost:8000/chart/").then((response) => {
        this.info = response.data;
        this.shown = "hidden";

        this.series = response.data.series;
        // must update outermost options to make changes of chart
        this.options = {
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
            colors: response.data.colors,
          },
          colors: response.data.colors,
          labels: response.data.labels,
          title: {
            text: "",
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
      });
    },
  },
  components: {
    apexchart: VueApexCharts,
  },
  mounted() {
    this.updateChart();
  },
};
</script>
<template>
  <div class="call-out-row">
    <div class="call-out">
      <h1>Donut chart</h1>
      <div id="chart"></div>
      <div>
        <div id="loading">
          <img :class="shown" src="../assets/images/Sun-watch.gif" />
        </div>
        <apexchart
          v-if="shown == 'hidden'"
          ref="realtimeChart"
          width="380"
          type="donut"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
    </div>
    <div class="call-out">
      <h1>Column 1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <a id="googleLogin" :href="googleLoginUrl"
        ><img
          src="../assets/images/google_signin_buttons/web/2x/btn_google_signin_dark_normal_web@2x.png"
      /></a>
    </div>
    <div class="call-out">
      <div>
        <img src="../assets/images/logo.svg" width="100px" />
      </div>
      <h1>Info for chart from Django Rest Framework</h1>
      <p>
        {{ info }}
      </p>
    </div>
  </div>
</template>
<style>
.call-out-row {
  max-width: 1400px;
  margin: 40px auto 0 auto;
}

@media (min-width: 600px) {
  .call-out-row {
    display: flex;
    justify-content: space-between;
  }
}
.call-out {
  padding: 20px;
  margin-bottom: 20px;
  flex-basis: 33%;
  box-sizing: border-box;
}

.call-out:nth-child(1) {
  background-color: bisque;
}
.call-out:nth-child(2) {
  background-color: darkcyan;
}
.call-out:nth-child(3) {
  background-color: chocolate;
}

#loading {
  z-index: 100;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  flex-direction: column;
  display: flex;
}
#loading img {
  width: 200px;
  height: 200px;
}
.shown {
  display: flex;
}
.hidden {
  display: none;
}
</style>
