const menu= document.querySelector('#mobile-menu')
const menuLinks= document.querySelector('.navbar__options');
const dateTimePicker = document.getElementById('date-time-picker');
const dateTimeDisplay = document.getElementById('date-time-display');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
})  

document.addEventListener('DOMContentLoaded', function() {
    function setupDatePicker(dateTimePickerId, dateTimeDisplayId) {
      const dateTimePicker = document.getElementById(dateTimePickerId);
      const dateTimeDisplay = document.getElementById(dateTimeDisplayId);
  
      // Set the default value and update display field
      const now = new Date();
      const formattedDate = now.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:MM
      dateTimePicker.value = formattedDate;
      dateTimeDisplay.value = now.toLocaleString(); // Display in readable format
  
      // Update display field when the hidden input changes
      dateTimePicker.addEventListener('change', function() {
        const value = this.value;
        dateTimeDisplay.value = value ? new Date(value).toLocaleString() : '';
      });
    }
  
    // Setup date pickers
    setupDatePicker('date-time-picker', 'date-time-display');
    setupDatePicker('date-time-picker-2', 'date-time-display-2');
  });

  // accordion js 

  document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        const header = accordion.querySelector(".accordion__header");
        const content = accordion.querySelector(".accordion__content");
        const openIcon = header.querySelector(".accordion__icon--open");
        const closeIcon = header.querySelector(".accordion__icon--close");

        header.addEventListener("click", () => {
            const isOpen = content && content.style.display === "block";

            // Close all other accordions if necessary
            accordions.forEach(acc => {
                const accContent = acc.querySelector(".accordion__content");
                const accOpenIcon = acc.querySelector(".accordion__icon--open");
                const accCloseIcon = acc.querySelector(".accordion__icon--close");
                if (accContent && acc !== accordion) {
                    accContent.style.display = "none";
                    accOpenIcon.style.display = "inline";
                    accCloseIcon.style.display = "none";
                }
            });

            // Toggle the current accordion
            if (content) {
                content.style.display = isOpen ? "none" : "block";
                openIcon.style.display = isOpen ? "inline" : "none";
                closeIcon.style.display = isOpen ? "none" : "inline";
            }
        });
    });
});

function updateImage() {
    const imgElement = document.getElementById('responsiveImage');
    if (window.innerWidth <= 768) {
      imgElement.src = './images/Rectangle.svg';
    } else {
      imgElement.src = './images/Rectangle.png';
    }
  }
  window.addEventListener('load', updateImage);
  window.addEventListener('resize', updateImage);