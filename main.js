window.onload = () => {
  document.body.classList.remove("container");
  
  // Auto play music dengan berbagai metode fallback
  const music = document.getElementById('bgMusic');
  if (music) {
    music.volume = 0.3;
    
    // Coba play langsung
    const playPromise = music.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log('Music playing automatically');
      }).catch(error => {
        console.log('Autoplay prevented:', error);
        // Tampilkan pesan atau play saat user click
        document.body.addEventListener('click', () => {
          music.play().then(() => {
            console.log('Music started after user interaction');
          }).catch(err => {
            console.error('Failed to play music:', err);
          });
        }, { once: true });
      });
    }
  } else {
    console.error('Audio element not found. Make sure you!.mp3 exists in the same folder.');
  }
};