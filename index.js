document.addEventListener("keydown", (e) => {
    const key_name = e.key;
    const key_number = e.keyCode;
    document.getElementById("keyName").innerText = key_name;
    document.getElementById("keyNumber").innerText = key_number;
})