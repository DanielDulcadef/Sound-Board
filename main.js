const sounds = ["accidente", "ambiente", "campana", "disparo", "lluvia", "risa"]

sounds.forEach((sonidos) => {
    const btn1 = document.createElement("buttons")
    btn1.classList.add("btn");
    btn1.innerText = sonidos;
    document.getElementById("buttons").appendChild(btn1);
    btn1.addEventListener("click", () => {
        stop1()
        document.getElementById(sonidos).play()
    });

});


function stop1() {
    sounds.forEach((sonidos) => {
        const sonido = document.getElementById(sonidos)
        sonido.pause();
        sonido.currentTime = 0;

    });
}
