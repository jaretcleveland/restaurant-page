export default function loadAbout() {
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
    heroHeading.textContent = "About";

    const heroSubheading = document.createElement("p");
    heroSubheading.textContent = "Manager: Cleavon Little. He is the manager of McDowell's and is responsible for overseeing the day-to-day operations of the restaurant.";

    const heroSubtext = document.createElement("p");
    heroSubtext.textContent = "Employee of the Month: Akeem Joffer. He is the employee of the month and is recognized for his outstanding performance and dedication to providing excellent customer service.";


    heroText.append(heroEyebrow, heroHeading, heroSubheading, heroSubtext);
    hero.append(heroImage, heroText);

    content.appendChild(hero); // Appends the 'hero' element to the 'content' element in the DOM.

    return hero; // Returns the 'content' element, which now contains the newly created 'hero' element and its children.
}