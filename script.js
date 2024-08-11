const header = document.querySelector(".header");
const ques = document.querySelectorAll(".ques");
ques.forEach((ques) => {
  ques.addEventListener("click", function () {
    const ans = ques.nextElementSibling;
   if (ans.style.display == "block") {
      ans.style.display = "none";
    } else {
      ans.style.display = "block";
    }
  });
});
