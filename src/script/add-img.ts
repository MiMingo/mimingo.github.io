type Coordinate = { x: number; y: number };
function getRandomCoordinate(): Coordinate {
  return {
    x: Math.floor(Math.random() * window.innerWidth),
    y: Math.floor(Math.random() * window.innerHeight),
  };
}

type Image = {
  filename: string;
};

function getRandomImage(): Image {
  const filenames = [
    "bee-heart-tulip.png",
    "grass-1.png",
    "orange-tulip.png",
    "pink-petal.png",
    "worm-in-the-grass.png",
    "yellow-petal.png",
  ];
  const randomFilename =
    filenames[Math.floor(Math.random() * filenames.length)];
  return {
    filename: randomFilename,
  };
}

function paintRandomImage(): void {
  const canvas =
    document.getElementsByTagName("canvas")?.[0].getContext("2d") ?? null;
  if (!canvas) return;

  const image = getRandomImage();
  const htmlImage = new Image();
  htmlImage.src = `img/${image.filename}`;
  const coordinate = getRandomCoordinate();

  htmlImage.onload = () => {
    canvas.moveTo(0, 0);
    canvas.drawImage(htmlImage, coordinate.x, coordinate.y);
  };
}

function setupCanvas(): void {
  const canvas = document.getElementsByTagName("canvas")?.[0] ?? null;
  if (!canvas) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function onLoad(): void {
  setupCanvas();
  window.addEventListener("resize", setupCanvas);

  document
    .getElementById("painter")
    .addEventListener("click", () => paintRandomImage());
}
