var slideIndex = 0;
const data = [{
    name: "Tanya Sinclair",
    role: "UX Engineer",
    message: "“ I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future. ”",
    image: "./images/image-tanya.jpg"
},
{
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    message: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    image: "./images/image-john.jpg"
}];
showSlide(slideIndex);


function showSlide(index){
    document.getElementById("messageText").innerHTML = data[index].message;
    document.getElementById("messageName").innerHTML = data[index].name + "<span>" + data[index].role + "</span>" ;
    document.getElementById("visualImg").setAttribute('src', data[index].image); 
}
function switchSlide (flow){
    slideIndex=slideIndex+flow;
    if(slideIndex >= data.length ){
        slideIndex = 0;
    }
    if(slideIndex < 0 ){
        slideIndex = data.length-1 ;
    }
    showSlide(slideIndex);
}

