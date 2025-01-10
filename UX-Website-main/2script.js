const plateInput = document.getElementById("plateInput");
const frontPlate = document.getElementById("frontPlate");
const backPlate = document.getElementById("backPlate");

// Update plate preview dynamically
plateInput.addEventListener("input", function () {
    const plateText = plateInput.value.trim();
    frontPlate.textContent = plateText || "FRONT";
    backPlate.textContent = plateText || "BACK";
});

// Plate type selection
const plateType = document.getElementById("plateType");
plateType.addEventListener("change", function () {
    const value = plateType.value;
    if (value === "front") {
        frontPlate.style.display = "flex";
        backPlate.style.display = "none";
    } else if (value === "rear") {
        frontPlate.style.display = "none";
        backPlate.style.display = "flex";
    } else {
        frontPlate.style.display = "flex";
        backPlate.style.display = "flex";
    }
});

