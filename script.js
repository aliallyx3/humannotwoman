let timeLeft = 50 * 60; // 50 دقيقة بالثواني
let timerId = null;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").textContent = 
        `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (timerId !== null) return;
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timerId);
            alert("عاش يا بطل! خذ راحة 10 دقائق دلوقتي 🎉");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    pauseTimer();
    timeLeft = 50 * 60;
    updateDisplay();
}

function addNote() {
    let input = document.getElementById("noteInput");
    let text = input.value.trim();
    if (text !== "") {
        let notesList = document.getElementById("notesList");
        let newNote = document.createElement("div");
        newNote.className = "note-item";
        newNote.textContent = text;
        notesList.appendChild(newNote);
        input.value = "";
    }
}
