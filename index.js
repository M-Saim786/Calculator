let screen = document.getElementById('screen');
button = document.querySelectorAll('button');
let screenValue = '';
for (item of button) {
    item.addEventListener('click', (e) => {
        var buttonText = e.target.innerText;
        console.log('This is Button Text', buttonText);
        console.log(typeof buttonText)
      // if(buttonText=="7"){
      //   screen.value +="7"
      // }
       if(buttonText=="AC"){
        screenValue = ' ';
        screen.value = screenValue;

      }
    //  else if(buttonText=="X"){

    //     screen.value += "*";

    //   }
     else if(buttonText=="="){
        screen.value = eval(screen.value);
      }   
      else
      {
        screenValue += buttonText;
        screen.value = screenValue;
      }
    })
}

function sin() {
  screen.value = Math.sin(screen.value,2);
}
