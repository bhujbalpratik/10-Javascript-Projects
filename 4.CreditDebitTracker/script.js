let Srn = 1

const credit = () => {
  let n = Number.parseInt(document.getElementById("credit_inp").value)

  if (n > 0) {
    let bal = (document.getElementById("Balance").value =
      Number.parseInt(document.getElementById("Balance").value) + n)

    document.getElementById("debit_inp").value = ""
    document.getElementById("credit_inp").value = ""

    document.getElementById("My_table").innerHTML +=
      "<tr><td>" +
      Srn +
      "</td><td>" +
      n +
      "</td><td>-</td><td>" +
      bal +
      "</td></tr>"

    Srn++
  } else {
    alert("Please Credit At least ₹1")
  }
}

const debit = () => {
  let n = Number.parseInt(document.getElementById("debit_inp").value)

  let bal = document.getElementById("Balance").value

  if (n > 0 && n <= bal) {
    var bal2 = (document.getElementById("Balance").value =
      Number.parseInt(document.getElementById("Balance").value) - n)

    document.getElementById("credit_inp").value = ""
    document.getElementById("debit_inp").value = ""

    document.getElementById("My_table").innerHTML +=
      "<tr><td>" +
      Srn +
      "</td><td>-</td><td>" +
      n +
      "</td><td>" +
      bal2 +
      "</td></tr>"

    Srn++
  } else {
    alert("Insufficient Balance")
  }
}
