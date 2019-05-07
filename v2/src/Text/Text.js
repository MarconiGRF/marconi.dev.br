const info_en = {
    name: "Marconi Gomes",
    gradinfo: "Majoring of Computer Science - Federal University of Pernambuco",
    github: "Github Page",
    cv: "Curriculum Vitae",
    about: "Made by Marconi Gomes, powered by ReactJS.",
    lang: "en"
}

const info_pt = {
    name: "Marconi Gomes",
    gradinfo: "Bacharelando em Ciência da Computação - Universidade Federal de Pernambuco",
    github: "Página do Github",
    cv: "Currículo Vitae",
    about: "Feito por Marconi Gomes, usando ReactJS.",
    lang: "pt"
}

const alt_pt = {
    pp_alt: "Foto de perfil",
    gthb_alt: "Página do Github",
    cv_alt: "Currículo Vitae",
    mail_alt: "Contato por e-mail",
    in_alt: "Contato por Linkedin",
    fb_alt: "Contato por Facebook",
    lgg_alt: "Alterar o idioma",
    flag_alt: "Idioma atual: Português - Brasileiro"
}

const alt_en = {
    pp_alt: "Profile picture",
    gthb_alt: "Github page",
    cv_alt: "Curriculum Vitae ",
    mail_alt: "Contact by e-mail",
    in_alt: "Contact by Linkedin",
    fb_alt: "Contact by Facebook",
    lgg_alt: "Switch language",
    flag_alt: "Current language: English - US"
}

export function getAlt(selection) {
    return alt_en[(selection)]
}

export function getText(selection) {
    return info_en[(selection)]
}