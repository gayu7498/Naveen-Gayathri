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


