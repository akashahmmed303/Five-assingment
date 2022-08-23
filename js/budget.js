document.getElementById("calculate"),
  addEventListener("click", function () {
    const perPlayerField = document.getElementById("per-player-field");
    const perPlayerString = perPlayerField.value;
    const perPlayer = parseFloat(perPlayerString);

    const expensesField = document.getElementById("expenses");
    const expensesFieldString = expensesField.innerText;
    const expenses = parseFloat(expensesFieldString);

    expensesField.innerText = perPlayer * 5;
  });

document.getElementById("calculate-total"),
  addEventListener("click", function () {
    const managerField = document.getElementById("manager-field");
    const managerFieldString = managerField.value;
    const manager = parseFloat(managerFieldString);

    const coachField = document.getElementById("coach-field");
    const coachFieldString = coachField.value;
    const coach = parseFloat(coachFieldString);

    const perPlayerField = document.getElementById("per-player-field");
    const perPlayerString = perPlayerField.value;
    const perPlayer = parseFloat(perPlayerString);

    const expensesField = document.getElementById("expenses");
    const expensesFieldString = expensesField.innerText;
    const expenses = parseFloat(expensesFieldString);

    expensesField.innerText = perPlayer * 5;
  });
