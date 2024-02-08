// document.addEventListener('DOMContentLoaded', function() {
//     const slider = document.querySelector('.slider');
//     const slideContainer = document.querySelector('.slide-container');
//     const slides = document.querySelectorAll('.slide');
//     const prevBtn = document.querySelector('.prev');
//     const nextBtn = document.querySelector('.next');
  
//     let currentIndex = 0;
//     const slideWidth = slides[0].offsetWidth;
  
//     // Ustawienie szerokości kontenera na podstawie liczby slajdów
//     slideContainer.style.width = `${slides.length * slideWidth}px`;
  
//     // Funkcja przewijania slajdów
//     function slide(direction) {
//       if (direction === 'prev') {
//         currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
//       } else {
//         currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
//       }
  
//       // Dodanie klasy active do aktualnego slajdu i usunięcie jej z pozostałych slajdów
//       slides.forEach((slide, index) => {
//         if (index === currentIndex) {
//           slide.classList.add('active');
//         } else {
//           slide.classList.remove('active');
//         }
//       });
//     }
  
//     // Uruchomienie automatycznego przewijania co 3 sekundy
//     const intervalId = setInterval(() => slide('next'), 3000);
  
//     // Obsługa przycisków
//     prevBtn.addEventListener('click', () => {
//       clearInterval(intervalId);
//       slide('prev');
//     });
  
//     nextBtn.addEventListener('click', () => {
//       clearInterval(intervalId);
//       slide('next');
//     });
//   });
  
// Pobieramy element message-slider
const messageSlider = document.getElementById('messageSlider');

// Zmienna przechowująca aktualną pozycję przewijania
let scrollPosition = 0;

// Funkcja przewijania wiadomości
function scrollMessages(timestamp) {
    // Aktualizujemy pozycję przewijania
    scrollPosition -= 1; // Możesz dostosować szybkość przewijania zmieniając wartość

    // Przewijamy wiadomość na podstawie aktualnej pozycji
    messageSlider.style.transform = `translateX(${scrollPosition}px)`;

    // Jeśli przewinęliśmy całą szerokość wiadomości, resetujemy pozycję przewijania
    if (scrollPosition <= -messageSlider.offsetWidth) {
        scrollPosition = 0;
    }

    // Ponownie wywołujemy funkcję scrollMessages przy użyciu requestAnimationFrame
    requestAnimationFrame(scrollMessages);
}

// Wywołujemy funkcję scrollMessages, aby rozpocząć płynne przewijanie wiadomości
scrollMessages();
