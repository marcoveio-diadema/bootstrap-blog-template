window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;

    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})


// SHOW / HIDE CONTAINERS ON USER PAGE
$(document).ready(function() {
    // Initially hide update profite container
    $("#update-profile").hide();
  
    // Attach a click event to the sidebar links
    $("#edit-profile").click(function(e) {
      
        e.preventDefault(); // Prevent the default link behavior
       
        $('#update-profile').show(); // show container once button is clicked on
      
    });
  });