const anim = {
  old: {
    name: "slide-up",
    duration: "0.55s",
    easing: "ease-in",
    direction: "reverse",
  },
  new: {
    name: "slide-up",
    duration: "0.55s",
    easing: "ease-out",
    direction: "",
  },
};

const SlideUp = {
  forwards: anim,
  backwards: anim,
};

export default SlideUp;
