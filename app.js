const hello = document.getElementById('hello');
const goodbye = document.getElementById('goodbye');

hello.addEventListener('click', function() {
    console.log(hello.innerText = "hello")
});

goodbye.addEventListener('click', function() {
    console.log(goodbye.innerText = "goodbye")
})
