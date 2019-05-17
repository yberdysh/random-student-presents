document.addEventListener("DOMContentLoaded", () => {
  // let arr = ["Hugo and Malcome", "Andy Kat and Gavin", "Tiff and Jackie", "Santiago and Ruby", "Steven and Jordan", "McKenzie and Alex"]
  let arr = ["Adam F", "Adam K", "Bill", "Brenden", "Chris", "Codey", "Ernie", "Frankie", "Gino", "Jerry", "Kate", "Lorenzo", "Luka", "Mallory", "Matt", "Pete", "Rei", "Jamil", "Sylwia", "Susan", "Yoonmi"]

  function pick_students(arr){
    return function(){
      let luckyNum = Math.floor(Math.random()*arr.length);
      const group = arr[luckyNum]
      arr = arr.slice(0, luckyNum).concat(arr.slice(luckyNum + 1))
        return group
    }
  }

  let pick = pick_students(arr)

  let h3 = document.querySelector('h3')
  let button = document.querySelector('button')
  button.addEventListener("click", () => {
    let pickedStudent = pick()
    if (pickedStudent){
      h3.innerHTML = pickedStudent
    } else {
      h3.innerHTML = "All done!"
    }
  })

  let body = document.querySelector('body')
  button.addEventListener("click", () => {
    body.style.backgroundColor = `rgb(${Math.floor(Math.random()*250)}, ${Math.floor(Math.random()*250)}, ${Math.floor(Math.random()*250)})`
  })


})


// const pick = pick_students(arr)
// pick()
