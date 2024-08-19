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
    const bannerImage=document.getElementById('banner-image')
    if (window.innerWidth <= 968) {
      imgElement.src = './images/Rectangle.svg';
      bannerImage.src='./images/car cliped mob.svg'
    } else {
      imgElement.src = './images/Rectangle fon.svg';
      bannerImage.src='./images/banner org.svg'
    }
  }
  window.addEventListener('load', updateImage);
  window.addEventListener('resize', updateImage);

  document.addEventListener('DOMContentLoaded', function() {
    // Function to check if the screen is mobile-sized
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Only run this code on mobile devices
    if (isMobile()) {
        const pickupBtn = document.querySelector('.mobile-pickup');
        const dropoffBtn = document.querySelector('.mobile-dropoff');
        const dropoffLocation = document.querySelector('.dropoff-location');
        const pickupLocation = document.querySelector('.pickup-location');
        
        pickupBtn.classList.add('active');
        pickupBtn.style.opacity = '1';
        pickupBtn.style.textDecoration = 'underline';
        dropoffLocation.style.display = 'none';
        pickupLocation.style.display = 'block';

        function toggleActive(activeElement, inactiveElement) {
          activeElement.classList.add('active');
          activeElement.style.opacity = '1';
          activeElement.style.textDecoration = 'underline';

          // Remove styles from the inactive element
          inactiveElement.classList.remove('active');
          inactiveElement.style.opacity = '0.7'; 
          inactiveElement.style.textDecoration = 'none';
        }
        
        pickupBtn.addEventListener('click', function() {
            toggleActive(this, dropoffBtn);
            dropoffLocation.style.display = 'none';
            pickupLocation.style.display = 'block';
        });

        dropoffBtn.addEventListener('click', function() {
            toggleActive(this, pickupBtn);
            dropoffLocation.style.display = 'block';
            pickupLocation.style.display = 'block';
        });
    }

    // Listen for window resize events
    window.addEventListener('resize', function() {
        if (isMobile()) {
            // Re-initialize mobile menu if needed
        } else {
            // Reset any mobile-specific changes if needed
        }
    });
});





document.addEventListener("DOMContentLoaded", function() {
    const bookCarButton = document.querySelector(".book-car-btn");
    const mobileMenu = document.querySelector(".mobile__menu");

    bookCarButton.addEventListener("click", function() {
        // Toggle the display of the mobile menu
        if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
            mobileMenu.style.display = "block";
        } else {
            mobileMenu.style.display = "none";
        }
    });
});