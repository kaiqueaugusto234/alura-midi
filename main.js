function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    
    if (elemento && elemento.localName === 'audio') {

        elemento.play();
    }
    else {
        console.log('elemento nao encontrado');
    }
}
