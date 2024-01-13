let rankedList = ["Super Mario World (SNES)", "Super Mario Bros. 3 (NES)", "Super Mario Galaxy (Wii)", "Super Mario Galaxy 2 (Wii)", "Super Mario Odyssey (Switch)"];

let list = document.getElementById("mario_ranked_list");

var fragmentedList = document.createDocumentFragment();

for(i = 0; i < rankedList.length; i++) {
    var li = document.createElement("li");
    li.textContent = rankedList(i);
    fragmentedList.appendChild(li);
}

li.appendChild(fragmentedList);