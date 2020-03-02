(function() {
  let columns = document.querySelectorAll('.col');
  columns.forEach(column => {
    $('.col').matchHeight(); // Damn, need to use Jquery selector as plain JS throws an error during testing.
  });
})();