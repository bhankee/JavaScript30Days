const pressed = [];
const secretCode = 'hankee'

window.addEventListener('keyup' , (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(0, pressed.length - secretCode.length)


    if(pressed.join('').includes(secretCode)){
        alert('Secret Code!');
        cornify_add();
    }
    console.log(pressed);
});
