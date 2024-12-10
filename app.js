// PUT YOUR CODE HERE
// Select the elements
const redBox = document.querySelector(".red");
const greenBox = document.querySelector(".green");
const blueBox = document.querySelector(".blue");
const yellowBox = document.querySelector(".yellow");

// Create the animation timeline
const tl = gsap.timeline({ repeat: -1 });

// Define the animations
tl.from(redBox, { duration: 1, x: "-100vw", y: "-100vh" })
  .from(greenBox, { duration: 1, x: "100vw", y: "-100vh" })
  .from(blueBox, { duration: 1, x: "100vw", y: "100vh" })
  .from(yellowBox, { duration: 1, x: "-100vw", y: "100vh" })
  .to(redBox, {
    duration: 1,
    x: "calc(100vw - 200px)",
    y: 0,
    borderRadius: "50%",
    backgroundColor: "green",
  })
  .to(
    greenBox,
    {
      duration: 1,
      x: 0,
      y: "calc(100vh - 200px)",
      borderRadius: "50%",
      backgroundColor: "blue",
    },
    "<"
  )
  .to(
    blueBox,
    {
      duration: 1,
      x: "calc(-100vw + 200px)",
      y: 0,
      borderRadius: "50%",
      backgroundColor: "yellow",
    },
    "<"
  )
  .to(
    yellowBox,
    {
      duration: 1,
      x: 0,
      y: "calc(-100vh + 200px)",
      borderRadius: "50%",
      backgroundColor: "red",
    },
    "<"
  )
  .to(redBox, { duration: 1, x: "-100vw", opacity: 0 })
  .to(greenBox, { duration: 1, x: "100vw", opacity: 0 }, "<")
  .to(blueBox, { duration: 1, x: "100vw", opacity: 0 }, "<")
  .to(yellowBox, { duration: 1, x: "-100vw", opacity: 0 }, "<");
