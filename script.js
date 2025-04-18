document.addEventListener('DOMContentLoaded', function() {
    // Select all filter buttons and family items
    const filterBtns = document.querySelectorAll('.filter-btn');
    const groomFamilyItem = document.querySelector('.family-item[data-target="groomsfamily"]');
    const brideFamilyItem = document.querySelector('.family-item[data-target="bridesfamily"]');

    // Add click event listener to each button
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            btn.classList.add('active');

            // Get the target data attribute of the clicked button
            const target = btn.getAttribute('data-target');

            // Toggle visibility based on selection
            if (target === 'bridesfamily') {
                groomFamilyItem.style.display = 'none';
                brideFamilyItem.style.display = 'block';
            } else {
                groomFamilyItem.style.display = 'block';
                brideFamilyItem.style.display = 'none';
            }
        });
    });

    // Ensure groom's family is shown by default
    groomFamilyItem.style.display = 'block';
    brideFamilyItem.style.display = 'none';
});
// toggle button
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('navToggleBtn').addEventListener('click', function() {
            document.querySelector('.nav').classList.toggle('show');
        });
    });
const navToggle = document.querySelector('.nav-toggle');

// time duration

 function updateMarriageTime() {
      const marriageDate = new Date("2024-09-16T07:12:00");
      const now = new Date();
      
      let diff = now - marriageDate;

      if (diff < 0) {
        document.getElementById("marriage-time").textContent = "Our wedding is yet to happen!";
        return;
      }

      let years = now.getFullYear() - marriageDate.getFullYear();
      let months = now.getMonth() - marriageDate.getMonth();
      let days = now.getDate() - marriageDate.getDate();
      let hours = now.getHours() - marriageDate.getHours();
      let minutes = now.getMinutes() - marriageDate.getMinutes();
      let seconds = now.getSeconds() - marriageDate.getSeconds();

      if (seconds < 0) { seconds += 60; minutes--; }
      if (minutes < 0) { minutes += 60; hours--; }
      if (hours < 0) { hours += 24; days--; }
      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      document.getElementById("marriage-time").textContent =
        `${years} year(s), ${months} month(s), ${days} day(s), ` +
        `${hours} hour(s), ${minutes} minute(s), ${seconds} second(s)`;
    }

    setInterval(updateMarriageTime, 1000);
    updateMarriageTime(); // Initial call


