const info = {
    name: "Marconi Gomes",
    gradinfo: "Majoring of Computer Science - Federal University of Pernambuco",
    github: "Github Page",
    cv: "Curriculum Vittae",
    nerdscore: "How nerd are you?",
    nerdscore2: "Nerdscore now.",
    about: "Made by Marconi Gomes, powered by ReactJS."
}

export function getText(selection) {
    return info[(selection)]
}