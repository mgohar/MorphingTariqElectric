import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(MorphSVGPlugin,ScrollTrigger);
// console.log("GSAP:", gsap);
let stage = 0
;
function morph(A, B) {
  let svgMain = document.querySelector(".svgMain");
  let svgPaths = document.querySelectorAll(A);
  let svgPathA = document.querySelectorAll(B);

  svgPaths.forEach((svgPath, i) => {
    let svgA1 = svgPathA[i];
    svgMain.setAttribute("viewBox", "0 0 755 703");
    if (svgA1.getAttribute('d') == "") {
      gsap.to(svgPath, {
        opacity: 0,
        duration: 0.8,
        ease: "power1.inOut",
      });
    }else{
      gsap.to(svgPath, {
        opacity: 1,
        duration: 0.8,
        ease: "power1.inOut",
      });
    }
    gsap.to(svgPath, { duration: 1, morphSVG: svgA1, ease: "power1.inOut" });
  });

}
// Scroll Trigger
ScrollTrigger.create({
  trigger: ".morphbzsection1",
  start: "top 50%",
  end: "bottom 50%",
  markers: false,
  onToggle: ({ isActive }) => {
    console.log("Active:", isActive);
    if (isActive) {
      morph(".svgPath", ".svgPath");
    } else {
      morph(".svgPath", ".svgPath");
    }
  },
});
ScrollTrigger.create({
  trigger: ".morphbzsection2",
  start: "top 50%",
  end: "bottom 50%",
  markers: false,
  onToggle: ({ isActive }) => {
    console.log("Active:", isActive);
    if (isActive) {
      morph(".svgPath", ".svgPathA");
    } else {
      morph(".svgPath", ".svgPath");
    }
  },
});
ScrollTrigger.create({
  trigger: ".morphbzsection3",
  start: "top 50%",
  end: "bottom 50%",
  markers: false,
  onToggle: ({ isActive }) => {
    console.log("Active:", isActive);
    if (isActive) {
      morph(".svgPath", ".svgPathB");
    } else {
      morph(".svgPath", ".svgPathA");
    }
  },
});
ScrollTrigger.create({
  trigger: ".morphbzsection4",
  start: "top 50%",
  end: "bottom 50%",
  markers: false,
  onToggle: ({ isActive }) => {
    console.log("Active:", isActive);
    if (isActive) {
      morph(".svgPath", ".svgPathC");
    } else {
      morph(".svgPath", ".svgPathB");
    }
  },
});
ScrollTrigger.create({
  trigger: ".morphbzsection5",
  start: "top 50%",
  end: "bottom 50%",
  markers: false,
  onToggle: ({ isActive }) => {
    console.log("Active:", isActive);
    if (isActive) {
      morph(".svgPath", ".svgPathD");
    } else {
      morph(".svgPath", ".svgPathC");
    }
  },
});
ScrollTrigger.create({
  trigger: ".morphbzsection6",
  start: "top 50%",
  end: "bottom 50%",
  markers: false,
  onToggle: ({ isActive }) => {
    console.log("Active:", isActive);
    if (isActive) {
      morph(".svgPath", ".svgPathE");
    } else {
      morph(".svgPath", ".svgPathD");
    }
  },
});
ScrollTrigger.create({
  trigger: ".morphbzsection7",
  start: "top 50%",
  end: "bottom 50%",
  markers: false,
  onToggle: ({ isActive }) => {
    console.log("Active:", isActive);
    if (isActive) {
      morph(".svgPath", ".svgPathF");
    } else {
      morph(".svgPath", ".svgPathE");
    }
  },
});
ScrollTrigger.create({
  trigger: ".morphbzsection8",
  start: "top 50%",
  end: "bottom 50%",
  markers: false,
  onToggle: ({ isActive }) => {
    console.log("Active:", isActive);
    if (isActive) {
      morph(".svgPath", ".svgPathG");
    } else {
      morph(".svgPath", ".svgPathF");
    }
  },
});


