document.addEventListener('DOMContentLoaded', function() {
    var imageItems = document.querySelectorAll('.image-list_item');
  
    imageItems.forEach(function(item) {
      item.addEventListener('click', function() {
        if (this.classList.contains('clicked')) {
          this.classList.remove('clicked');
        } else {
          // Usuń klasę 'clicked' ze wszystkich elementów
          imageItems.forEach(function(el) {
            el.classList.remove('clicked');
          });
         
          this.classList.add('clicked');
        }
      });
    });
  });
  