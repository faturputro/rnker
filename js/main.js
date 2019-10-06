$(document).ready(function() {
  const tl = new TimelineLite();

  const timeline = new TimelineLite();
  timeline
    .to('.img-logo', 1, {
      opacity: 1,
      delay:0.6,
      ease: Power4.easeIn
  })
  .to('.img-logo', 1.4, {
    yPercent: -80,
    scaleX: 0.8,
    scaleY: 0.8,
    ease: Expo.easeInOut
  })
  .to('.header', 1, {
      opacity: 1,
  },'-=0.4');

});