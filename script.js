



// Function to handle smooth scrolling
// function smoothScroll(target) {
//     const element = document.querySelectorAll('.bagian');
//     if (element) {
//         window.scrollTo({
//         top: element.offsetTop,
//         behavior: 'smooth'
//         });
//     }
//     }
    
//   // Smooth scroll when a navigation link is clicked
//   const navLinks = document.querySelectorAll('.bagian');
//   navLinks.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//       event.preventDefault();
//       const target = link.getAttribute('href');
//       smoothScroll(target);
//     });
//   });


  // Update active link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.bagian');

    sections.forEach(function(section, index) {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute('id');
        const detectionMargin = -50;

        // if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        if (rect.top - detectionMargin >= 0 && rect.bottom + detectionMargin <= window.innerHeight) {
        navLinks.forEach(function(link) {
            link.classList.remove('btn-active', 'bg-[#66C8FF]', 'text-white');
        });
        const activeLink = document.querySelector(`.bagian[href="#${sectionId}"]`);
        // const activeLink = document.querySelector(`.bagian[href="#${sectionId.toLowerCase()}"]`);
        if (activeLink) {
            activeLink.classList.add('btn-active', 'bg-[#66C8FF]', 'text-white');
        }
        } else {
        const activeLink = document.querySelector(`.bagian[href="#${sectionId}"]`);
        // const activeLink = document.querySelector(`.bagian[href="#${sectionId.toLowerCase()}"]`);
        if (activeLink) {
            activeLink.classList.remove('btn-active', 'bg-[#66C8FF]', 'text-white');
        }
        }
    });
});
