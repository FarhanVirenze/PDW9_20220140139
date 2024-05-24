function showValues() {
    // Mengambil nilai dari input type text (Nama)
    let textInputValue = document.getElementById('textInput').value;
    
    // Mengambil nilai dari input type number (NIM)
    let numberInputValue = document.getElementById('numberInput').value;
    
    // Mengambil nilai dari input type checkbox (I'm not a robot)
    let checkboxInputValue = document.getElementById('checkboxInput').checked;
    
    // Mengambil nilai dari input type select (Kelas)
    let selectInputValue = document.getElementById('selectInput').value;
    
    // Menampilkan nilai dari masing-masing input di dalam alert
    alert(
        `Nama: ${textInputValue}\n` +
        `NIM: ${numberInputValue}\n` +
        `I'm not a robot: ${checkboxInputValue}\n` +
        `Kelas: ${selectInputValue}`
    );
}
