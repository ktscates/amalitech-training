document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("gallery-container");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("caption");
  const closeBtn = document.getElementById("close");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  // Array to store image data
  const images = [
    {
      full: "https://www.bornfree.org.uk/wp-content/uploads/2023/09/Web-image-iStock-492611032.jpg",
      thumb:
        "https://www.bornfree.org.uk/wp-content/uploads/2023/09/Web-image-iStock-492611032.jpg",
      caption: "A majestic Lion",
    },
    {
      full: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6E3379DBFDA41CF305BFD7FE6D14FDB5F901F0CDC9B27C66D7E6FBEA2864B4F2/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
      thumb:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6E3379DBFDA41CF305BFD7FE6D14FDB5F901F0CDC9B27C66D7E6FBEA2864B4F2/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
      caption: "The Lion King",
    },
    {
      full: "https://cdn.motor1.com/images/mgl/Rq6qQe/s1/2024-jeep-wrangler-euro-spec.webp",
      thumb:
        "https://cdn.motor1.com/images/mgl/Rq6qQe/s1/2024-jeep-wrangler-euro-spec.webp",
      caption: "2024 Jeep Wrangler",
    },
    {
      full: "https://www.21kschool.com/ru/wp-content/uploads/sites/7/2024/03/What-Is-Block-Coding-For-Kids_Guide-To-Get-Started-With-Learning-Block-Coding.jpg",
      thumb:
        "https://www.21kschool.com/ru/wp-content/uploads/sites/7/2024/03/What-Is-Block-Coding-For-Kids_Guide-To-Get-Started-With-Learning-Block-Coding.jpg",
      caption: "Coding for kids",
    },
    {
      full: "https://blog.hubspot.com/hs-fs/hubfs/how-to-start-coding-1.jpg?width=595&height=400&name=how-to-start-coding-1.jpg",
      thumb:
        "https://blog.hubspot.com/hs-fs/hubfs/how-to-start-coding-1.jpg?width=595&height=400&name=how-to-start-coding-1.jpg",
      caption: "How start Coding?",
    },
    {
      full: "https://miro.medium.com/v2/resize:fit:1024/1*99VvgE1zh2bvl8_6V0G00A.png",
      thumb:
        "https://miro.medium.com/v2/resize:fit:1024/1*99VvgE1zh2bvl8_6V0G00A.png",
      caption: "Anonymous",
    },
    {
      full: "https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/Hackers/Hacker-Hero-a1.png?width=1200&name=Hacker-Hero-a1.png",
      thumb:
        "https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/Hackers/Hacker-Hero-a1.png?width=1200&name=Hacker-Hero-a1.png",
      caption: "What is Hacking?",
    },
    {
      full: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
      thumb:
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
      caption: "Vibrant colors",
    },
    {
      full: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
      thumb:
        "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
      caption: "The Cool Cat",
    },
    {
      full: "https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/666306/grid_0_3.png?w=608&ar=default&fit=crop&crop=faces&auto=format",
      thumb:
        "https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/666306/grid_0_3.png?w=608&ar=default&fit=crop&crop=faces&auto=format",
      caption: "Ai Generated Art",
    },
  ];

  let currentIndex = 0;

  // Function to create and display thumbnails
  function displayThumbnails() {
    images.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = image.thumb;
      img.alt = image.caption;
      img.classList.add("thumbnail");
      img.addEventListener("click", () => openLightbox(index));
      galleryContainer.appendChild(img);
    });
  }

  // Function to open the lightbox
  function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    updateLightbox();
  }

  // Function to update lightbox content
  function updateLightbox() {
    lightboxImg.src = images[currentIndex].full;
    caption.textContent = images[currentIndex].caption;
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display =
      currentIndex === images.length - 1 ? "none" : "block";
  }

  // Function to close the lightbox
  function closeLightbox() {
    lightbox.style.display = "none";
  }

  // Event listeners for navigation and close buttons
  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateLightbox();
    }
  });
  nextBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateLightbox();
    }
  });

  // Initialize gallery
  displayThumbnails();
});
