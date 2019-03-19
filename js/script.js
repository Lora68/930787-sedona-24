var search_wrap = document.querySelector(".search_wrap");
var button_search = document.querySelector(".button_search");
var date_in = document.getElementById("search_data_check-in");
var date_out = document.getElementById("search_data_check-out");
var form = document.querySelector(".button-submit");

button_search.addEventListener("click",function(evt){
  evt.preventDefault();
  search_wrap.classList.toggle("show");
  search_wrap.classList.remove("form_error");
});
