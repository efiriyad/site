import lottie from "lottie-web/build/player/lottie_light.min";

export const loadLottie = (container, file) => {
  // Lottie config instance
  const animation = lottie.loadAnimation({
    container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: `${window.location.origin}/animations/${file}.json`,
  });

  // Init animation
  animation.play();
};
