document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll("nav ul li a");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(e) {
            e.preventDefault();

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Add active class to the clicked tab and corresponding content
            this.classList.add("active");
            const target = this.getAttribute("href");
            document.querySelector(target).classList.add("active");
        });
    });
});