/* =========================
   CELEBRATE
========================= */

function celebrate() {

    // 🎵 Play birthday song
    const song = document.getElementById("birthdaySong");

    song.currentTime = 0;

    song.play().catch(function(error) {

        console.log("Audio could not play:", error);

    });


    // 🎉 Show popup
    const popup = document.getElementById("popup");

    popup.style.display = "flex";


    // 🎈 Launch balloons
    launchBalloons();

}


/* =========================
   CLOSE POPUP
========================= */

function closePopup() {

    const popup = document.getElementById("popup");

    popup.style.display = "none";

}


/* =========================
   LAUNCH BALLOONS
========================= */

function launchBalloons() {

    const container =
        document.getElementById("balloon-container");


    // 🎈 Balloon colors

    const colors = [
        "#ff3333",
        "#3399ff",
        "#33cc66",
        "#ffcc00",
        "#ff66cc",
        "#9933ff",
        "#ff8800",
        "#00cccc"
    ];


    // Create 40 balloons

    for (let i = 0; i < 40; i++) {

        const balloon =
            document.createElement("div");


        balloon.classList.add("balloon");


        // Random horizontal position

        balloon.style.left =
            Math.random() * 100 + "%";


        // Random color

        balloon.style.backgroundColor =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        // Random size

        const size =
            Math.random() * 30 + 35;


        balloon.style.width =
            size + "px";


        balloon.style.height =
            size * 1.3 + "px";


        // Random speed

        const duration =
            Math.random() * 4 + 5;


        balloon.style.animationDuration =
            duration + "s";


        // Add balloon

        container.appendChild(balloon);


        // Remove after animation

        setTimeout(function() {

            balloon.remove();

        }, duration * 1000);

    }

}