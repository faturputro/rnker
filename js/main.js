$(document).ready(function() {
  const tl = new TimelineLite();

  const timeline = new TimelineLite();
  timeline
    .to(".img-logo", 1, {
      opacity: 1,
      delay: 0.6,
      ease: Power4.easeIn
    })
    .to(".img-logo", 1.4, {
      yPercent: -50,
      scaleX: 0.7,
      scaleY: 0.7,
      ease: Expo.easeInOut
    })
    .to(
      ".header",
      1.4,
      {
        opacity: 1,
        ease: Power4.easeIn,
      },
      "-=1.2"
    );

  particlesJS("particles-js", {
    particles: {
      number: { value: 53, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 1, color: "#000000" },
        polygon: { nb_sides: 4 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.2725800503471389,
        random: false,
        anim: {
          enable: false,
          speed: 0.3248308849205381,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.3687847739990702,
        width: 0.9620472365193136
      },
      move: {
        enable: true,
        speed: 3.206824121731046,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
});
