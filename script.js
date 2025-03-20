
        AOS.init();

        // Function to show the clicked section and hide the others
        function showSection(sectionId) {
            // Hide all sections
            let sections = document.querySelectorAll('.section-container');
            sections.forEach(function(section) {
                section.classList.remove('active');
            });

            // Show the clicked section
            let activeSection = document.getElementById(sectionId);
            activeSection.classList.add('active');

            // Refresh AOS animations for the new active section
            AOS.refresh();
        }
        let menu = document.querySelector('#menu');
        let navbar = document.querySelector('.links')
    
        menu.onclick = () =>{
            menu.classList.toggle('fa-times')
            navbar.classList.toggle('active')
        }