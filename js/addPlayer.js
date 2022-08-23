const playerNameArray = [];

// btn click

function getSelectedBtn(element) {
  const playerName = element.parentNode.parentNode.children[0].innerText;

  playerNameArray.push(playerName);
  const totalSelectedPlayer = document.getElementById("total-selected-player");
  totalSelectedPlayer.innerText = playerNameArray.length;

  const seletedNumberString = totalSelectedPlayer.innerText;
  const seletedNumber = parseFloat(seletedNumberString);

  setPlayerName(playerName);
}

// btn click disable

function disable(x) {
  x.disabled = true;
}
t;

function setPlayerName(name) {
  console.log(name.length);
  if (playerNameArray.length > 5) {
    alert("You can not selected more than 5 players");
    return playerNameArray;
  }
  const tableBody = document.getElementById("name-place");
  tableBody.innerHTML = "";

  for (i = 0; i < playerNameArray.length; i++) {
    const playersName = playerNameArray[i];
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="text-center text-2xl">${i + 1}</td>
      <td class="text-xl">${playersName}</td>`;

    tableBody.appendChild(tr);
  }
}
