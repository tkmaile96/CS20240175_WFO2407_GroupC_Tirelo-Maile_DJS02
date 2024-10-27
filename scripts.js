const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);

  let{dividend, divider} = Object.fromEntries(entries);
  dividend = parseFloat(dividend);
  divider = parseFloat(divider);

  //check is unputs are provided
  if  (isNaN(dividend) || isNaN(divider)) {
    if(dividend === ""  || divider === "") {
      result.innerText = "Both values are required to perfome  the division.";
      return
    } else {
      result.innerText = "Math Error";
    }
  }

  // check if divider is zero
  if (divider === 0) {
    result.innerText = "Math Error";
    return
  }



  result.innerText = dividend / divider;
});