console.log("----Welcome in js----")
const title = document.getElementById("title");
console.log(title)

title.innerText = "hii i'm ....";
const desc=document.getElementsByClassName("desc");
console.log(desc);
desc.innerText="My Name Is cockroach";
const heading= document.getElementsByClassName("heading");
for(let i=0;i<10;i++){
   if(i%2===0) {
    heading[i].innerText="even";
    console.log(heading);
    }
   else{
    heading[i].innerText="odd";
    console.log(heading);
    }
}
// heading[0].innerText="0world";
// heading[1].innerText="1world";
// heading[2].innerText="2world";
// heading[3].innerText="3world";
// heading[4].innerText="4world";
// heading[5].innerText="5world";
// heading[6].innerText="6world";
// heading[7].innerText="7world";
// heading[8].innerText="8world";
// heading[9].innerText="9world";
console.log(heading);
const array=[10,9,8,7,6,5,4,3,2,1];
console.log(array[4]);
len=array.length;
console.log(len);
for(let i=0;i<10;i++){
    if(i%2===0) {
        heading[i].innerText="even";
        console.log(heading);
    }
    else{
        heading[i].innerText="odd";
        console.log(heading);
    }
}
