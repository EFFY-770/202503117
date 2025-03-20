function setup() {
  createCanvas(windowWidth, windowHeight);
  clear(); // 設置透明背景
}

function draw() {
  clear(); // 每次重繪時保持透明背景

  // 設定顏色，增加透明度
  let colors = ["rgba(112, 214, 255, 0.3)", "rgba(255, 112, 166, 0.3)", "rgba(255, 151, 112, 0.3)", "rgba(255, 214, 112, 0.3)", "rgba(233, 255, 112, 0.3)"];

  for (let i = 0; i < 20; i++) {
    let baseX = (i + 1) * (windowWidth / 15); // 增加間距
    let baseY = windowHeight;
    let amplitude = 50; // 搖動幅度
    let frequency = 0.01; // 搖動頻率，稍微快一點

    stroke(colors[i % colors.length]);
    strokeWeight(50); // 增加線條寬度為 50px

    let prevX = baseX;
    let prevY = baseY;
    for (let j = 0; j <= 20; j++) {
      let x = baseX + sin(frameCount * frequency + j * 0.5) * amplitude;
      let y = baseY - j * 15; // 長度
      line(prevX, prevY, x, y);
      prevX = x;
      prevY = y;
    }
  }
}

function mousePressed() {
  redraw(); // 當滑鼠按下時重新繪製畫面
}