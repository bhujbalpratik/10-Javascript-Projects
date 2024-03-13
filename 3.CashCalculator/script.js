const getNote2000 = () => {
  let n = Number.parseInt(document.getElementById("Note2000").value)
  document.getElementById("ResultNote2000").value = 2000 * n
}
const getNote500 = () => {
  let n = Number.parseInt(document.getElementById("Note500").value)
  document.getElementById("ResultNote500").value = 500 * n
}
const getNote200 = () => {
  let n = Number.parseInt(document.getElementById("Note200").value)
  document.getElementById("ResultNote200").value = 200 * n
}
const getNote100 = () => {
  let n = Number.parseInt(document.getElementById("Note100").value)
  document.getElementById("ResultNote100").value = 100 * n
}
const getNote50 = () => {
  let n = Number.parseInt(document.getElementById("Note50").value)
  document.getElementById("ResultNote50").value = 50 * n
}
const getNote20 = () => {
  let n = Number.parseInt(document.getElementById("Note20").value)
  document.getElementById("ResultNote20").value = 20 * n
}
const getNote10 = () => {
  let n = Number.parseInt(document.getElementById("Note10").value)
  document.getElementById("ResultNote10").value = 10 * n
}

const total = () => {
  let n1 = Number.parseInt(document.getElementById("ResultNote2000").value)
  let n2 = Number.parseInt(document.getElementById("ResultNote500").value)
  let n3 = Number.parseInt(document.getElementById("ResultNote200").value)
  let n4 = Number.parseInt(document.getElementById("ResultNote100").value)
  let n5 = Number.parseInt(document.getElementById("ResultNote50").value)
  let n6 = Number.parseInt(document.getElementById("ResultNote20").value)
  let n7 = Number.parseInt(document.getElementById("ResultNote10").value)

  document.getElementById("Total").value = n1 + n2 + n3 + n4 + n5 + n6 + n7
}
