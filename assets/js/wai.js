    // 1. Find and store the element we want to listen to events on.    

// function getRandomInt(max) {
// return Math.floor(Math.random() * Math.floor(max));
// }

var tokenModus = 0

var buttonPeople = function() {
        $("#buttonNumbers").removeClass("pressed");        
        $("#buttonAnimals").removeClass("pressed");
        $("#buttonPeople").removeClass("pressed");
        $(this).addClass("pressed");     
        $("#text1").fadeOut(200, function() {$(this).text("Who Am I")}).fadeIn(400);;
        $("#text2").text("???");        
        $("#text3").text("");        
        $("#text4").text("");                               
        $(".StartButton").text("Start");                               
        tokenModus = 0; 
};

var buttonNumbers = function() {
        $("#buttonPeople").removeClass("pressed");        
        $("#buttonAnimals").removeClass("pressed");
        $("#buttonNumbers").removeClass("pressed");
        $(this).addClass("pressed");     
        $("#text1").fadeOut(200, function() {$(this).text("How Many Am I")}).fadeIn(400);;
        $("#text2").text("???");        
        $("#text3").text("");        
        $("#text4").text("");                            
        $(".StartButton").text("Start");                               
        tokenModus = 1;
};

var buttonAnimals = function() {
        $("#buttonPeople").removeClass("pressed");        
        $("#buttonNumbers").removeClass("pressed");
        $("#buttonAnimals").removeClass("pressed");
        $(this).addClass("pressed");       
        $("#text1").fadeOut(200, function() {$(this).text("What Am I")}).fadeIn(400);;
        $("#text2").text("???");        
        $("#text3").text("");        
        $("#text4").text("");                            
        $(".StartButton").text("Start");                               
        tokenModus = 2;
};

        $("#buttonPeople").click(buttonPeople);  
        $("#buttonNumbers").click(buttonNumbers);  
        $("#buttonAnimals").click(buttonAnimals);  

function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

function getRandomInt2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var onButtonClick = function(){
    var randominox = getRandomInt(people.length);    
if (tokenModus == 0) {
    $("#text1").text("I am: ");
    $("#text2").fadeOut(50, function() {$(this).text((people[randominox].name))}).fadeIn(100);;     
    $("#text3").fadeOut(50, function() {$(this).text((people[randominox].age))}).fadeIn(100);;
    $("#text4").fadeOut(50, function() {$(this).text((people[randominox].known))}).fadeIn(100);;
    $(".StartButton").text("New");
} else if (tokenModus == 1) {
    $("#text1").text("I am: ");
    $("#text2").fadeOut(50, function() {$(this).text(getRandomInt2(-1000, 1000))}).fadeIn(100);;
    $("#text3").text(" ");
    $("#text4").text(" ");
    $(".StartButton").text("New");
} else if (tokenModus == 2) {
    var randominox = getRandomInt(animals.length);    
    $("#text1").text("I am a: ");
    $("#text2").fadeOut(50, function() {$(this).text((animals[randominox].name))}).fadeIn(100);;
    $("#text3").fadeOut(50, function() {$(this).text((animals[randominox].species))}).fadeIn(100);;
    $("#text4").fadeOut(50, function() {$(this).text((animals[randominox].where))}).fadeIn(100);;
    $(".StartButton").text("New");
}
};
    // 3. Add the event listener for the element and function
    // anonymous "inline"
        $(".StartButton").click(onButtonClick);      