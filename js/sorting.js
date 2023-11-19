// Function to sort models by name
function sortModelsByName() {
    // Get all model sections
    const modelSections = document.querySelectorAll('.container.d-flex.align-items-center.justify-content-between');

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
    const modelSections = document.querySelectorAll('.container.d-flex.align-items-center.justify-content-between');

    // Convert the NodeList to an array
    const modelArray = Array.from(modelSections);

    // Sort the array by model price
    modelArray.sort((a, b) => {
        const priceA = parseInt(a.querySelector('table tr:nth-child(5) td:nth-child(2)').textContent.replace(/\D/g, ''));
        const priceB = parseInt(b.querySelector('table tr:nth-child(5) td:nth-child(2)').textContent.replace(/\D/g, ''));
        return priceA - priceB;
    });

    // Reorder the model sections on the page
    const parentElement = modelSections[0].parentElement;
    parentElement.innerHTML = '';
    modelArray.forEach((model) => parentElement.appendChild(model));
}
