import { ScrollSmoother } from "gsap/ScrollSmoother";

let smoother: ScrollSmoother | null = null;

export const setSmoother = (instance: ScrollSmoother) => {
  smoother = instance;
};

export const getSmoother = () => smoother;
