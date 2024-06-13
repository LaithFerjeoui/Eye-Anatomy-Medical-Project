import anatomy from "../../public/Figures/hero.png"
import techniques from "../../public/Figures/techniques.jpg"
import applications from "../../public/Figures/applications.jpg"

export const nav = [
    {
        title: "Anatomie",
        description: "Cette section traite de l'anatomie de l'œil du chien.",
        link: "/Anatomy",
        img: anatomy
    },
    {
        title: "Applications",
        description: "Applications cliniques et techniques d'imagerie de l'œil.",
        link: "/Applications",
        img: techniques
    },
    {
        title: "Techniques",
        description: "Techniques spécifiques liées à l'anatomie et à l'imagerie de l'œil.",
        link: "/Techniques",
        img: applications
    },
];
