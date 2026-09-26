const content = document.querySelector("#content"); // Selects the element with the ID "content" from the DOM and assigns it to the variable 'content'.

const hero = document.createElement("hero");
hero.classList.add("hero"); 

const heroImage = document.createElement("img");
heroImage.src = "https://i.ebayimg.com/images/g/dp8AAOSwyLtZlGl7/s-l1200.jpg";
heroImage.alt = "McDowell's restaurant logo from the movie 'Coming to America'"; 
heroImage.classList.add("hero-image");

const heroText = document.createElement("div");
heroText.classList.add("hero-text"); 

const heroEyebrow = document.createElement("p"); // Creates a new <p> element and assigns it to 'heroEyebrow'.
heroEyebrow.classList.add("hero-eyebrow"); // Adds the class "hero-eyebrow" to the 'heroEyebrow' element.
heroEyebrow.textContent = "85-07 Queens Boulevard in Elmhurst, Queens, New York"; // Sets the text content of 'heroEyebrow'.

const heroHeading = document.createElement("h1");
heroHeading.textContent = "McDowell's";

const heroSubheading = document.createElement("p");
heroSubheading.textContent = "Come on down to McDowell's, where the food is great and the prices are low!";

const heroSubtext = document.createElement("p");
heroSubtext.textContent = "They got the Golden Arches, mine is the Golden Arcs. They got the Big Mac, I got the Big Mick. We both got two all-beef patties, special sauce, lettuce, cheese, pickles and onions, but their buns have sesame seeds. My buns have no seeds.";


heroText.append(heroEyebrow, heroHeading, heroSubheading, heroSubtext);
hero.append(heroImage, heroText);

content.appendChild(hero); // Appends the 'hero' element to the 'content' element in the DOM.