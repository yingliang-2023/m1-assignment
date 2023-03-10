var caption = ["Affenpinscher", "Airedale Terrier", "Akbash", "Alaskan Malamute", "American Eskimo Dog", "American Water Spaniel"]
var photo = [];
var fileNames = [];
var imageList = [];
var descriptionList = [];
var image;
var capOpentag = "<span class='caption'>"
var capClosetag = "</span>"
var openList = "<div class='gallery'>";
var closeList = "</div>";
var description = ["The Affenpinscher is square-proportioned, compact and sturdy, with medium bone. This breed is a smaller version of a working terrier, and as such is not a delicate dog", "The Airedale Terrier is a neat, upstanding, long-legged terrier, not exaggerated in any way. This breed has strong round bone and combines strength and agility. The Airedale has strong jaws and a free gait.", "A unique combination of Mastiff and gazehound features, the Akbash Dog’s characteristics enable him to perform as a livestock guardian. This all-white, lean, leggy, muscular dog has an alert, regal appearance conveying power, strength and courage with the speed and agility necessary to challenge and chase predators.", "The Alaskan Malamute is a powerfully built dog of Nordic breed type, developed to haul heavy loads rather than race. This breed is slightly longer than tall, and is heavy boned and compact, designed for strength and endurance. ", "The Eskie is built along classic Nordic Spitz lines. This breed is compactly built, slightly longer than tall. The stand-off, double coat resists soaking and provides insulation against the cold. The small thick ears are also cold resistant, and the trot is agile and bold. The expression is keen and alert.", "The American Water Spaniel packs a lot of ability into a comparatively small dog. This breed’s muzzle is long and strong enough to carry a large goose, and has strong quarters to propel through water and over land. "];
var descriptionOpenTag = "<div class='description'>";
var descriptionCloseTag = "</div>"




//insert all final image elements in the album.
for (var i = 0; i < 6; i++) {
    fileNames.push("image" + (i + 1));
    photo.push("<img src='images/gallery/" + fileNames[i] + ".png' alt=" + fileNames[i] + ">");

    descriptionText = descriptionOpenTag + description[i] + descriptionCloseTag;
    image = openList + photo[i] + descriptionText + capOpentag + caption[i] + capClosetag + closeList;
    imageList.push(image);
}



document.getElementById("gallery").innerHTML = imageList.join(" ");






/*Insert Info box*/


var infoList = [];
for (var j = 0; j < 6; j++) {
    var heading = caption[j];
    var content = description[j];

    var listName = "<div><div class='infobox'><h2>" + heading + "</h2><p>" + content + "</p><button>Close</button></div></div>"
    infoList.push(listName)

}



document.getElementById("infomationBox").innerHTML = infoList.join(" ");





for (var i = 0; i < 6; i++) {
    document.getElementsByClassName("description")[i].addEventListener("click", show);
    document.getElementsByClassName("description")[i].setAttribute("id", i);

}




function show() {
    var num = this.id;
    document.querySelectorAll(".infobox")[num].classList.add('showinfo');
};


//close button

for (var j = 0; j < 6; j++) {
    document.querySelectorAll("button")[j].addEventListener("click", close);
    document.getElementsByTagName("button")[j].setAttribute("id", j);
}

function close() {
    var num = this.id;
    document.querySelectorAll(".infobox")[num].classList.remove('showinfo');

};


//light box

$('.gallery img').click(function () {

    $('.backdrop').animate({
        'opacity': '.50'
    }, 300, 'linear').css('display', 'block');
    $('.box').fadeIn();

    //Check if lightbox has an image
    if ($('.box').contents('img')) {
        $('.box').contents().remove('img'); //If true, clear image
    }

    //Get text content in attribute
    var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');
    console.log($altvalue);

    //     switch($altvalue){
    //         case "image1":
    //              // var img = $('#gallery:nth-child(1) img').clone(); //Duplicate DOM element
    //         var imgClone='<img src="images/gallery/image1.png"></img>'
    //         break;
    //         $('.box').append(imgClone); //Insert duplicated element in another element
    //         case "image2":
    //         var imgClone='<img src="images/gallery/image2.png"></img>'
    //         $('.box').append(imgClone);
    //         break;
    //         case "image3":
    //             var imgClone='<img src="images/gallery/image3.png"></img>'
    //             $('.box').append(imgClone);
    //         break;
    //     }

    // };




    if ($altvalue == "image1") {
        // var img = $('#gallery:nth-child(1) img').clone(); //Duplicate DOM element
        var imgClone = '<img src="images/gallery/image1.png"></img>'
        $('.box').append(imgClone); //Insert duplicated element in another element
    } else if ($altvalue == "image2") {
        var imgClone = '<img src="images/gallery/image2.png"></img>'
        $('.box').append(imgClone);
    } else if ($altvalue == "image3") {
        var imgClone = '<img src="images/gallery/image3.png"></img>'
        $('.box').append(imgClone);
    } else if ($altvalue == "image4") {
        var imgClone = '<img src="images/gallery/image4.png"></img>'
        $('.box').append(imgClone);
    } else if ($altvalue == "image5") {
        var imgClone = '<img src="images/gallery/image5.png"></img>'
        $('.box').append(imgClone);
    } else if ($altvalue == "image6") {
        var imgClone = '<img src="images/gallery/image6.png"></img>'
        $('.box').append(imgClone);
    };

});

/* Click to close lightbox */
$('.close, .backdrop').click(function () {
    $('.backdrop').animate({
        'opacity': '0'
    }, 300, 'linear', function () {
        $('.backdrop').css('display', 'none');
    });
    $('.box').fadeOut();
});