// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", function() {
  document.getElementById("intro").textContent = "The text has been successfully changed!";
});

// Modify CSS styles via JavaScript
document.getElementById("change-style-btn").addEventListener("click", function() {
  const styleTarget = document.getElementById("style-target");
  styleTarget.style.color = "dodgerblue";
  styleTarget.style.fontWeight = "bold";
  styleTarget.style.backgroundColor = "#f0f8ff";
});

// Add or remove an element
document.getElementById("toggle-element-btn").addEventListener("click", function() {
  const container = document.getElementById("dynamic-container");
  const existingElement = document.getElementById("dynamic-paragraph");

  if (existingElement) {
    container.removeChild(existingElement);
  } else {
    const newParagraph = document.createElement("p");
    newParagraph.id = "dynamic-paragraph";
    newParagraph.textContent = "This element was added dynamically!";
    container.appendChild(newParagraph);
  }
});
