function replaceName() {
    let name = prompt("Siapakah Nama Anda?","");
    document.getElementById("name").innerHTML = name
}

 document.getElementById("tombol").addEventListener("click", function() {
    replaceName();
 })

 let nameInput = document.getElementById('name-input')

 document.getElementById('kirim').addEventListener("click", function() {
    // prompt();

    const name = nameInput.value

    if (name == "") {
         document.getElementById("error-name").innerHTML = " Nama Tidak Boleh Kosong!"
    } else {
        document.getElementById('name')
    }

    document.getElementById('name').innerHTML = nama
 })

function validateForm() {
    const nama = document.forms['message-form']['name-input'].value
    
    if (nama == '') {
        document.getElementById("error-name").innerHTML = "Tidak Boleh Kosong!"

        return falses
    }

    setName(nama)

    return false;
}

function setName(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById('error-name').innerHTML = "";
}