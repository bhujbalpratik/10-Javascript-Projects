let number

const generate_number = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1)
  number = randomNumber
  console.log(number)
}

// generate_number();
const generate_number_btn_click = () => {
  document.querySelector("#section1").style.display = "none"
  document.querySelector("#section2").style.display = "none"
  document.querySelector("#section3").style.display = "block"

  setTimeout(() => {
    generate_number()

    document.querySelector("#field").value = ""

    document.querySelector("#section1").style.display = "none"
    document.querySelector("#section2").style.display = "block"
    document.querySelector("#section3").style.display = "none"
  }, 3000)
}

//check number
const check_number = () => {
  // if (value == number) {
  //   alert("Congrates, You won the game")
  // } else {
  //   alert("OOPS !! Your Guess is wrong...")
  // }
  const startMsg = document.querySelector("#startMsg")
  const guessImg = document.querySelector("#guessImg")
  const numberBox = document.querySelector("#field")
  const msgBox = document.querySelector("#msg")
  let Usr_Num = Number.parseInt(numberBox.value)

  if (Usr_Num >= 0 && Usr_Num <= 100) {
    if (Usr_Num == number) {
      guessImg.src =
        "https://media.tenor.com/F0UWHBTt6xQAAAAj/congratulations-congrats.gif"
      msgBox.innerHTML = "You Guessed Correct Number !!!"
      startMsg.style.display = "block"

      setTimeout(() => {
        numberBox.value = ""
        startMsg.style.display = "none"
        guessImg.src =
          "https://media.tenor.com/images/7ad6c940267a64a53446dbf72fb99197/tenor.gif"
        msgBox.innerHTML = "Guess the number between 1 to 100 **"
        generate_number_btn_click()
      }, 9000)
    } else if (Usr_Num < number) {
      msgBox.innerHTML = `That Number is greater than ${Usr_Num}`
      numberBox.value = ""
    } else {
      msgBox.innerHTML = `That Number is less than ${Usr_Num}`
      numberBox.value = ""
    }
  } else {
    msgBox.innerHTML = "Please Enter Number between 1 to 100"
    numberBox.value = ""
  }
}
