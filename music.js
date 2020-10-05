window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const songs = document.querySelectorAll(".songs div");

  songs.forEach((song, index) => {
    song.addEventListener("click", () => {
      sounds[index].currentTime = 0;
      sounds[index].play();
      stopSong(index);
    });
  });

  function stopSong(index) {
    document.addEventListener("keypress", (event) => {
      if (event.keyCode === 32 || event.which === 32) {
        sounds[index].pause();
        sounds[index].currentTime = 0;
      } else {
        return;
      }
    });
  }
});
function swap() {
  const arijitdiv = document.querySelector(".gaane");
  const jubindiv = document.querySelector(".romantic");
  const badshahdiv = document.querySelector(".hiphop");
  let btndiv = document.querySelectorAll(".arijitBtn button");

  btndiv.forEach((button) => {
    button.addEventListener("click", function () {
      //bhai in nicha aali 3 line n hatake dekhaga n jb k h ki 2 divs k to pehle e fadeIn class laag ri h..or jab functionality chala h n to ek baar jistra add hogi class kise condn m fer wa hatai to koni aagli bar ya or kise condition m wa e fer lgawa to laga koni isliye har baar aapi pehli saari class hatawanga fer particular jo chahiye wo add kranga.or baakki na smjh aaya ho to ye step hata or console m 3 div ki positions pr class add hoti dekh click kr kr k.
      arijitdiv.classList.remove("fadeIn", "fadeOut");
      jubindiv.classList.remove("fadeIn", "fadeOut");
      badshahdiv.classList.remove("fadeIn", "fadeOut");
      if (button.textContent == "Nautiyaal") {
        arijitdiv.classList.add("fadeIn");
        jubindiv.classList.add("fadeOut");
        badshahdiv.classList.add("fadeIn");
      } else if (button.textContent == "Badshah") {
        badshahdiv.classList.add("fadeOut");
        jubindiv.classList.add("fadeIn");
        arijitdiv.classList.add("fadeIn");
      } else if (button.textContent == "Arijit") {
        badshahdiv.classList.add("fadeIn");
        jubindiv.classList.add("fadeIn");
        arijitdiv.classList.add("fadeOut");
      }
    });
  });
}
swap();

//yo likhya tha bhai jab har div k btns n alg alg work krwawa
// function swap() {
//   const arijitdiv = document.querySelector(".gaane");
//   const jubindiv = document.querySelector(".romantic");
//   const badshahdiv = document.querySelector(".hiphop");
//   const arijit = document.querySelectorAll(".arijitBtn button");

//   arijit.forEach((button) => {
//     button.addEventListener("click", function () {
//       if (button.textContent == "Badshah") {
//         arijitdiv.classList.add("fadeIn");
//         badshahdiv.classList.add("fadeOut");
//       } else if (button.textContent == "nautiyaal") {
//         arijitdiv.classList.add("fadeIn");
//         jubindiv.classList.add("fadeOut");
//       }
//     });
//   });
// }
// swap();

// function swap1() {
//   const arijitdiv = document.querySelector(".gaane");
//   const jubindiv = document.querySelector(".romantic");
//   const badshahdiv = document.querySelector(".hiphop");
//   const jubin = document.querySelectorAll(".jubinBtn button");
//   jubin.forEach((button) => {
//     button.addEventListener("click", function () {
//       if (button.textContent == "Badshah") {
//         jubindiv.classList.add("fadeIn");
//         badshahdiv.classList.add("fadeout");
//       } else if (button.textContent == "Arijit") {
//         jubindiv.classList.add("fadeIn");
//         arijitdiv.classList.add("fadeOut");
//       }
//     });
//   });
//   swap1();

//   function swap2() {
//     const arijitdiv = document.querySelector(".gaane");
//     const jubindiv = document.querySelector(".romantic");
//     const badshahdiv = document.querySelector(".hiphop");
//     const badshah = document.querySelectorAll(".badshahBtn button");
//     badshah.forEach((button) => {
//       button.addEventListener("click", function () {
//         if (button.textContent == "Arijit") {
//           badshahdiv.classList.add("fadeIn");
//           arijitdiv.classList.add("fadeOut");
//         } else if (button.textContent == "nautiyaal") {
//           badshahdiv.classList.add("fadeIn");
//           jubindiv.classList.add("fadeOut");
//         }
//       });
//     });
//   }
//   swap2();
// }
