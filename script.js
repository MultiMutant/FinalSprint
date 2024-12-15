// script.js
document.addEventListener("DOMContentLoaded", () => {
    const includeHTML = async (selector, file) => {
      const element = document.querySelector(selector);
      if (element) {
        const response = await fetch(file);
        if (response.ok) {
          element.innerHTML = await response.text();
        }
      }
    };
  
    includeHTML("header", "header.html");
    includeHTML("footer", "footer.html");
  });
  