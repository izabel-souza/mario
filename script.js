let rankedList = ["Super Mario World (SNES)", "Super Mario Bros. 3 (NES)", "Super Mario Galaxy (Wii)", "Super Mario Galaxy 2 (Wii)", "Super Mario Odyssey (Switch)"];

function renderList() {

    const olList = document.getElementById("mario_ranked_list");

    olList.innerHTML = "";

    rankedList.forEach(function(item) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        olList.appendChild(listItem);
    });

};