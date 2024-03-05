//1st point done using DOM
const fruitdescr = document.createElement('input');
const form1 = document.querySelector('form');
const form2 = document.querySelector('button');
fruitdescr.id = "description";
fruitdescr.name = "fruit-desciption"
fruitdescr.type = "text";
form1.insertBefore(fruitdescr,form2);


//2nd point 
//step 1 create paragraph tag using create element 
//step 2 create paragraph text node using create text node
//step 3 append text node variable to paragraph tag
//step 4 run for loop for class = fruit 
//step 5 in for loop insert before first element child of li tag 
//step 6 first element child of li tag is stored in variable then insert before is used
//NOTE POINT HERE IS THAT HOW TO GIVE DIFFERENT DESCRIPTION TO EVERY FRUIT TO DO THAT CREATE ARRAY OF FRUIT DESCRIPTION AND
//GIVE THEM VALUE NOW WHEN ADDING DESCRIPTION USE ARRAY[i] LIKE THESE TO INSERT DESCRIPTION



const filter = document.getElementById('filter');
filter.addEventListener('keyup',function(event){
const textentered = event.target.value.toLowerCase();
const fruititem = document.getElementsByClassName('fruit');
for(let i =0 ;i<fruititem.length;i++){
    const currentfruittext = fruititem[i].firstChild.textContent.toLowerCase();
    //here come 3rd point now fruit description is firstElementChild.firstChild of fruititem rest is same process
    if(currentfruittext.indexOf(textentered) === -1){
        fruititem[i].style.display = 'none';
    }
    else{
        fruititem[i].style.display = 'flex';
    }
}

})