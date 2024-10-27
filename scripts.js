const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);

  let{dividend, divider} = Object.fromEntries(entries);
 

  //check is unputs are provided
    if(dividend === ""  || divider === "") {
      result.innerText = "Both values are required to perfome  the division.";
      return
    } else {
      result.innerText = "Math Error";
  }

  // parse inputs to numbers
  dividend = parseFloat(dividend);
  divider = parseFloat(divider);

  // check if divider is zero
  if (divider === 0) {
    result.innerText = "Math Error";
    return
  }

//  perform division
const divisionResult = dividend / divider;
if (Number.isInteger(divisionResult)) {
  result.innerText = divisionResult.toString();
}  else {
  result.innerText = Math.floor(divisionResult).toString();
}
});