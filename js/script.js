var search_wrap = document.querySelector(".search_wrap");
var button_search = document.querySelector(".button_search");
var date_in = document.getElementById("search_data_check-in");
var date_out = document.getElementById("search_data_check-out");
var form = document.querySelector(".search_form");

button_search.addEventListener("click",function(evt){
  evt.preventDefault();
  search_wrap.classList.toggle("show");
  search_wrap.classList.remove("form_error");
});

form.addEventListener("submit", function(evt){
  if (!date_in.value || !date_out.value){
    evt.preventDefault();
    search_wrap.classList.add("form_error");
    setTimeout(function () {
      search_wrap.classList.remove("form_error");
    }, 600);
  } else {
    }
  });
