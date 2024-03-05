// Add the Edit Button:
const prevli = document.getElementsByClassName('fruit');
for(let i=0;i<prevli.length;i++){
  const editbutton=document.createElement('button');
  const editbuttontext=document.createTextNode('Edit');
  editbutton.className='edit-btn';
  editbutton.appendChild(editbuttontext);
  prevli[i].appendChild(editbutton);
//prevli[i].innerHTML= '<button class="edit-btn">Edit</button>';
}
// Implement the code as in video but with one extra 'Edit' button in 'li'

const form=document.querySelector('form');
const fruits=document.querySelector(".fruits");

form.addEventListener('submit',function(event){
 event.preventDefault();
 const fruittoadd=document.getElementById('fruit-to-add');
 const newli=document.createElement('li');
  newli.innerHTML+=fruittoadd.value + '<button class="delete-btn">x</button>'
    +'<button class="edit-btn">Edit</button>';
 
 // const newlitext=document.createTextNode(fruittoadd.value);
 // // console.log(fruittoadd);
 //  newli.appendChild(newlitext);
   newli.className='fruit';
 //  const deletebtn = document.createElement('button');
 //  const deletebtntext=document.createTextNode('x');
 //  deletebtn.appendChild(deletebtntext);
 //  deletebtn.className='delete-btn';
 //  newli.appendChild(deletebtn);
  fruits.appendChild(newli);
})

fruits.addEventListener('click',function(event){
  if(event.target.classList.contains('delete-btn')){
    const fruittodelete = event.target.parentElement;
    fruits.removeChild(fruittodelete);
  }
})