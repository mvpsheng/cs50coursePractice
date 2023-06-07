if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0)
}

function count() {
    let counter = localStorage.getItem('counter')
    counter++
    document.querySelector('h1').innerHTML = counter
    localStorage.setItem('counter', counter)
    // if (counter % 10 === 0) {
    //     alert(`Count is now ${counter}`)
    // }
}

// after the whole page loaded, then execute the code to add eventlistener to the button
document.addEventListener('DOMContentLoaded', function() {
    // this works the same
    // document.querySelector('button').addEventListener('click', count)
    document.querySelector('h1').innerHTML = localStorage.getItem('counter')
    document.querySelector('button').onclick = count

})
