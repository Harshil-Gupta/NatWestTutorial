const itemsPerPage = 2; // Number of cards to display per page
let currentPage = 1;

async function handleKeyDown(event) {
    if (event.keyCode === 13) {
        await getData();
    }
}

async function getData() {
    let num1 = parseInt(document.getElementById("num").value);
    console.log(num1);
    const resp = await fetch('https://dummyjson.com/products/' + num1);
    const data = await resp.json();

    //Creating card element
    let card = document.createElement("div");
    card.className = "card";
    card.style = "width: 18rem;";

    // Create and set the image element
    let img = document.createElement("img");
    img.src = data.images[0];
    img.className = "card-img-top";
    card.appendChild(img);

    // Create and set the card body element
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = data.title;
    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = data.description;
    cardBody.appendChild(cardText);

    card.appendChild(cardBody);
    document.getElementById("productContainer").appendChild(card);
    updatePagination();
}

function updatePagination() {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = ""; // Clear existing pagination links

    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Previous page link
    const previousPageLink = createPaginationLink("Previous", currentPage - 1);
    paginationContainer.appendChild(previousPageLink);

    // Page number links
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = createPaginationLink(i, i);
        paginationContainer.appendChild(pageLink);
    }
    const nextPageLink = createPaginationLink("Next", currentPage + 1);
    paginationContainer.appendChild(nextPageLink);
}

function createPaginationLink(label, page) {
    const li = document.createElement("li");
    li.className = "page-item";
    const a = document.createElement("a");
    a.className = "page-link";
    a.href = "#";
    a.textContent = label;
    a.onclick = () => {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
            getData();
        }
    };
    li.appendChild(a);
    return li;
}