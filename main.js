
<script src="https://kit.fontawesome.com/92303a6889.js" crossorigin="anonymous"></script>

 
//Probe varias funciones, y NO PUDE LOGRARLO!!! :(

const refresh = document.querySelector(".refresh)");
refresh.addEventListener("click", function () {
  location.reload();
})

const title_details_= document.querySelector(".title_details");
const info_icons = document.querySelector(".info_icons");
const user_img = document.querySelector(".User_img");


//fetching api data 
fetch("https://randomuser.me/api/?gender=female")
.then(response => response.json())
.then(function (data)){
console.log(data)

     let userData = data.results[0];
       console.log(userData);
       let imgSrc = '<img src="${userData.picture.medium}">';
       let name_ = '${userData.name.first} ${userData.name.last}'};
       let content_ =  '
       let birthay_ = {userData.age};

       <div class="icon user_ active" data-title="Hi, My name is" data-value="${userData.name.first} $(userData.name.last}"></div> 
       <div class="icon email_" data-title="My email address is" data-value="${userData.email}"></div>
       <div class="icon birthday_" data-title="My age is" data-value="${userData.dob.age}yrs"></div> 
       <div class="icon location_" data-title="My Adress is" data-value="${userData.location.country}"></div>
       <div class="icon phone_" data-title="My phone number is" data-value="${userData.cell}"></div>
        '

        info_icons.innerHTML = content_;
        user_img.innerHTML = imgSrc;
        title_details_.innerHTML = name_;        
       
      
//hover charge details

      const icon = document.querySelectorAll(".icon");
      const title_info = document.querySelector(".title_info");
      const title_details = document.querySelector(".title_details");
   
      icon.forEach(function (item) {
        item.addEventListener("mouseover", function () {
          let titleData = item.getAttribute("data-title");
          let titleValue = item.getAttribute("data-value");


          title_info.innerHTML = titleData;
          title_details.innerHTML = dataValue;

          let activeClass = document.querySelectorAll(".active");

          activeClass.forEach(function (active_){
            active_.className = active_.className.replace("active", "");
          })
          item.className += ".active";
    });
      
}) 

    

