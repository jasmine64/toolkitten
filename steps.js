const gallery=document.querySelector('.imageContainer');

const thumbs=gallery.querySelectorAll('.oneImage');

const pageImages=document.getElementsByTagName("img");

/* grab small img absolute url*/

let preview1=document.getElementsByTagName("img")[0].src;
console.log(preview1);
let preview2=document.getElementsByTagName("img")[1].src;
console.log(preview2);
let preview3=document.getElementsByTagName("img")[2].src;
console.log(preview3);
let preview4=document.getElementsByTagName("img")[3].src;
console.log(preview4);
let preview5=document.getElementsByTagName("img")[4].src;
console.log(preview5);
let preview6=document.getElementsByTagName("img")[5].src;
console.log(preview6);
let preview7=document.getElementsByTagName("img")[6].src;
console.log(preview7);
let preview8=document.getElementsByTagName("img")[7].src;
console.log(preview8);
let preview9=document.getElementsByTagName("img")[8].src;
console.log(preview9);


/*grab only small img file  from absolute url*/

let url1=preview1.split("/").pop();
console.log(url1);
let url2=preview2.split("/").pop();
console.log(url2);
let url3=preview3.split("/").pop();
console.log(url3);
let url4=preview4.split("/").pop();
console.log(url4);
let url5=preview5.split("/").pop();
console.log(url5);
let url6=preview6.split("/").pop();
console.log(url6);
let url7=preview7.split("/").pop();
console.log(url7);
let url8=preview8.split("/").pop();
console.log(url8);
let url9=preview9.split("/").pop();
console.log(url9);

/* grab current-large -img file*/

let currImg1=document.getElementById("a1").getAttribute('href');
console.log(currImg1);
let currImg2=document.getElementById("a2").getAttribute('href');
console.log(currImg2);
let currImg3=document.getElementById("a3").getAttribute('href');
console.log(currImg3);
let currImg4=document.getElementById("a4").getAttribute('href');
console.log(currImg4);
let currImg5=document.getElementById("a5").getAttribute('href');
console.log(currImg5);
let currImg6=document.getElementById("a6").getAttribute('href');
console.log(currImg6);
let currImg7=document.getElementById("a7").getAttribute('href');
console.log(currImg7);
let currImg8=document.getElementById("a8").getAttribute('href');
console.log(currImg8);
let currImg9=document.getElementById("a9").getAttribute('href');
console.log(currImg9);


console.log(typeof(pageImages));

console.log(Object.entries(pageImages));




function changeImage1(img1, url1, currImg1){
  
  
  for (let key of Object.keys(pageImages)) {
  document.pageImages[id].addEventListener( ('click'), event =>{
    if(key === "id" && value === 0){
      /* small picture when clicked changed with the big one*/
        newUrl1=img1.setAttribute("url1", currImg1);
        console.log(newUrl1);
    }
  });
  }
}

changeImage1(img1, url1, currImg1);
console.log(changeImage1(img1, url1 ,currImg1));