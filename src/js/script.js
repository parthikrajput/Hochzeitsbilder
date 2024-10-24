document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const nav = document.querySelector("nav");

  menuIcon.addEventListener("click", () => {
    nav.classList.remove("left-[-1000px]");
    nav.classList.add("left-0");
    nav.classList.add("border-r-2");
    nav.classList.add("border-white");
    nav.classList.add("border-solid");
  });

  closeIcon.addEventListener("click", () => {
    nav.classList.remove("left-0");
    nav.classList.add("left-[-1000px]");
  });
});

document.querySelectorAll(".accrodind .tilte").forEach(function (title, index) {
  const answer = title.nextElementSibling;
  const icon = title.querySelector(".icon");

  if (index === 0) {
    answer.classList.remove("hidden");
    icon.innerHTML = `
           <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.25 2C20.25 2.84375 19.5469 3.5 18.75 3.5H2.25C1.40625 3.5 0.75 2.84375 0.75 2C0.75 1.20312 1.40625 0.5 2.25 0.5H18.75C19.5469 0.5 20.25 1.20312 20.25 2Z" fill="#212121"/>
            </svg>
        `;
    icon.classList.add("open");
  }

  title.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const icon = this.querySelector(".icon");

    document
      .querySelectorAll(".accrodind .tilte")
      .forEach(function (otherTitle) {
        const otherAnswer = otherTitle.nextElementSibling;
        const otherIcon = otherTitle.querySelector(".icon");

        if (otherAnswer !== answer) {
          otherAnswer.classList.add("hidden");
          otherIcon.classList.remove("open");
          otherIcon.innerHTML = `
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.75V8.5H18.75C19.5469 8.5 20.25 9.20312 20.25 10C20.25 10.8438 19.5469 11.5 18.75 11.5H12V18.25C12 19.0938 11.2969 19.75 10.5 19.75C9.65625 19.75 9 19.0938 9 18.25V11.5H2.25C1.40625 11.5 0.75 10.8438 0.75 10C0.75 9.20312 1.40625 8.5 2.25 8.5H9V1.75C9 0.953125 9.65625 0.25 10.5 0.25C11.2969 0.25 12 0.953125 12 1.75Z" fill="#212121"/>
            </svg>
          `;
        }
      });

    answer.classList.toggle("hidden");

    if (icon.classList.contains("open")) {
      icon.innerHTML = `
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.75V8.5H18.75C19.5469 8.5 20.25 9.20312 20.25 10C20.25 10.8438 19.5469 11.5 18.75 11.5H12V18.25C12 19.0938 11.2969 19.75 10.5 19.75C9.65625 19.75 9 19.0938 9 18.25V11.5H2.25C1.40625 11.5 0.75 10.8438 0.75 10C0.75 9.20312 1.40625 8.5 2.25 8.5H9V1.75C9 0.953125 9.65625 0.25 10.5 0.25C11.2969 0.25 12 0.953125 12 1.75Z" fill="#212121"/>
            </svg>
          `;
      icon.classList.remove("open");
    } else {
      icon.innerHTML = `
            <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.25 2C20.25 2.84375 19.5469 3.5 18.75 3.5H2.25C1.40625 3.5 0.75 2.84375 0.75 2C0.75 1.20312 1.40625 0.5 2.25 0.5H18.75C19.5469 0.5 20.25 1.20312 20.25 2Z" fill="#212121"/>
            </svg>
          `;
      icon.classList.add("open");
    }
  });
});
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 130) {
    header.style.position = "fixed";
    header.style.left = "0";
    header.style.right = "0";
    header.style.top = "0";
    header.style.zIndex = "99999";
    header.style.boxShadow =
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgb(16, 39, 29, 0.23) 0px 6px 6px";
  } else {
    header.style.position = "";
    header.style.left = "";
    header.style.right = "";
    header.style.top = "";
    header.style.zIndex = "";
    header.style.boxShadow = "";
  }
});
