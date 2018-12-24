function validation() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          alert("All required fields must be filled in and will be outlined in red.");
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
};

validation();
