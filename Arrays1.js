// Array 
 
// array literal
// geting any random element

const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Brown",
        "Black",
        "White",
        "Gray",
        "Cyan"
    ];

    const colorPicker = function (colorArray) {
        const randomNumber = Math.floor(Math.random() * colorArray.length);
        console.log(colorArray[randomNumber]);
    }

    colorPicker(colors);


