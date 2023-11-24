// Function to sort models by name
function sortModelsByName() {
    // Get all model sections
    const modelSections = document.querySelectorAll('.ourmodels');

    // Convert the NodeList to an array
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

// Function to sort models by price
function sortModelsByPrice() {
    // Get all model sections
    const modelSections = document.querySelectorAll('.ourmodels');

    // Convert the NodeList to an array
    const modelArray = Array.from(modelSections);

    // Sort the array by model price
    modelArray.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.price').textContent.replace(/\D/g, ''));
        const priceB = parseInt(b.querySelector('.price').textContent.replace(/\D/g, ''));
        return priceA - priceB;
    });

    // Reorder the model sections on the page
    const parentElement = modelSections[0].parentElement;
    parentElement.innerHTML = '';
    modelArray.forEach((model) => parentElement.appendChild(model));
}
