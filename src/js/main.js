const data = localStorage.getItem("carList");
let carList = [];

if (data !== "" && data !== null) {
    carList = JSON.parse(data);
}

function createNewEntry(obj) {
    const table = document.getElementById("table");
    const img = document.createElement("img");
    img.style["width"] = "150px";
    img.setAttribute("src", "");
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    cell5.append(img);
    cell5.style["width"] = "150px";

    cell1.textContent = obj.name;
    cell2.textContent = obj.date;
    cell3.textContent = obj.country;
    cell4.textContent = obj.select;
    img.src = obj.link;
}

for (const entry of carList) {
    createNewEntry(entry);
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const carNameInput = document.getElementById("car__name");
    const dateInput = document.getElementById("car__date");
    const countryInput = document.getElementById("car__country");
    const selectInput = document.getElementById("form__select");
    const linkInput = document.getElementById("car__image-url");

    const entryObject = {
        name: carNameInput.value,
        date: dateInput.value,
        country: countryInput.value,
        select: selectInput.value,
        link: linkInput.value,
    };

    carList.push(entryObject);
    localStorage.setItem("carList", JSON.stringify(carList));

    createNewEntry(entryObject);

    carNameInput.value = "";
    dateInput.value = "";
    countryInput.value = "";
    linkInput.value = "";
});
