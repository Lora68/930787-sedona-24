var search_wrap=document.querySelector(".search_wrap"),button_search=document.querySelector(".button_search"),date_in=document.getElementById("search_data_check-in"),date_out=document.getElementById("search_data_check-out"),form=document.querySelector(".button-submit");button_search.addEventListener("click",function(e){e.preventDefault(),search_wrap.classList.toggle("show"),search_wrap.classList.remove("form_error")});
