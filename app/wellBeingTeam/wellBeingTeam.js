import teamMembers from "../non_management";
import non_management from "../non_management";
const teams = [
  {
    id: "well-being-team-head",
    section: "Well Being Team Head",
    teamName: "Well Being Team Head",
    teamPhotoUrl: "https://sunshine.iith.ac.in/images/about-slider/3.JPG",
    teamDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita perferendis unde debitis sunt reprehenderit vero asperiores tempore, officia excepturi fugit aliquam minus voluptas. At aut, voluptatum magnam, praesentium voluptatibus in explicabo vero illum nesciunt nostrum molestias saepe? Commodi, nihil. Magni ipsam, eaque impedit fuga nobis enim rem sapiente accusantium?",
    teamMembers: non_management["Well Being Team"].filter(teamMember => teamMember["head"] === true),
  },
  {
    id: "well-being-team",
    section: "Well Being Team",
    teamName: "Well Being Team",
    teamPhotoUrl: "https://sunshine.iith.ac.in/images/about-slider/3.JPG",
    teamDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita perferendis unde debitis sunt reprehenderit vero asperiores tempore, officia excepturi fugit aliquam minus voluptas. At aut, voluptatum magnam, praesentium voluptatibus in explicabo vero illum nesciunt nostrum molestias saepe? Commodi, nihil. Magni ipsam, eaque impedit fuga nobis enim rem sapiente accusantium?",
    teamMembers: non_management["Well Being Team"].filter(teamMember => teamMember["head"] === undefined),
  },
];

export default teams;
