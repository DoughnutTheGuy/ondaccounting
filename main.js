window.onload = (event) => {
   var popup_menu = document.querySelector("#menu-phone");
   var logo = document.querySelector("#logo");
   var links = document.querySelectorAll(".mobile-links");

   window.onscroll = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
         document.getElementById("navigation").classList.add("unshow")
         document.getElementById("nav-line").classList.add("unshow");;
      } else {
         document.getElementById("nav-line").classList.remove("unshow");
         document.getElementById("navigation").classList.remove("unshow");
      }

      if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 50) {
         document.getElementById("navigation").classList.add("unshow")
         
      } else {
         document.getElementById("nav-line").classList.remove("unshow");
   
      }
   };

   links.forEach((ele) => {
      ele.addEventListener("click", () => {
         popup_menu.classList.remove("show-menu");
         logo.classList.remove("rotate");
      });
   });

   logo.addEventListener("click", () => {
      if (popup_menu.classList.contains("show-menu")) {
         popup_menu.classList.remove("show-menu");
         logo.classList.remove("rotate");
      } else {
         popup_menu.classList.add("show-menu");
         logo.classList.add("rotate");
      }
   });

};