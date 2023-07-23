const data = localStorage.getItem("carList");
let carList = [];

if (data !== "" && data !== null) {
    carList = JSON.parse(data);
}

function createNewEntry(obj) {
    const row = document.getElementById("row");

    const col = document.createElement("div");
    col.classList.add("col");
    col.setAttribute("id", "col__element");

    row.append(col);

    const card = document.createElement("div");
    card.classList.add("card", "h-100", "border-primary", "mb-3");
    card.setAttribute("id", "card__element");

    col.append(card);

    const img = document.createElement("img");
    img.setAttribute("src", "");
    img.setAttribute("alt", "photo");
    img.classList.add("card-img-top");
    card.append(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.append(cardBody);

    const ul = document.createElement("ul");
    ul.classList.add("description");
    cardBody.append(ul);

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");

    const liArray = [li1, li2, li3, li4];
    liArray.forEach((el) => {
        el.classList.add("description__items");
        ul.append(el);
    });

    const postInfo = document.createElement("div");
    postInfo.classList.add("post-info");
    postInfo.textContent = "Posted:";
    card.append(postInfo);

    const spanDate = document.createElement("span");
    spanDate.textContent = "20/07/2023";
    postInfo.append(spanDate);

    li1.textContent = "Name: " + obj.name;
    li2.textContent = "Date: " + obj.date;
    li3.textContent = "Country: " + obj.country;
    li4.textContent = "Cost: " + obj.cost + " $";
    img.src = obj.link;
    spanDate.textContent = obj.time;

}

for (const entry of carList) {
    createNewEntry(entry);
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const carNameInput = document.getElementById("car__name");
    const dateInput = document.getElementById("car__date");
    const countryInput = document.getElementById("car__country");
    const costInput = document.getElementById("car__cost");
    const linkInput = document.getElementById("car__image-url");

    const createDate = new Date();
    const options = {
        hour: "numeric",
        minute: "numeric",
    };

    const currentDate = createDate.toLocaleDateString("ru-RU", options);

    const entryObject = {
        name: carNameInput.value,
        date: dateInput.value,
        country: countryInput.value,
        cost: costInput.value,
        link: linkInput.value,
        time: currentDate,
    };

    carList.push(entryObject);
    localStorage.setItem("carList", JSON.stringify(carList));

    createNewEntry(entryObject);

    carNameInput.value = "";
    dateInput.value = "";
    countryInput.value = "";
    costInput.value = "";
    linkInput.value = "";

    getCounter(carList);

    location.reload();
});

function getCounter(arr) {
    const counterNumber = document.getElementById("counter__number");
    const arrayNumber = arr.length;
    counterNumber.textContent = arrayNumber;
}
getCounter(carList);
