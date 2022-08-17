import anime from "animejs";

export function animate() {
  const tl = anime.timeline({
    easing: "linear",
  });

  // Loop over all the elements with the class .animation-features-box-i.
  for (let i = 0; i < 4; i++) {
    tl.add({
      targets: `.animation-features-box-${i}`,
      opacity: [0, 1],
      scale: [0.75, 1],
      translateY: [5, 0],
      duration: 250,
      delay: 50,
    });
  }
}
