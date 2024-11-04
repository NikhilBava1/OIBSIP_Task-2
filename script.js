const toggleButtons = document.querySelectorAll('.toggle-btn');
const toggleContents = document.querySelectorAll('.tog_content > div');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        toggleButtons.forEach(btn => {
            if (btn === button) {
                btn.classList.add('active'); // Add 'active' class to the clicked button
            } else {
                btn.classList.remove('active'); // Remove 'active' class from other buttons
            }
        });
        toggleContents.forEach(content => {
            if (content.classList.contains(target)) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
const contactLink = document.querySelector('.contact-link');
const aboutLink = document.querySelector('.about-link');
const serviceLink = document.querySelector('.service-links');
const about = document.querySelector('.about-me');
const service = document.querySelector('.footer-section.service-links');
const footerContact = document.querySelector('.footer-section.contact-info');

contactLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Smooth scroll to footer
    footerContact.scrollIntoView({
        behavior: 'smooth'
    });

    // Add box shadow to footer contact box for 2-3 seconds
    footerContact.classList.add('show-box-shadow');
    setTimeout(() => {
        footerContact.classList.remove('show-box-shadow');
    }, 3000); // 3000 milliseconds = 3 seconds
});
aboutLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Smooth scroll to footer
    about.scrollIntoView({
        behavior: 'smooth'
    });

    // Add box shadow to footer contact box for 2-3 seconds
    about.classList.add('show-box-shadow');
    setTimeout(() => {
        about.classList.remove('show-box-shadow');
    }, 3000); // 3000 milliseconds = 3 seconds
});
serviceLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Smooth scroll to footer
    service.scrollIntoView({
        behavior: 'smooth'
    });

    // Add box shadow to footer contact box for 2-3 seconds
    service.classList.add('show-box-shadow');
    setTimeout(() => {
        service.classList.remove('show-box-shadow');
    }, 3000); // 3000 milliseconds = 3 seconds
});

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(bar => {
        const skillLevel = bar.getAttribute("data-skill");
        bar.style.width = skillLevel;
    });
});


document.getElementById("dwnldbtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "Resume.pdf";
    link.download = "Nikhil_CV.pdf";
    link.click();
});