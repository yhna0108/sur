// ======================
// POPUP
// ======================

const popup = document.getElementById("popup");
const popupEmoji = document.getElementById("popupEmoji");
const popupMessage = document.getElementById("popupMessage");
const closePopup = document.getElementById("closePopup");

function showPopup(emoji, message) {

    popupEmoji.textContent = emoji;
    popupMessage.textContent = message;

    popup.style.display = "flex";
}

closePopup.addEventListener("click", function () {

    popup.style.display = "none";

});

// ======================
// DOTS
// ======================

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot4 = document.getElementById("dot4");
const dot5 = document.getElementById("dot5");
const dot6 = document.getElementById("dot6");

// ======================
// STEPS
// ======================

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step5 = document.getElementById("step5");
const step6 = document.getElementById("step6");

// ======================
// STEP 1
// ======================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    step1.classList.remove("active");
    step2.classList.add("active");

    dot1.classList.remove("active");
    dot2.classList.add("active");

});

// ======================
// STEP 2
// ======================

const nameBtn = document.getElementById("nameBtn");
const nameInput = document.getElementById("nameInput");

nameBtn.addEventListener("click", function () {

    const name = nameInput.value.trim().toLowerCase();

    if (name === "mans") {
      
        showPopup(
        "🤭",
        "It's really you, my dear❤️"
    );

        setTimeout(function(){
             popup.style.display = "none";

        step2.classList.remove("active");
        step3.classList.add("active");

        dot2.classList.remove("active");
        dot3.classList.add("active");

         },1200);

    } else {

        showPopup(
            "🥸",
            "yahhh kamu boong yaa. aku tau kok siapa nama kamuuuu 🙂‍↔️"
        );

    }

});

// ======================
// STEP 3
// ======================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", function () {

    showPopup(
        "🤭",
        "Hehe, correct. I knew it."
    );

    setTimeout(function () {

        popup.style.display = "none";

        step3.classList.remove("active");
        step4.classList.add("active");

        dot3.classList.remove("active");
        dot4.classList.add("active");

    }, 1200);

});

let noBtnConverted = false;

noBtn.addEventListener("click", function () {

    if(!noBtnConverted){

        showPopup(
            "😏",
            "Wrong answer detected. Fixing it for you..."
        );

        noBtn.textContent = "YESYES";

        noBtnConverted = true;

    }else{

        showPopup(
            "🤭",
            "Hehe, correct. I knew it."
        );

        setTimeout(function(){

            popup.style.display = "none";

            step3.classList.remove("active");
            step4.classList.add("active");

            dot3.classList.remove("active");
            dot4.classList.add("active");

        },1200);

    }

});

// ======================
// STEP 4
// ======================

const relationshipInput = document.getElementById("relationshipInput");
const relationshipBtn = document.getElementById("relationshipBtn");

relationshipBtn.addEventListener("click", function () {

    const answer = relationshipInput.value.trim().toLowerCase();

    if(
        answer === "2 years" ||
        answer === "2 year" ||
        answer === "2 tahun" ||
        answer === "dua tahun" ||
        answer === "two year" ||
        answer === "two years"
    ){

        showPopup(
            "🥰",
            "Yesss, that's right."
        );

        setTimeout(function(){

            popup.style.display = "none";

            step4.classList.remove("active");
            step5.classList.add("active");

            dot4.classList.remove("active");
            dot5.classList.add("active");

        },1200);

    }else{

        showPopup(
            "🤨",
            "Hmm... I think you need to remember our memories a little better."
        );

    }

});

// ======================
// STEP 5
// ======================

const pinInput = document.getElementById("pinInput");
const pinBtn = document.getElementById("pinBtn");
pinBtn.addEventListener("click", function(){

    const pin = pinInput.value.trim();
    if(pin === "120624"){
        showPopup(
            "💖",
            "Correct baby!🌷"
        );
        setTimeout(function(){
            popup.style.display = "none";
            step5.classList.remove("active");
            step6.classList.add("active");
            dot5.classList.remove("active");
            dot6.classList.add("active");
        },1200);
    }else{
        showPopup(
            "🔐",
            "Didn't you remember our special date?🥺"
        );
    }
});

// POLAROID PAGE

const surpriseBtn = document.getElementById("surpriseBtn");
const polaroidPage = document.getElementById("polaroidPage");
surpriseBtn.addEventListener("click", function(){
    step6.classList.remove("active");
    polaroidPage.style.display = "block";
});

const photos = document.querySelectorAll(".polaroid");
const photoOverlay = document.getElementById("photoOverlay");

photos.forEach(photo=>{
    photo.addEventListener("click",function(){
        photos.forEach(item=>{
            item.classList.remove("zoom");
        });
        photo.classList.add("zoom");
        photoOverlay.classList.add("active");
    });
});

// CLOSE ZOOM PHOTO
photoOverlay.addEventListener("click", function(){
    photos.forEach(photo=>{
        photo.classList.remove("zoom");
    });
    photoOverlay.classList.remove("active");
});

const letterBtn =
document.getElementById("letterBtn");

const letterPage =
document.getElementById("letterPage");
letterBtn.addEventListener("click",function(){
    document.querySelector(".polaroid-page")
    .style.display="none";
    letterPage.style.display="flex";
});

const envelope =
document.getElementById("envelope");

const letter =
document.getElementById("letter");
envelope.addEventListener("click",function(){
    envelope.classList.add("open");
    setTimeout(function(){
        envelope.style.display="none";
        letter.classList.add("show");
    },600);

});

// SECRET EASTER EGG
const secretEaster =
document.getElementById("secretEaster");

const secretPopup =
document.getElementById("secretPopup");

const closeSecret =
document.getElementById("closeSecret");
secretEaster.addEventListener("click",function(){
secretPopup.style.display="block";
});

closeSecret.addEventListener("click",function(){
secretPopup.style.display="none";
});