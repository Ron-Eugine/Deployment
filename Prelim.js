function Add(){
    switch(document.getElementById("Materials").value){
        case "Wood":{
            if(document.getElementById("WoodAmount").value == ""){
                document.getElementById("WoodAmount").value = document.getElementById("Amount").value;
            }
            else{
                document.getElementById("WoodAmount").value = parseInt(document.getElementById("WoodAmount").value) + parseInt(document.getElementById("Amount").value);
            }
            OwnedWood();
            break;
        }
        case "Plastic":{
            if(document.getElementById("PlasticAmount").value == ""){
                document.getElementById("PlasticAmount").value = document.getElementById("Amount").value;
            }
            else{
                document.getElementById("PlasticAmount").value = parseInt(document.getElementById("PlasticAmount").value) + parseInt(document.getElementById("Amount").value);
            }
            break;
        }
        case "Glass":{
            if(document.getElementById("GlassAmount").value == ""){
                document.getElementById("GlassAmount").value = document.getElementById("Amount").value;
            }
            else{
                document.getElementById("GlassAmount").value = parseInt(document.getElementById("GlassAmount").value) + parseInt(document.getElementById("Amount").value);
            }
            OwnedGlass();
            break;
        }
        case "Paint":{
            if(document.getElementById("PaintAmount").value == ""){
                document.getElementById("PaintAmount").value = document.getElementById("Amount").value;
            }
            else{
                document.getElementById("PaintAmount").value = parseInt(document.getElementById("PaintAmount").value) + parseInt(document.getElementById("Amount").value);
            }
            OwnedPaint();
            break;
        }
        case "Nails":{
            if(document.getElementById("NailsAmount").value == ""){
                document.getElementById("NailsAmount").value = document.getElementById("Amount").value;
            }
            else{
                document.getElementById("NailsAmount").value = pareInt(document.getElementById("NailsAmount").value) + parseInt(document.getElementById("Amount").value);
            }
           OwnedNails();
            break;
        }
    }
}
function CraftG(){
    var w = parseInt(document.getElementById("WoodAmount").value);
var n = parseInt(document.getElementById("NailsAmount").value);
var p = parseInt(document.getElementById("PaintAmount").value);
    if(w >= 10 && n >= 20 && p >= 1){
        document.getElementById("WoodAmount").value = w - 10;
        OwnedWood();
        document.getElementById("NailsAmount").value = n - 20;
        OwnedNails();
        document.getElementById("PaintAmount").value = p - 1;
        OwnedPaint();
        document.getElementById("Gaming").value = parseInt(document.getElementById("Gaming").value) + 1;
    }
    else{
        alert("Not Enough Materials!")
    }
}
function CraftD(){
    var w = parseInt(document.getElementById("WoodAmount").value);
    var n = parseInt(document.getElementById("NailsAmount").value);
    var p = parseInt(document.getElementById("PaintAmount").value);
    var g = parseInt(document.getElementById("GlassAmount").value);
    if(w >= 20 && n >= 30 && g >= 7 && p >= 2){
        document.getElementById("WoodAmount").value = w -20;
        OwnedWood();
        document.getElementById("NailsAmount").value = n - 30;
        OwnedNails();
        document.getElementById("GlassAmount").value = g - 7;
        OwnedGlass();
        document.getElementById("PaintAmount").value = p - 2;
        OwnedPaint();
        document.getElementById("Desktop").value = parseInt(document.getElementById("Desktop").value) + 1;
    }
    else{
        alert("Not Enough Materials!");
    }
}
function OwnedWood(){
    document.getElementById("OwnedWoodG").value = document.getElementById("WoodAmount").value + "/10";
    document.getElementById("OwnedWoodD").value = document.getElementById("WoodAmount").value + "/20";
}
function OwnedGlass(){
    document.getElementById("OwnedGlassD").value = document.getElementById("GlassAmount").value + "/7";
}
function OwnedPaint(){
    document.getElementById("OwnedPaintG").value = document.getElementById("PaintAmount").value + "/1";
    document.getElementById("OwnedPaintD").value = document.getElementById("PaintAmount").value + "/2";
}
function OwnedNails(){
    document.getElementById("OwnedNailsG").value = document.getElementById("NailsAmount").value + "/20";
    document.getElementById("OwnedNailsD").value = document.getElementById("NailsAmount").value + "/30";
}