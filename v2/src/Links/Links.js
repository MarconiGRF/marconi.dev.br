const info = {
    github: "https://github.com/MarconiGRF",
    cv: "https://drive.google.com/file/d/1bFDezakxHaQVl46YuV7Set8CIuTJpDvM/view?usp=sharing",
    nerdscore: "How nerd are you?",
    nerdscore2: "Nerdscore now.",
    about: "Made by Marconi Gomes, powered by ReactJS."
}

export function getLink(selection) {
    return info[(selection)]
}