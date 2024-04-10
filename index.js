let saveEl = document.getElementById("save-el")
let errorEl = document.getElementById("error-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    errorEl.classList.remove("show")
}

function save() {
    if (count !== 0){
        let countStr = count + " - "
        saveEl.textContent += countStr
        countEl.textContent = 0
        count = 0
        errorEl.classList.remove("show")
    } else {
        errorEl.classList.add("show")
    }
}

function reset() {
    errorEl.classList.remove("show")
    count = 0
    countEl.textContent = count
    saveEl.textContent = ""
}

