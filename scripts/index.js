// Navbar
function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  //Link to a <div> in index.html
  $("#about-me").click(function() {
    $('/index.html').animate({
      scrollTop: $(window.location.hash).offset().top // Target hash not div
    }, 0);
  });