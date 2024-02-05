document.addEventListener('DOMContentLoaded', function() {
    const scrollUpBtn = document.getElementById('scrollUpBtn');
  
    // Pokaż przycisk scroll up, gdy użytkownik przewinie stronę w dół
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) { // Możesz dostosować wartość, aby przycisk pokazywał się po przewinięciu strony na odpowiednią odległość
        scrollUpBtn.classList.add('show');
      } else {
        scrollUpBtn.classList.remove('show');
      }
    });
  
    // Przewiń stronę do góry po kliknięciu przycisku scroll up
    scrollUpBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Jeśli chcesz płynne przewijanie, użyj 'smooth', w przeciwnym razie użyj 'auto' lub zostaw puste
      });
    });
  });
  