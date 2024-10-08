let signup_nav = document.getElementById("signup-nav")
let all_content = document.getElementById("all-content-container")
let login_nav =document.getElementById("nav-login")
let prayer_times = document.getElementById("prayer_times")
let pray_btn = document.getElementById("pray-btn")

let weather_nav = document.getElementById("weather-nav")
let weather_btn = document.getElementById("weather-btn")
let home_nav = document.getElementById("home-nav")
weather_nav.addEventListener("click", e=>{
   createWeatherPage("","Riyadh")
})


prayer_times.addEventListener("click", e=>{
    createPrayer("")  
})

pray_btn.addEventListener("click",e=> {
    createPrayer("")
})

weather_btn.addEventListener("click",(e)=>{
    createWeatherPage("","Riyadh")
})

home_nav.addEventListener("click",e=>{
   createHomePage()
})


function signup_page(){
    all_content.innerHTML=""
    let row = document.createElement("div");
    let signup_sheet = document.createElement("div");
    let header = document.createElement("h2");


    let email = document.createElement("input")
    let re_email = document.createElement("input")
    let password = document.createElement("input")
    let re_password = document.createElement("input")
    let username = document.createElement("input")
    let signup_sheet_button = document.createElement("button")

    all_content.appendChild(row)

    row.appendChild(signup_sheet)
    
    signup_sheet.appendChild(header)
    signup_sheet.appendChild(username)
    signup_sheet.appendChild(email)
    signup_sheet.appendChild(re_email)
    signup_sheet.appendChild(password)
    signup_sheet.appendChild(re_password)
   
    signup_sheet.appendChild(signup_sheet_button)


    username.setAttribute("placeholder","username")
    email.setAttribute("placeholder","email")
    re_email.setAttribute("placeholder","retype email")
    password.setAttribute("placeholder","password")
    re_password.setAttribute("placeholder","retype password")
    
    signup_sheet_button.textContent="Sign-up"

    email.setAttribute("type","email")
    re_email.setAttribute("type","email")
    password.setAttribute("type","password")
    re_password.setAttribute("type","password")
    username.setAttribute("type","text")
    signup_sheet_button.textContent="Sign-up"

    email.classList.add("col-7","mt-2")
    re_email.classList.add("col-7","mt-2")
    password.classList.add("col-7","mt-2")
    re_password.classList.add("col-7","mt-2")
    username.classList.add("col-7","mt-2")

    signup_sheet_button.classList.add(..."offset-3 btn btn-secondary col-3 mt-3 mb-3".split(" "))
    row.classList.add(..."row g-0 justify-content-center".split(" "))
    signup_sheet.classList.add(..."signup col-5 bg-signup justify-content-center d-flex row mt-5 justify-content-center".split(" "))
    header.classList.add(..."mt-5 mb-5".split(" "))

    header.textContent="Sign Up sheet"
    
    signup_sheet_button.textContent="Sign-up"


    signup_sheet_button.addEventListener("click", e=>{
       let empty = email.value.length===0 || password.value.length===0 || re_email.value.length===0 || re_password.value.length===0
       let valid_lengths = username.value.length >3 && password.value.length >4

       let valid_email =String(email.value)
       .toLowerCase()
       .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       );

       let hasCapital = (email.value) === (email.value.toLowerCase())
    
       let emailsMatch = email.value=== re_email.value
       let passwordsMatch = password.value===  password.value
                

       if(empty){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "empty input",
            footer: 'make sure all fields are full'
          });
          return 
       }
       if(!valid_lengths){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: 'Password must be longer than 4 and email longer than 3'
          });
          return 

       }

       if(!valid_email){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: 'Invalid email. Make sure your email is valid'
          });
          return 
       }

       if(!hasCapital){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: 'User must contain Capital letter'
          });
          return 

       }

       if(!emailsMatch){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Emails don't match",
          });
          return 
       }

       if(!passwordsMatch){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "passwords don't match",
          });
          return 
       }

       fetch('https://66e8028eb17821a9d9daf072.mockapi.io/users', {
        method: 'POST',
        body: JSON.stringify({
         username: username.value,
         password:password.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)

            createLogin()


        })


    })
    // <div class="row g-0 justify-content-center">
    //         <div class="signup col-5 bg-signup justify-content-center d-flex row mt-5  justify-content-center">
    //             <h2 class="text-white mt-5 mb-5">Sign Up sheet</h2>
    //             <input type="email" name="email" id="email" class="col-7 mt-2" placeholder="email">
    //             <input type="email" name=""      id="re-email" class="col-7 mt-2" placeholder="re type email">
    //             <input type="password" name=""      id="password" class="col-7 mt-2" placeholder="password">
    //             <input type="password" name=""      id="re-password" class="col-7 mt-2" placeholder="re type password">
    //             <input type="username" name=""      id="username" class="col-7 mt-2 mb-4" placeholder="username">
    //             <button class="offset-3 btn btn-secondary col-3 mt-3 mb-3">Sign-Up</button>

    //         </div>
    //     </div>


}

login_nav.addEventListener("click", e=>{
    e.preventDefault()
    createLogin()
})

signup_nav.addEventListener("click",e=>{
    e.preventDefault()
    signup_page()
} )


function createLogin(){
    all_content.innerHTML=""

    let row = document.createElement("div");
    let signup_sheet = document.createElement("div");
    let header = document.createElement("h2");

    let password = document.createElement("input")
    let username = document.createElement("input")
    let signup_sheet_button = document.createElement("button")

    all_content.appendChild(row)

    row.appendChild(signup_sheet)
    
    signup_sheet.appendChild(header)
    signup_sheet.appendChild(username)
    signup_sheet.appendChild(password)
    
   
    signup_sheet.appendChild(signup_sheet_button)


    username.setAttribute("placeholder","username")
    password.setAttribute("placeholder","password")

    
    password.setAttribute("type","password")
    username.setAttribute("type","text")
    signup_sheet_button.textContent="Log in"

    password.classList.add("col-7","mt-2")

    username.classList.add("col-7","mt-2")

    signup_sheet_button.classList.add(..."offset-3 btn btn-secondary col-3 mt-3 mb-3".split(" "))
    row.classList.add(..."row g-0 justify-content-center".split(" "))
    signup_sheet.classList.add(..."signup col-5 bg-signup justify-content-center d-flex row mt-5 justify-content-center".split(" "))
    header.classList.add(..."mt-5 mb-5".split(" "))

    header.textContent="Login Sheet"
    
    signup_sheet_button.textContent="login"

    signup_sheet_button.addEventListener("click",e=>{
        fetch(`https://66e8028eb17821a9d9daf072.mockapi.io/users/?username=${username.value}&password=${password.value}`)
        .then(res =>res.json())
        .then(data =>{
            console.log("loged in")
            console.log(data)
            all_content.innerHTML=""
            createPrayer(data[0].username)

        })

    })

  

}

function createPrayer(user){
    all_content.innerHTML=""
 let h1 = document.createElement("h2")
 let row = document.createElement("div")

 row.appendChild(h1)
 h1.textContent= "hello, "+ user? user : "all"

 all_content.appendChild(row)
    row.classList.add("d-flex","justify-content-center")
    all_content.classList.add("justify-content-center","d-flex")
 let fajr = document.createElement("h3")
 let thr = document.createElement("h3")
 let asr = document.createElement("h3")
 let maghrib = document.createElement("h3")
 let aisha = document.createElement("h3")
let card = document.createElement("div")


let fajr_span = document.createElement("span")
let thr_span = document.createElement("span")
let asr_span = document.createElement("span")
let maghrib_span = document.createElement("span")
let aisha_span = document.createElement("span")
let header = document.createElement("h2")
let date_hijri = document.createElement("h4")
let date_greg = document.createElement("h4")

all_content.appendChild(card)
    card.classList.add("card","mt-5")


    fajr.textContent=" fajr: "
    thr.textContent=" thr: "
    asr.textContent=" asr: "
    maghrib.textContent=" maghrib: "
    aisha.textContent=" aisha: "

    fajr.appendChild(fajr_span)
    thr.appendChild(thr_span)
    asr.appendChild(asr_span)
    maghrib.appendChild(maghrib_span)
    aisha.appendChild(aisha_span)

    header.textContent="Prayer Times"
    card.appendChild(header)
    date_hijri.textContent= " Date in hijri: "
    date_greg.textContent= " Date in gregorian:  "

    card.appendChild(date_greg)
    card.appendChild(date_hijri)
    card.appendChild(fajr)
    card.appendChild(thr)
    card.appendChild(asr)
    card.appendChild(maghrib)
    card.appendChild(aisha)
    let today = getTodayDate()

    row.classList.add("d-flex" ,"justify-content-content")
    //saudi  lat and long
    let latitude=23.8859;
    let longitude=45.0792
    fetch(`https://api.aladhan.com/v1/timings/${today}?latitude=${latitude}&longitude=${longitude}`)
    .then(res => res.json())
    .then(data =>{

        console.log("times")
        console.log(data.data.date.gregorian.date)
        let times = data.data.timings
        let hijri = data.data.date.hijri.date
        let gregorian = data.data.date.gregorian.date

        date_hijri.textContent= " Date in hijri: " + hijri
        date_greg.textContent= " Date in gregorian:  "+ gregorian
        fajr_span.textContent = times.Fajr
        thr_span.textContent = times.Dhuhr

        asr_span.textContent= times.Asr
        maghrib_span.textContent= times.Maghrib
        aisha_span.textContent=times.Isha
    })




}


function getTodayDate(){


    let today = new Date();
    console.log(today);

    let dd = today.getDate();
    let mm = today.getMonth() + 1;

    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;

    return today.replaceAll("/","-")

}



function createWeatherPage(user,city){
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5140811cdb1be090fe57f62cf9ecbb3`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)


        all_content.innerHTML=""
        let h1 = document.createElement("h2")
        let row = document.createElement("div")
       
        row.appendChild(h1)
        h1.textContent= "hello, "+ user? user : "all"
       
        all_content.appendChild(row)
           row.classList.add("d-flex","justify-content-center")
           all_content.classList.add("justify-content-center","d-flex")
        let lon = document.createElement("h3")
        let alt = document.createElement("h3")
        let current_city = document.createElement("h3")
        let temp_degree = document.createElement("h3")
        let temp_fh = document.createElement("h3")
        let humid = document.createElement("h3")

        let header = document.createElement("h2")
       let search_city_input = document.createElement("input")
       let search_city_btn = document.createElement("button")

       search_city_input.setAttribute("placeholder","search City")
       search_city_btn.textContent="Search"
       search_city_btn.classList.add("col-5")
       search_city_input.classList.add("col-5","offset-4","mt-4")
       search_city_btn.classList.add("col-5","offset-4","btn","btn-success","mt-2")



       let card = document.createElement("div")
       let lon_span = document.createElement("span")
       let alt_span = document.createElement("span")
       let current_city_span = document.createElement("span")
       let temp_degree_span = document.createElement("span")
       let temp_fh_span = document.createElement("span")
       let humid_span = document.createElement("span")
   
       
       all_content.appendChild(card)
           card.classList.add("card","mt-5")
       
       
           lon.textContent=" Lon: "
           alt.textContent=" Alt: "
           current_city.textContent=" City : "
           temp_degree.textContent=" Degrees: "
           temp_fh.textContent=" fahrenheit: "
           humid.textContent="humidity: "
       
           lon.appendChild(lon_span)
           alt.appendChild(alt_span)
           current_city.appendChild(current_city_span)
           temp_degree.appendChild(temp_degree_span)
           temp_fh.appendChild(temp_fh_span)

           lon_span.textContent=data.coord.lon
           alt_span.textContent=data.coord.lat

           current_city_span.textContent=data.name
           temp_degree_span.textContent=(data.main.temp-30)/2
           temp_fh_span.textContent=data.main.temp
           humid_span.textContent=data.main.humidity
       
        
           header.textContent="Weather: "
           card.appendChild(header)
      
       
           card.appendChild(lon)
           card.appendChild(alt)
           card.appendChild(current_city)
           card.appendChild(temp_degree)
           card.appendChild(temp_fh)
           card.appendChild(search_city_input)
           card.appendChild(search_city_btn)

           search_city_btn.addEventListener("click",e=>{
            createWeatherPage("",search_city_input.value)
           })
           row.classList.add("d-flex" ,"justify-content-content")
           
        
    })
}

function createHomePage (){
    all_content.innerHTML=""

    let h1 = document.createElement("h2")
    let row = document.createElement("div")
   
    row.appendChild(h1)
    h1.textContent= "hello, "+ user? user : "all"

    all_content.appendChild(row)
       row.classList.add("d-flex","justify-content-center")
       all_content.classList.add("justify-content-center","d-flex")
    let fajr = document.createElement("h3")
    let thr = document.createElement("h3")
    let asr = document.createElement("h3")
    let maghrib = document.createElement("h3")
    let aisha = document.createElement("h3")
   let card = document.createElement("div")
   
    
    // <div class="background-img row">

    //     <div class="prayer">
    //     </div>
    //     <div class="prayer-filter"></div>
    //     <button class="prayer-title btn btn-success" id="pray-btn"> Pray on Time</button>

    // </div>

       
    // <div class="background-img row">
    //     <div class="weather">
    //     </div>
    //     <div class="weather-filter"></div>
    //     <button class="weather-title btn btn-info" id="weather-btn">Know the Weather</button>
    // </div>
}