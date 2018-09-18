document.addEventListener("DOMContentLoaded", () => {
  let arr = ["Hugo and Malcome", "Andy Kat and Gavin", "Tiff and Jackie", "Santiago and Ruby", "Steven and Jordan", "McKenzie and Alex"]

  function pick_students(arr){
    return function(){
      let luckyNum = Math.floor(Math.random()*arr.length);
      const group = arr[luckyNum]
      arr = arr.slice(0, luckyNum).concat(arr.slice(luckyNum + 1))
      console.log(arr)
      if (arr.length){
        return group
      } else {
        return "All done!"
      }
    }
  }

  let pick = pick_students(arr)

  let h3 = document.querySelector('h3')
  let button = document.querySelector('button')
  button.addEventListener("click", () => {
    h3.innerHTML = pick()
  })


})


// const pick = pick_students(arr)
// pick()
