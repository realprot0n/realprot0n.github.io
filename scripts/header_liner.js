const headers_and_lengths = [
    ["h1", 90],
    ["h2", 75],
    ["h3", 65],
    ["h4", 50],
    ["h5", 40],
];

headers_and_lengths.forEach((options) => {
    console.log(options);
    const elements = document.querySelectorAll(options[0]);
    elements.forEach((element) => {
        console.log("asfd");
        console.log(element);
        const newElement = document.createElement('hr');
        newElement.style.width = options[1] + '%'
        newElement.style.align = "left";
        element.appendChild(newElement);
    })
})