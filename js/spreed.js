const ctx = document.getElementById("speedChart").getContext("2d");
const currentSpeedElement = document.getElementById("currentSpeed");
const averageSpeedElement = document.getElementById("averageSpeed");

const config = {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Download Speed (Mbps)",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Upload Speed (Mbps)",
        data: [],
        borderColor: "rgba(192, 75, 192, 1)",
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        beginAtZero: true,
        display: true,
        title: {
          display: true,
          text: "Speed (Mbps)",
        },
      },
    },
  },
};

const speedChart = new Chart(ctx, config);

let time = 0;
let totalDownloadSpeed = 0;
let totalUploadSpeed = 0;
let dataPoints = 0;

setInterval(() => {
  time += 5;
  const downloadSpeed = Math.random() * 100;
  const uploadSpeed = Math.random() * 100;

  config.data.labels.push(time.toString());
  config.data.datasets[0].data.push(downloadSpeed);
  config.data.datasets[1].data.push(uploadSpeed);

  // Keep a maximum of 20 data points
  if (config.data.labels.length > 20) {
    config.data.labels.shift();
    config.data.datasets[0].data.shift();
    config.data.datasets[1].data.shift();
  }

  speedChart.update();

  // Calculate average speed
  totalDownloadSpeed += downloadSpeed;
  totalUploadSpeed += uploadSpeed;
  dataPoints++;

  const averageDownloadSpeed = totalDownloadSpeed / dataPoints;
  const averageUploadSpeed = totalUploadSpeed / dataPoints;

  currentSpeedElement.textContent = `Current Download Speed: ${downloadSpeed.toFixed(
    2
  )} Mbps, Upload Speed: ${uploadSpeed.toFixed(2)} Mbps`;
  averageSpeedElement.textContent = `Average Download Speed: ${averageDownloadSpeed.toFixed(
    2
  )} Mbps, Average Upload Speed: ${averageUploadSpeed.toFixed(2)} Mbps`;
}, 5000);
