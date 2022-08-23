document.getElementById("calculate"),
  addEventListener("click", function () {
    const perPlayerField = document.getElementById("per-player-field");
    const perPlayerString = perPlayerField.value;
    const perPlayer = parseFloat(perPlayerString);

    const expensesField = document.getElementById("expenses");
    const expensesFieldString = expensesField.innerText;
    const expenses = parseFloat(perPlayerString);

    expensesField.innerText = perPlayer * 5;
  });
