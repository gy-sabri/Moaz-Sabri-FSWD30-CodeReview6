
var Cds = [
    {
        Title: "Dylan", 
        Author: "Bob Dylan",
        Genre: "rock",
        Publisher: " - ",
        Image: "https://lh6.googleusercontent.com/o9wBLZBFOvGfvgQ3JlU-MUJMlBU0I-GgbqEzmm9-Icg1rZWR91LtnNAGtLW3BoFOGJllYpcl7R3kOaTIpFS-Vdy5B-lXSPBQBVJb7oPZZnN8VtN6infy2yYVdPZqn9SD2KbPVQIU",
        Rating: " - ",
        Time: "34"
        
    },{
        Title: "Diamond Life", 
        Author: "Sade",
        Genre: "smooth soul",
        Publisher: "Epic",
        Image: "https://lh4.googleusercontent.com/-QEpPd7P3zI8NQXN7TYzx8g2GuTU5PAFH_FSKewOG9fOjNYb21Rfh4eMEDQNLCto8uupzJ_kN21a5XprX0dFLcrnHNq5fpig2TKBOLOSb9bXe0a3fK1cqJs9vBPTLqAtm7Mo46lv",
        Rating: "5",
        Time: "45"
    }
];

var i = 0
for (i = 0; i < Cds.length; i++) {
    
document.getElementById("Cds").innerHTML += ('<div class="card float-left"><img class="card-img-top" src="'+ Cds[i].Image +'" alt="Card image cap"><div class="card-body"><h3 class="card-title">Title: '+ Cds[i].Title  +'</h3><h4 class="card-title">Author: '+ Cds[i].Author  +'</h4></div><ul class="list-group list-group-flush"><li class="list-group-item">Genre: '+ Cds[i].Genre +'</li><li class="list-group-item">Publisher: '+ Cds[i].Publisher +'</li><li class="list-group-item">Rating: '+ Cds[i].Rating +'</li><li class="list-group-item">Time: '+ Cds[i].Time +'</li></ul></div></div>');
    
};

function myCds() {
    Title = document.getElementById("Title").value;
    Author = document.getElementById("Author").value;
    Genre = document.getElementById("Genre").value;
    Publisher = document.getElementById("Publisher").value;
    Image = document.getElementById("Image").value;
    Rating = document.getElementById("Rating").value;
    Time = document.getElementById("Time").value;
    
    var elementT = document.getElementById("Title"),
        elementA = document.getElementById("Author"),
        elementI = document.getElementById("Image");
    
    x = ('<div class="card float-left"><img class="card-img-top" src="'+ Image +'" alt="Card image cap"><div class="card-body"><h3 class="card-title">Title: '+ Title  +'</h3><h4 class="card-title">Author: '+ Author  +'</h4></div><ul class="list-group list-group-flush"><li class="list-group-item">Genre: '+ Genre +'</li><li class="list-group-item">Time: '+ Time +'</li><li class="list-group-item">Publisher: '+ Publisher +'</li></ul></div></div>');
    
    CD = Cds.push(x);

    if (Title == "" || Author == "" || Image == "") {
        document.getElementById("massage").innerHTML = "Please complete the entries...";
        elementT.classList.add("sorry");
        elementA.classList.add("sorry");
        elementI.classList.add("sorry");

    } else {
        document.getElementById("massage").style.color = "#8EEA90";
        document.getElementById("massage").innerHTML = "Successfully added";
        elementT.classList.remove("sorry");
        elementA.classList.remove("sorry");
        elementI.classList.remove("sorry");
        document.getElementById("Cds").innerHTML += x;
        myReset()
    } 
}

/* =============== DVDs =================== */

var Dvds = [
    {
        Title: "City lights", 
        Author: "Charlie Chaplin",
        Genre: "romantic comedy",
        Publisher: " United Artists",
        Image: "https://lh5.googleusercontent.com/NcceU_0L067O97K94W_G-5R1uUc8NVli1M3Ai4I50V7olCPjHx9-HHA2cJWpDjKSVREgQYcqXGLaJuaHFv1cI90avFBcoX0tHK6MAU5umkTKLT5tupm3TFd9bx8iFYlN68UYTdJ2",
        Rating: " - ",
        Time: "87"
        
    },{
        Title: "Lawrence of Arabia", 
        Author: "T.E.Lawrence",
        Genre: "historical drama",
        Publisher: "Columbia Pictures",
        Image: "https://lh3.googleusercontent.com/-dRuOH2GzS_RpKdqY1cK0qQZbifOlsRtkJsMVOBxMGUSNPiqtDPAsCTdR19SL0zp14oJ-yG9B8QkASLpFGnAPDXBUx7PUEp3hSnr3-GG6ionE9nB-S-b7x4l2nO24GcOxTzLeU0P",
        Rating: " - ",
        Time: "222"
    }
];

var i = 0
for (i = 0; i < Dvds.length; i++) {
    
document.getElementById("Dvds").innerHTML += ('<div class="card float-left"><img class="card-img-top" src="'+ Dvds[i].Image +'" alt="Card image cap"><div class="card-body"><h3 class="card-title">Title: '+ Dvds[i].Title  +'</h3><h4 class="card-title">Author:'+ Dvds[i].Author  +'</h4></div><ul class="list-group list-group-flush"><li class="list-group-item">Genre: '+ Dvds[i].Genre +'</li><li class="list-group-item">Publisher: '+ Dvds[i].Publisher +'</li><li class="list-group-item">Rating: '+ Dvds[i].Rating +'</li></ul></div></div>');
    
};

function myDvds() {
    Title = document.getElementById("Title").value;
    Author = document.getElementById("Author").value;
    Genre = document.getElementById("Genre").value;
    Publisher = document.getElementById("Publisher").value;
    Image = document.getElementById("Image").value;
    Rating = document.getElementById("Rating").value;
    Time = document.getElementById("Time").value;
    
    var elementT = document.getElementById("Title"),
        elementA = document.getElementById("Author"),
        elementI = document.getElementById("Image");
    
    x = ('<div class="card float-left"><img class="card-img-top" src="'+ Image +'" alt="Card image cap"><div class="card-body"><h3 class="card-title">Title: '+ Title  +'</h3><h4 class="card-title">Author: '+ Author  +'</h4></div><ul class="list-group list-group-flush"><li class="list-group-item">Genre: '+ Genre +'</li><li class="list-group-item">Publisher: '+ Publisher +'</li><li class="list-group-item">Rating: '+ Rating +'</li></ul></div></div>');
    
    DVD = Dvds.push(x);

    if (Title == "" || Author == "" || Image == "") {
        document.getElementById("massage").innerHTML = "Please complete the entries...";
        elementT.classList.add("sorry");
        elementA.classList.add("sorry");
        elementI.classList.add("sorry");

    } else {
        document.getElementById("massage").style.color = "#8EEA90";
        document.getElementById("massage").innerHTML = "Successfully added";
        elementT.classList.remove("sorry");
        elementA.classList.remove("sorry");
        elementI.classList.remove("sorry");
        document.getElementById("Dvds").innerHTML += x;
        myReset()
    } 
}

/* =============== Books =================== */

var Books = [
    {
        Title: "Woodwalkers", 
        Author: "Katja Brandis",
        Genre: "belletristik",
        Publisher: "Bild",
        Image: "https://lh3.googleusercontent.com/LhNtKnTFu35kGdjMRMZ9M8CqFCoBEeFupa7Bci5nQ75Z7pOlhF9v_pwLB6vsxsdXNg67Pm99Jh2XtTyzw5ghaZUtaXM8ZVadlb0mx-TOOaJ1qG-FfO8PF_5NoRafwvEmV4LjhJ4W",
        Rating: "5",
        Weight: "1 kg"
        
    },{
        Title: "Foundation", 
        Author: "Isaac Asimov",
        Genre: "fantasy science fiction",
        Publisher: "Heyne",
        Image: "https://lh5.googleusercontent.com/MRtLzl9A37yMb1TvoG-5SBVMwqS26t_q8k1eww7Qusd2_PH5rK3PvA5eWfgORAfcF2gwEdsyL171V6IBIQFJ637FFHg1B3ibC8WIcA5Ii6deGlFuS_GHNmdUWYvwfJkcIL5pfv7A",
        Rating: "3",
        Weight: "2 kg"
    }
];

var i = 0
for (i = 0; i < Books.length; i++) {
    
document.getElementById("Books").innerHTML += ('<div class="card float-left"><img class="card-img-top" src="'+ Books[i].Image +'" alt="Card image cap"><div class="card-body"><h3 class="card-title">Title: '+ Books[i].Title  +'</h3><h4 class="card-title">Author: '+ Books[i].Author  +'</h4></div><ul class="list-group list-group-flush"><li class="list-group-item">Genre: '+ Books[i].Genre +'</li><li class="list-group-item">Publisher: '+ Books[i].Publisher +'</li><li class="list-group-item">Weight: '+ Books[i].Weight +'</li></ul></div></div>');
    
};

function myBooks() {
    Title = document.getElementById("Title").value;
    Author = document.getElementById("Author").value;
    Genre = document.getElementById("Genre").value;
    Publisher = document.getElementById("Publisher").value;
    Image = document.getElementById("Image").value;
    Rating = document.getElementById("Rating").value;
    Weight = document.getElementById("Weight").value;
    
    var elementT = document.getElementById("Title"),
        elementA = document.getElementById("Author"),
        elementI = document.getElementById("Image");
    
    x = ('<div class="card float-left"><img class="card-img-top" src="'+Image +'" alt="Card image cap"><div class="card-body"><h3 class="card-title">Title: '+ Title  +'</h3><h4 class="card-title">Author: '+ Author  +'</h4></div><ul class="list-group list-group-flush"><li class="list-group-item">Genre: '+ Genre +'</li><li class="list-group-item">Publisher: '+ Publisher +'</li><li class="list-group-item">Weight: '+ Weight +'</li></ul></div></div>');
    
    BOOK = Books.push(x);

    if (Title == "" || Author == "" || Image == "") {
        document.getElementById("massage").innerHTML = "Please complete the entries...";
        elementT.classList.add("sorry");
        elementA.classList.add("sorry");
        elementI.classList.add("sorry");

    } else {
        document.getElementById("massage").style.color = "#8EEA90";
        document.getElementById("massage").innerHTML = "Successfully added";
        elementT.classList.remove("sorry");
        elementA.classList.remove("sorry");
        elementI.classList.remove("sorry");
        document.getElementById("Books").innerHTML += x;
        myReset()
    }
}

/* =============== DVDs =================== */

var Comics = [
    {
        Title: "The Sandman", 
        Author: "Neil Gaiman",
        Genre: "fantasy",
        Publisher: "Vertigo",
        Image: "https://lh4.googleusercontent.com/8jUP24FFaHpyyxOtrOLaw03wsFi9GtPMPMc-PnYGBEF7KNTQAHAavQUb8eCvGAqkzdamsG-_3r50OxlfGohZgZd3FAPbMfXqe-nnFOoG4KKwap2SDLhapYapo_okEPi1cSDYHTBf",
        Rating: " - ",
        
    },{
        Title: "Modesty Blaise", 
        Author: "Peter O'Donnell",
        Genre: "mystery",
        Publisher: "Titan Books",
        Image: "https://lh6.googleusercontent.com/DGBSQtjtIPnGVopFGTl9yITpH9qoV_fS1gi2islbeWCLDyiySSgvaull9Aw-CKzKm4b5xmF98i_rtDUxZnyWKhpjDArzyM2JNjT_6CRsgI-oJpsnPvaL1Ytxx5FVPQacJRvIB9ar",
        Rating: " - ",
    }
];

var i = 0
for (i = 0; i < Comics.length; i++) {
    
document.getElementById("Comics").innerHTML += ('<div class="card float-left"><img class="card-img-top" src="'+ Comics[i].Image +'" alt="Card image cap"><div class="card-body"><h3 class="card-title">Title: '+ Comics[i].Title  +'</h3><h4 class="card-title">Author: '+ Comics[i].Author  +'</h4></div><ul class="list-group list-group-flush"><li class="list-group-item">Genre: '+ Comics[i].Genre +'</li><li class="list-group-item">Publisher: '+ Comics[i].Publisher +'</li><li class="list-group-item">Rating: '+ Comics[i].Rating +'</li></ul></div></div>');
    
};

function myComics() {
    Title = document.getElementById("Title").value;
    Author = document.getElementById("Author").value;
    Genre = document.getElementById("Genre").value;
    Publisher = document.getElementById("Publisher").value;
    Image = document.getElementById("Image").value;
    Rating = document.getElementById("Rating").value;
    Time = document.getElementById("Time").value;
    
    var elementT = document.getElementById("Title"),
        elementA = document.getElementById("Author"),
        elementI = document.getElementById("Image");
    
    x = ('<div class="card float-left"><img class="card-img-top" src="'+ Image +'" alt="Card image cap"><div class="card-body"><h3 class="card-title">Title: '+ Title  +'</h3><h4 class="card-title">Author: '+ Author  +'</h4></div><ul class="list-group list-group-flush"><li class="list-group-item">Genre: '+ Genre +'</li><li class="list-group-item">Publisher: '+ Publisher +'</li><li class="list-group-item">Rating: '+ Rating +'</li></ul></div></div>');
    
    COMICS = Comics.push(x);

    
    if (Title == "" || Author == "" || Image == "") {
        document.getElementById("massage").innerHTML = "Please complete the entries...";
        elementT.classList.add("sorry");
        elementA.classList.add("sorry");
        elementI.classList.add("sorry");

    } else {
        document.getElementById("massage").style.color = "#8EEA90";
        document.getElementById("massage").innerHTML = "Successfully added";
        elementT.classList.remove("sorry");
        elementA.classList.remove("sorry");
        elementI.classList.remove("sorry");
        document.getElementById("Comics").innerHTML += x;
        myReset()
    }
}



/* ============ Button Form ============= */

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function myReset() {
    document.getElementById("Title").value = "";
    document.getElementById("Author").value = "";
    document.getElementById("Genre").value = "";
    document.getElementById("Publisher").value = "";
    document.getElementById("Image").value = "";
    document.getElementById("Time").value = "";
    document.getElementById("Rating").value = "";
    document.getElementById("Weight").value = "";
}

 
