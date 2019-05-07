import React, { useState, useEffect } from 'react';

class Language extends React.Component {
    constructor(nowLang){
        super(nowLang)
        this.language = nowLang
        console.log("Language is set to: " + nowLang)
    }

    setLanguage(toLang){
        this.language = toLang
        console.log("Trying to set it to: " + toLang)
    }
}

export default Language