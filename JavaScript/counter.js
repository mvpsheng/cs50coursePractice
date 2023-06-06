let counter = 0

function count() {
    counter++
    document.querySelector('h1').innerHTML = counter

    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`)
    }
}

// after the whole page loaded, then execute the code to add eventlistener to the button
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', count)
})
