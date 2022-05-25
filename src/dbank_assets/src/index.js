import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function(){
    update();
})

document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();
    // console.log("pressed");

    const button = event.target.querySelector("#submit-btn");

    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute("disabled", true);

    if (inputAmount) {
        await dbank.topUp(inputAmount);
        document.getElementById("input-amount").value = "";
      }
      if (outputAmount) {
        await dbank.withdrawal(outputAmount);
        document.getElementById("withdrawal-amount").value = "";

    }
      
      await dbank.compound();

     update();

      button.removeAttribute("disabled");
}) 

async function update(){
    const currentAmount = await dbank.checkBalance();
      document.getElementById("value").innerText = Math.round(currentAmount * 100) /100;
}
