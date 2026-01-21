let url = "https://mdhbdrqhokhkpwvajvik.supabase.co/rest/v1/codex_courses"
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kaGJkcnFob2toa3B3dmFqdmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTQyMTcsImV4cCI6MjA4MDM3MDIxN30.5sjiMRuW3e_F17YtaC38XIVXGszjpCEHGsajCiiAzDI"

const container = document.getElementById("coursesContainer");

// load or add courses from supabase //
async function loadCourses() {
  const response = await fetch(`${url}?select=*`, {
    headers: {
      "apikey": apikey,
      "Authorization": `Bearer ${apikey}`,
      "Content-Type": "application/json"
    }
  });

  const courses = await response.json();
  container.innerHTML = "";

  courses.forEach(course => {
    container.innerHTML += `
      <div class="col-12 col-md-8 col-lg-6">
        <div class="card shadow-sm rounded-3 course-card">
          <img src="${course.image_url}" class="card-img-top rounded-top" alt="${course.name}" />
          <div class="card-body">
            <h5 class="card-title">${course.name}</h5>
            <p class="card-text">${course.description}</p>
            <p class="fw-semibold mb-0">
              Duration: <span class="text-muted">${course.duration}</span>
            </p>
          </div>
        </div>
      </div>
    `;
  });
}

// call function on page load //
loadCourses();
