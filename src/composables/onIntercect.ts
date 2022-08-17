export const onIntersect = (
  elementToWatch: HTMLElement,
  threshold: number,
  callback: Function,
  outCallback: Function = () => {},
  once = true
) => {
  // Initiate the observer
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        callback(entry.target);

        // If the callback should only run once, unobserve the element
        if (once) {
          observer.unobserve(entry.target);
        }
      }

      // If the element is not intersecting, run the (optional) unintersecting callback
      else {
        outCallback(entry.target);
      }
    },
    { threshold }
  );

  // Observe the element
  observer.observe(elementToWatch);
  return observer;
};
