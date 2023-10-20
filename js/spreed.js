const resultsContainer = document.getElementById("results");
const loadingContainer = document.getElementById("loading");

const ipInfoUrl = "https://ipinfo.io?token=2bc4e4d26fc693";

function updateIPInfo() {
  loadingContainer.classList.remove("hidden");

  // fetch IP info
  fetch(ipInfoUrl)
    .then((res) => res.json())
    .then((data) => {
      resultsContainer.innerHTML += `
        
           <p class="mt-4">IP: ${data?.ip}</p>
            <p>City: ${data?.city}</p>
            <p>Region: ${data?.region}</p>
            <p>Country: ${data?.country}</p>
            <p>Location: ${data?.loc}</p>
            <p>Organization: ${data?.org}</p>
            <p>Postal: ${data?.postal}</p>
            <p>Timezone: ${data?.timezone}</p>
        
          `;
      loadingContainer.classList.add("hidden");
    });
}

updateIPInfo();
