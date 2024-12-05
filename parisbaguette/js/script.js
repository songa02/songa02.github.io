window.onload = function() {
  const mainImg = document.getElementById("main-img");
    const mainTextL = document.getElementById("maintext-l");
    const mainTextR = document.querySelectorAll(".maintext-r");

    setTimeout(() => {
        mainImg.style.width = "950px"; 
    }, 100);

    mainImg.addEventListener("transitionend", () => {
        if (mainImg.style.width === "950px") {
            
            mainTextL.classList.add("active");

            
            setTimeout(() => {
                mainTextR.forEach((text, index) => {
                    setTimeout(() => {
                        text.classList.add("active");
                    }, index * 500);
                });
            }, 1000);
        }
    });
};
  