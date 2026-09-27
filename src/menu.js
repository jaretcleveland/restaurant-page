export default function loadMenu() {
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
    heroEyebrow.textContent = "I'm Liking It!"; // Sets the text content of 'heroEyebrow'.

    const heroHeading = document.createElement("h1");
    heroHeading.textContent = "Menu";

    const heroSubtext = document.createElement("p");
    heroSubtext.textContent = "The Big Mick: Two all-beef patties, special sauce, lettuce, cheese, pickles and onions on bun without sesame seeds.";

    const heroSubheading = document.createElement("p");
    heroSubheading.textContent = "Sexual Chocolate Shake: A rich and decadent chocolate milkshake topped with whipped cream and a cherry.";

    const heroSubheading2 = document.createElement("p");
    heroSubheading2.textContent = "Golden Arcs Fries: Crispy golden fries with a side of our special sauce.";

    const heroSubheading3 = document.createElement("p");
    heroSubheading3.textContent = "McDowell's Milkshake: Creamy milkshake made with real ice cream and your choice of flavor.";

    heroText.append(heroEyebrow, heroHeading, heroSubtext, heroSubheading, heroSubheading2, heroSubheading3)   ;
    hero.append(heroImage, heroText);

    content.appendChild(hero); // Appends the 'hero' element to the 'content' element in the DOM.

    return hero; // Returns the 'content' element, which now contains the newly created 'hero' element and its children.
}