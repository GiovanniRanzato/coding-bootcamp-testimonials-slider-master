let slideIndex = 0;
let flip = false;

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
},
{
    name: "Tony Ledger",
    role: "Software Engineer",
    message: "“ I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future. ”",
    image: "./images/image-tony.jpg"
},
{
    name: "Jane Rainolds",
    role: "Back-end Developer",
    message: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    image: "./images/image-jane.jpg"
},
];
showSlide(slideIndex);

function showSlide(index){
    document.getElementById("message").setAttribute('class', 'fadeOut');
    document.getElementById("slideController").setAttribute('class', 'fadeOut');
    setTimeout(function () {
        document.getElementById("messageText").innerHTML = data[index].message;
        document.getElementById("messageName").innerHTML = data[index].name + "<span>" + data[index].role + "</span>";
        document.getElementById("message").setAttribute('class', 'fadeIn');
        document.getElementById("slideController").setAttribute('class', 'fadeIn');
    }, 500);
    if(flip){
        if(index >= data.length){
            document.getElementById("visualImgBack").setAttribute('src', data[0].image);
        }else{
            document.getElementById("visualImgBack").setAttribute('src', data[index].image);
        }
        document.getElementById("visual").setAttribute('class', 'flip');
    }else{
        document.getElementById("visual").setAttribute('class', 'unflip');
        if(index >= data.length){
            document.getElementById("visualImgFront").setAttribute('src', data[0].image);
        }else{
            document.getElementById("visualImgFront").setAttribute('src', data[index].image);
        }
    }
    flip = !flip;
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

