AOS.init({
    duration: 2000
});
const dataEvento = new Date("may 20, 2024 20:00:00");
const timeStampEvento = dataEvento.getTime();
const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();
    const tempoAteEvento = timeStampEvento - timeStampAgora;
    const diasMs = 86400000;
    const horasMs = 3600000;
    const minMs = 60000;
    const diasAteEvento = Math.floor(tempoAteEvento / diasMs);
    const horasAteEvento = Math.floor(tempoAteEvento % diasMs / horasMs);
    const minsAteEvento = Math.floor(tempoAteEvento % horasMs / minMs);
    const segsAteEvento = Math.floor(tempoAteEvento % minMs / 1000);
    document.getElementById("contador").innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minsAteEvento}m ${segsAteEvento}s`;
    if (tempoAteEvento <= 0) {
        clearInterval(contaTempo);
        document.getElementById("contador").innerHTML = "Evento encerrado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
