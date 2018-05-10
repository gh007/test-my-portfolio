// Accordion - Open/Close
var accordions = document.getElementsByClassName("accordion");


for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        this.classList.toggle('is-open');

        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            // accordion is open, need to close
            content.style.maxHeight = null;
        } else {
            //accordion is closed
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}






// Smooth Scrolling for internal links
$('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").stop().animate({
        "scrollTop": $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});











// TESt TEST TEST TEST TEST...............


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn-Nav");
var btn2 = document.getElementById("myBtn-footer");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// -------------------------------------------------------------------







