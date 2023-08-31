function generateButtonNavbar(dataNavbar) {
    const buttonContainer = document.getElementById("buttonContainer");

    for (let i = 0; i < dataNavbar.length; i++) {
        const buttonData = dataNavbar[i];
        const link = document.createElement("a");
        link.classList.add("button-navbar");
        link.href = buttonData.id;
        link.textContent = buttonData.label;

        link.addEventListener("click", function(event) {
            event.preventDefault();

            const elementToScrollTo = document.querySelector(buttonData.id);
            if (elementToScrollTo) {
                elementToScrollTo.scrollIntoView({ behavior: "smooth" });
            }
        });

        buttonContainer.appendChild(link);
    }
}

function displayFormSubmission() {
    const form = document.getElementById("myForm")
    const pesanDiv = document.getElementById("pesan")

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const tanggalLahir = document.getElementById("tanggalLahir").value;
        const jenisKelamin = document.querySelector('select[name="jenisKelamin"]').value;
        const pesan = document.getElementById("textPesan").value;

        const displayMessage = `
            <p>Nama: ${name}</p>
            <p>Tanggal Lahir: ${tanggalLahir}</p>
            <p>Jenis Kelamin: ${jenisKelamin}</p>
            <p>Pesan: ${pesan}</p>
        `;

        pesanDiv.innerHTML = displayMessage;

        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const dataJSON = [
        {
            "label": "Home",
            "id": "#home"
        },
        {
            "label": "Our Profile",
            "id": "#our-profile"
        },
        {
            "label": "Achievement",
            "id": "#achievement"
        },
        {
            "label": "Message Us",
            "id": "#form"
        }
    ]

    generateButtonNavbar(dataJSON);
    displayFormSubmission();
});
