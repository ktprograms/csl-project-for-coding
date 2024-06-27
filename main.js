let recipes;
function reqListener() {
    recipes=this.response;
    let i = 0;
    while(i<recipes.length){
        recipes[i].image=loadImage(recipes[i].picture);
         i = i+1;
    }
      
}
function setup(){
    createCanvas(1000, 10000);
    background(0, 0, 0);
   let i = 0;
        while (i < recipes.length) {   
            textFont ("cursive");
            fill (random(0,225),random(0,255),random(0,255));     
            textSize(50);
            text(recipes[i].NameOfRecipe, 210 ,50+ i * 3400);

            fill (235, 52, 186);     
            textSize(50);
            textFont ("cursive");
            text(recipes[i].Ingredeient1, 210 ,100 + i * 3400);
            text(recipes[i].TheCostingPrice1, 210 ,200 + i * 3400);
            text(recipes[i].TheMeasurement1, 210 ,300 + i* 3400);

            fill (235, 52, 235);     
            textSize(50);
            text(recipes[i].TheIngredeient2, 210 ,400 + i * 3400);
            text(recipes[i].TheCostingPrice2, 210 ,500 + i * 3400);
            text(recipes[i].TheMeasurement2, 210 ,600 + i* 3400);

            fill (125, 52, 235);     
            textSize(50);
            text(recipes[i].TheIngredeient3, 210 ,700 +i * 3400);
            text(recipes[i].TheCostingPrice3, 210 ,800 + i * 3400);
            text(recipes[i].TheMeasurement3, 210 ,900 + i* 3400);

            fill (52, 79, 235);     
            textSize(50);
            text(recipes[i].TheIngredeient4, 210 ,1000 + i * 3400);
            text(recipes[i].TheCostingPrice4, 210 ,1100 + i * 3400);
            text(recipes[i].TheMeasurement4, 210 ,1200 + i* 3400);

            fill (52, 177, 235);     
            textSize(50);
            text(recipes[i].TheIngredeient5, 210 ,1300 + i * 3400);
            text(recipes[i].TheCostingPrice5, 210 ,1400 + i * 3400);
            text(recipes[i].TheMeasurement5, 210 ,1500 + i* 3400);

            fill (52, 235, 232);     
            textSize(50);
            text(recipes[i].TheIngredeient6, 210 ,1600 + i * 3400);
            text(recipes[i].TheCostingPrice6, 210 ,1700 + i * 3400);
            text(recipes[i].TheMeasurement6, 210 ,1800 + i* 3400);

            fill (52, 235, 135);     
            textSize(50);
            text(recipes[i].TheIngredeient7, 210 ,1900 + i * 3400);
            text(recipes[i].TheCostingPrice7, 210 ,2000 + i * 3400);
            text(recipes[i].TheMeasurement7, 210 ,2100 + i* 3400);

            fill (89, 235, 52);     
            textSize(50);
            text(recipes[i].TheIngredeient8, 210 ,2200 + i * 3400);
            text(recipes[i].TheCostingPrice8, 210 ,2300 + i * 3400);
            text(recipes[i].TheMeasurement8, 210 ,2400 + i* 3400);

            fill (208, 235, 52);     
            textSize(50);
            text(recipes[i].TheIngredeient9, 210 ,2500 + i * 3400);
            text(recipes[i].TheCostingPrice9, 210 ,2600 + i* 3400);
            text(recipes[i].TheMeasurement9, 210 ,2700 + i* 3400);

            fill (235, 52, 52);     
            textSize(50);
            text(recipes[i].TheIngredeient10, 210 ,2800 + i * 3400);
            text(recipes[i].TheCostingPrice10, 210 ,2900 + i* 3400);
            text(recipes[i].TheMeasurement10, 210 ,3000 + i* 3400);
           image(recipes[i].image, 400, 400+i*3400, 450, 450, 0, 0, 0, 0, CONTAIN);
            i=i+1;
        }
 
}
function preload() {
    let req = new XMLHttpRequest();
    req.addEventListener("load",reqListener)
    req.open("get","http://192.168.16.83:8080/san_lian/")
    req.responseType="json";
    req.send();
}
