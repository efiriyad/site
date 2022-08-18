import anime from "animejs";

export function animate() {
  anime({
    targets: ".animation-logo",
    keyframes: [
      { rotate: 90, duration: 2000, delay: 500 },
      { rotate: 180, duration: 2000, delay: 500 },
      { rotate: 270, duration: 2000, delay: 500 },
      { rotate: 360, duration: 2000, delay: 500 },
    ],
    easing: "cubicBezier(0.98, 0.02, 0.56, 1.41)",
    loop: true,
  });
}
