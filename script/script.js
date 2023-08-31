function generateButtonNavbar(dataNavbar) {
    const buttonContainer = document.getElementById("buttonContainer");

    for (let i = 0; i < dataNavbar.length; i++) {
        const buttonData = dataNavbar[i];
        const link = document.createElement("a");
        link.classList.add("button-navbar");
        link.href = buttonData.id; // Use buttonData.id for the href (scroll to the element with this ID)
        link.textContent = buttonData.label;

        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Scroll to the element associated with the link
            const elementToScrollTo = document.querySelector(buttonData.id);
            if (elementToScrollTo) {
                elementToScrollTo.scrollIntoView({ behavior: "smooth" });
            }
        });

        buttonContainer.appendChild(link);
    }
}

function displayFormSubmission() {
    const form = document.getElementById("myForm"); // Gunakan ID formulir untuk memilihnya
    const pesanDiv = document.getElementById("pesan");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const tanggalLahir = document.getElementById("tanggalLahir").value;
        const jenisKelamin = document.querySelector('select[name="jenisKelamin"]').value;
        const pesan = document.getElementById("textPesan").value; // Perbaiki ID elemen pesan

        const displayMessage = `
            <p>Nama: ${name}</p>
            <p>Tanggal Lahir: ${tanggalLahir}</p>
            <p>Jenis Kelamin: ${jenisKelamin}</p>
            <p>Pesan: ${pesan}</p>
        `;

        pesanDiv.innerHTML = displayMessage;

        // Hapus isian formulir setelah pengiriman
        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Perform a fetch request for JSON data
    fetch('../data/dataNavbar.json')
        .then(response => response.json())
        .then(data => {
            // Call generateButtonNavbar function with JSON data
            generateButtonNavbar(data);
        })
        .catch(error => {
            console.error('Failed to load JSON data:', error);
        });

    // Call displayFormSubmission function
    displayFormSubmission();
});
