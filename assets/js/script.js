function showSection(section) {
  // Remove active class from all nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to clicked link
  event.target.closest(".nav-link").classList.add("active");

  // Here you would typically load different content based on the section
  console.log("Navigating to:", section);
}

// Add some interactive features
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effects to table rows
  const tableRows = document.querySelectorAll("tbody tr");
  tableRows.forEach((row) => {
    row.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#f8f9fa";
    });
    row.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "";
    });
  });

  // Add click handlers for notification and add pet buttons
  document
    .querySelector(".fa-bell")
    .parentElement.addEventListener("click", function () {
      alert("No new notifications");
    });

  document.querySelector(".btn-primary").addEventListener("click", function () {
    alert("Add Pet feature would open here");
  });
});

// Responsive sidebar toggle for mobile
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("show");
}

// Add mobile menu button if needed
if (window.innerWidth <= 768) {
  const header = document.querySelector(".header-section .row");
  const menuButton = document.createElement("button");
  menuButton.className = "btn btn-light d-md-none";
  menuButton.innerHTML = '<i class="fas fa-bars"></i>';
  menuButton.onclick = toggleSidebar;
  header.querySelector(".col-md-4").prepend(menuButton);
}



/* COMMUNITY SCREEN SCRIPT */
function showSection(section) {
  // Remove active class from all nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to clicked link
  event.target.closest(".nav-link").classList.add("active");

  // Hide all content sections
  document.getElementById("dashboard-content").classList.add("d-none");
  document.getElementById("profile-content").classList.add("d-none");

  // Show selected section
  if (section === "dashboard") {
    document.getElementById("dashboard-content").classList.remove("d-none");
  } else if (section === "profile") {
    document.getElementById("profile-content").classList.remove("d-none");
  }

  console.log("Navigating to:", section);
}

// Add some interactive features
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effects to table rows
  const tableRows = document.querySelectorAll("tbody tr");
  tableRows.forEach((row) => {
    row.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#f8f9fa";
    });
    row.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "";
    });
  });

  // Add click handlers for Q&A items
  document.querySelectorAll(".qa-item .border").forEach((item) => {
    item.addEventListener("click", function () {
      const question = this.querySelector(".qa-question h6").textContent;
      alert(`Opening discussion: ${question}`);
    });
  });

  // Add click handler for New Post button
  document.getElementById("newPostBtn").addEventListener("click", function () {
    alert("Create New Post feature would open here");
  });
});

// Responsive sidebar toggle for mobile
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("show");
}

// Add mobile menu button if needed
if (window.innerWidth <= 768) {
  const header = document.querySelector(".header-section .row");
  const menuButton = document.createElement("button");
  menuButton.className = "btn btn-light d-md-none";
  menuButton.innerHTML = '<i class="fas fa-bars"></i>';
  menuButton.onclick = toggleSidebar;
  header.querySelector(".col-md-4").prepend(menuButton);
}