let url = "https://mdhbdrqhokhkpwvajvik.supabase.co/rest/v1/student_progress";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kaGJkcnFob2toa3B3dmFqdmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTQyMTcsImV4cCI6MjA4MDM3MDIxN30.5sjiMRuW3e_F17YtaC38XIVXGszjpCEHGsajCiiAzDI";

const form = document.getElementById("trackerForm");
const notesInput = document.getElementById("notes");
const statusSelect = document.getElementById("statusSelect");
const trackerStatus = document.getElementById("trackerStatus");
const trackerEntries = document.getElementById("trackerEntries");

//display previous entries on page load//
async function loadEntries() {
  try {
    const response = await fetch(`${url}?select=*`, {
      headers: {
        "apikey": apikey,
        "Authorization": `Bearer ${apikey}`,
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      const data = await response.json();
      trackerEntries.innerHTML = "";

      data
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // newest first
        .forEach(entry => {
          trackerEntries.innerHTML += `
            <div class="card mb-2">
              <div class="card-body">
                <p>${entry.notes}</p>
                <span class="badge ${entry.status === 'Completed' ? 'bg-success' : 'bg-warning'}">${entry.status}</span>
                <small class="text-muted d-block mt-1">${new Date(entry.created_at).toLocaleString()}</small>
              </div>
            </div>
          `;
        });

    } else {
      trackerStatus.textContent = "Failed to load entries.";
      trackerStatus.className = "mt-3 text-danger";
    }
  } catch (error) {
    trackerStatus.textContent = "Network error: " + error.message;
    trackerStatus.className = "mt-3 text-danger";
  }
}

// new tracker submission//
form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const notes = notesInput.value;
  const status = statusSelect.value;

  const trackerData = { notes, status };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "apikey": apikey,
        "Authorization": `Bearer ${apikey}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(trackerData)
    });

    if (response.ok) {
      trackerStatus.textContent = "Progress saved!";
      trackerStatus.className = "mt-3 text-success";
      form.reset();

      ///display entries on screen///

       trackerEntries.innerHTML = `
        <div class="card mb-2">
          <div class="card-body">
            <p>${notes}</p>
            <span class="badge ${status === 'Completed' ? 'bg-success' : 'bg-warning'}">${status}</span>
            <small class="text-muted d-block mt-1">${new Date().toLocaleString()}</small>
          </div>
        </div>
      ` + trackerEntries.innerHTML;

    } else {
      trackerStatus.textContent = "Failed to save progress.";
      trackerStatus.className = "mt-3 text-danger";
    }
  } catch (error) {
    trackerStatus.textContent = "Network error: " + error.message;
    trackerStatus.className = "mt-3 text-danger";
  }
});

loadEntries();
