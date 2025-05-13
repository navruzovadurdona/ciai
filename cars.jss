<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Car Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>🚗 Car Game</h1>
  <div class="road">
    <div class="car"></div>
  </div>

  <!-- Звук -->
  <audio id="engineSound" src="engine.mp3" preload="auto"></audio>

  <script>
    // Воспроизведение звука при загрузке страницы
    const sound = document.getElementById("engineSound");
    sound.volume = 0.5;
    window.addEventListener('click', () => {
      sound.play();
    });

    // Движение машины по стрелкам
    const car = document.querySelector('.car');
    let position = 150;

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' && position > 0) {
        position -= 10;
        car.style.left = position + 'px';
      } else if (e.key === 'ArrowRight' && position < 300) {
        position += 10;
        car.style.left = position + 'px';
      }
    });
    
  </script>
</body>
</html>

