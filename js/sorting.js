function sortModelsByName() {
    const modelSections = document.querySelectorAll('.ourmodels');

    const modelArray = Array.from(modelSections);

    // Sort the array by model name
    modelArray.sort((a, b) => {
        const nameA = a.querySelector('h2').textContent.toUpperCase();
        const nameB = b.querySelector('h2').textContent.toUpperCase();
        return nameA.localeCompare(nameB);
    });

    // Reorder the model sections on the page
    const parentElement = modelSections[0].parentElement;
    parentElement.innerHTML = '';
    modelArray.forEach((model) => parentElement.appendChild(model));
}

function sortModelsByPrice() {
    const modelSections = document.querySelectorAll('.ourmodels');

    const modelArray = Array.from(modelSections);

    // Sort the array by model price
    modelArray.sort((a, b) => {
        const priceA = a.querySelector('.price').textContent;
        const priceB = b.querySelector('.price').textContent;
        return priceA - priceB;
    });

    // Reorder the model sections on the page
    const parentElement = modelSections[0].parentElement;
    parentElement.innerHTML = '';
    modelArray.forEach((model) => parentElement.appendChild(model));
}
