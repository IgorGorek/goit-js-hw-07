
const categoriesList = document.querySelectorAll("#categories .item");
categoriesList.forEach(category => {
  const categoryTitle = category.querySelector("h2").textContent;
    const categoryItems = category.querySelectorAll("ul li");
    
  console.log(`Number of categories: ${categoriesList.length}`);
  console.log(`Category: ${categoryTitle}`);
  console.log(`Number of items: ${categoryItems.length}`);
});
