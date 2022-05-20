export const enum Route {
  Home = "Home",
}

export const category = {
  waterBottel: "Water Bottle",
  camera: "camera",
  headphone: "headphone",
  shoes: "shoes",
  watch: "watch",
};

export const ProductList = [
  {
    category: category.waterBottel,
    name: "Water Bottle",
    price: "10",
    details:
      "A water bottle is a container that is used to hold water, liquids or other beverages for consumption. The use of a water bottle allows an individual to drink and transport a beverage from one place to another. ",
    image: "/bottel.png",
  },
  {
    category: category.camera,
    name: "camera",
    price: "50",
    details:
      "camera, in photography, device for recording an image of an object on a light-sensitive surface; it is essentially a light-tight box with an aperture to admit light focused onto a sensitized film or plate.",
    image: "/camera.png",
  },
  {
    category: category.headphone,
    name: "headphone",
    price: "30",
    details:
      "Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound.",
  },
  {
    category: category.shoes,
    name: "shoes",
    price: "15",
    details:
      "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function.",
  },
  {
    category: category.watch,
    name: "watch",
    price: "16",
    details:
      "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activitie",
  },
];
