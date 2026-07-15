export type ModuleVisual = {
  src: string;
  alt: string;
  credit: string;
};

const moduleVisuals: Record<string, ModuleVisual> = {
  "sore-throat": {
    src: "/illustrations/sore-throat.svg",
    alt: "Illustration of a person with a sore throat holding a warm drink",
    credit: "Local SVG illustration"
  },
  fever: {
    src: "/illustrations/fever.svg",
    alt: "Person resting comfortably while managing a fever",
    credit: "Local SVG illustration"
  },
  cough: {
    src: "/illustrations/cough.svg",
    alt: "Person using a tissue while dealing with a cough",
    credit: "Local SVG illustration"
  },
  "cold-flu-covid-strep-allergies": {
    src: "/illustrations/cold-flu-covid-strep-allergies.svg",
    alt: "Hands with a tissue and a warm mug illustrating common cold symptoms",
    credit: "Local SVG illustration"
  },
  hydration: {
    src: "/illustrations/general-health.svg",
    alt: "Refreshing water and hydration essentials",
    credit: "Local SVG illustration"
  },
  "runny-blocked-nose": {
    src: "/illustrations/general-health.svg",
    alt: "Illustration of breathing comfort and rest",
    credit: "Local SVG illustration"
  },
  "when-to-seek-care": {
    src: "/illustrations/general-health.svg",
    alt: "Illustration highlighting safety and seeking care",
    credit: "Local SVG illustration"
  }
};

export function getFallbackModuleVisual(): ModuleVisual {
  return {
    src: "/illustrations/general-health.svg",
    alt: "Gentle health and wellbeing illustration",
    credit: "Local SVG illustration"
  };
}

export function getModuleVisual(slug: string): ModuleVisual {
  return moduleVisuals[slug] ?? getFallbackModuleVisual();
}
