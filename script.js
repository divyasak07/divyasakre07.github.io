// =============================
// MOBILE NAVIGATION
// =============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});

// Close menu after clicking a link

navLinks.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});

// =============================
// PROJECT FILTERS
// =============================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    // Remove active from all buttons
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    // Add active to clicked button
    button.classList.add("active");

    const selectedFilter = button.dataset.filter;

    // Show or hide project cards
    projectCards.forEach(card => {

      const category = card.dataset.category;

      if (
        selectedFilter === "all" ||
        category === selectedFilter
      ) {

        card.classList.remove("hidden");

      } else {

        card.classList.add("hidden");

      }

    });

  });

});

// =============================
// SCROLL REVEAL ANIMATION
// =============================

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach(item => {

    observer.observe(item);

  });

} else {

  revealItems.forEach(item => {

    item.classList.add("visible");

  });

}

// =============================
// AUTOMATIC FOOTER YEAR
// =============================

document.getElementById("year").textContent =
  new Date().getFullYear();