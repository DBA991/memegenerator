function getLine1() {
    let line1 = document.getElementById("line1");
    let line1Input = document.getElementById("line-1-input").value; 
    if (line1Input === "") {
        line1.textContent ="Please insert a text";
    } else { 
        line1.textContent = line1Input; 
    }
}
function getLine2() {
    let line2 = document.getElementById("line2"); 
    let line2Input = document.getElementById("line-2-input").value; 
    if (line2Input === "") {
        line2.textContent ="Please insert a text";
    } else {
        line2.textContent = line2Input;
    }
}
function getCita() {
    let cita = document.getElementById("citation"); 
    let citaInput = document.getElementById("cita-input").value; 
    let citaDiv = document.getElementById("citation-div");
    citaDiv.style.backgroundColor = "#00000040";
    cita.textContent = citaInput;
}
function getImage() {
    let image = document.getElementById("image");
    let selectedImage = document.getElementById("image-input").files[0];
    let imageUrl = URL.createObjectURL(selectedImage);
    image.src = imageUrl;
}
function getLogo() {
    let logo = document.getElementById("logo");
    let selectedLogo = document.getElementById("logo-input").files[0];
    let logoUrl = URL.createObjectURL(selectedLogo);
    if (selectedLogo) {
        let logoDiv = document.getElementById("logo-div")
        logoDiv.style.backgroundColor = "#00000040";
        logo.src = logoUrl;
    }
}
function citaSwitch(){
    let citaColo = document.getElementById("citation");
    if (citaColo.textContent === "") {
        alert("No Text");
    } else {
        if (citaColo.style.color === "white") {
                citaColo.style.color = "black";
            }
        else {
                citaColo.style.color = "white";
            }
        }   
}
function getMeme() {
    let memeDisplay = document.getElementById("meme-display-grid");
    html2canvas(memeDisplay).then(function(canvas) {
        canvas.toBlob(function(blob) {
            let memeDisplayURL = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = memeDisplayURL;
            a.download = "meme.png";
            a.click();
            window.URL.revokeObjectURL(memeDisplayURL);
        });
    });
}
