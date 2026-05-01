let qr;
let historyList = document.getElementById("historyList");

window.onload = function(){
    loadHistory();
}

function generateQR(){
    let text = document.getElementById("qrText").value;
    let container = document.getElementById("qrContainer");

    if(text === ""){
        alert("Enter text first!");
        return;
    }

    container.innerHTML = "";

    qr = new QRCode(container,{
        text:text,
        width:230,
        height:230
    });

    saveHistory(text);
}

function downloadQR(){
    let img = document.querySelector("#qrContainer img");
    if(!img){
        alert("Generate QR first");
        return;
    }

    let link = document.createElement("a");
    link.href = img.src;
    link.download = "Dhruv_QR.png";
    link.click();
}

function toggleMode(){
    document.body.classList.toggle("dark");
}

function saveHistory(text){
    let history = JSON.parse(localStorage.getItem("qrHistory")) || [];
    history.unshift(text);
    localStorage.setItem("qrHistory", JSON.stringify(history));
    loadHistory();
}

function loadHistory(){
    let history = JSON.parse(localStorage.getItem("qrHistory")) || [];
    historyList.innerHTML = "";

    history.slice(0,5).forEach(item=>{let qr;
let historyList = document.getElementById("historyList");

window.onload = function () {
    loadHistory();
};

function generateQR() {
    let text = document.getElementById("qrText").value;
    let container = document.getElementById("qrContainer");

    if (text.trim() === "") {
        alert("Enter text first!");
        return;
    }

    container.innerHTML = "";

    qr = new QRCode(container, {
        text: text,
        width: 230,
        height: 230
    });

    saveHistory(text);
}

function downloadQR() {

    let canvas = document.querySelector("#qrContainer canvas");
    let img = document.querySelector("#qrContainer img");

    if (!canvas && !img) {
        alert("Generate QR first");
        return;
    }

    let link = document.createElement("a");

    // If canvas exists
    if (canvas) {
        link.href = canvas.toDataURL("image/png");
    }
    // If img exists
    else {
        link.href = img.src;
    }

    link.download = "Dhruv_QR_Code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function saveHistory(text) {
    let history = JSON.parse(localStorage.getItem("qrHistory")) || [];
    history.unshift(text);

    localStorage.setItem("qrHistory", JSON.stringify(history));

    loadHistory();
}

function loadHistory() {

    let history = JSON.parse(localStorage.getItem("qrHistory")) || [];

    historyList.innerHTML = "";

    history.slice(0, 5).forEach(item => {

        let li = document.createElement("li");

        li.textContent = item;

        li.onclick = function () {
            document.getElementById("qrText").value = item;
            generateQR();
        };

        historyList.appendChild(li);

    });
}
        let li = document.createElement("li");
        li.textContent = item;
        li.onclick = function(){
            document.getElementById("qrText").value = item;
            generateQR();
        }
        historyList.appendChild(li);
    });
}
