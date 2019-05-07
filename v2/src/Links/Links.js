const links = {
    github: "https://github.com/MarconiGRF",
    cv: "https://drive.google.com/file/d/1bFDezakxHaQVl46YuV7Set8CIuTJpDvM/view?usp=sharing",
}

export function getLink(selection) {
    return links[(selection)]
}