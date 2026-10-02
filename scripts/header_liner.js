const elements_and_lengths = [
    ["h1", 100],
    ["h2", 75],
    ["h3", 65],
    ["h4", 50],
    ["h5", 40],
];

elements_and_lengths.forEach((options) => {
    const elements = document.querySelectorAll(options[0]);
    elements.forEach((element) => {
        const newElement = document.createElement('hr');
        newElement.style.width = options[1] + '%'
        newElement.style.align = "left";
        element.appendChild(newElement);
    });
});