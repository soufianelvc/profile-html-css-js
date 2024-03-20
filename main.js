// dark mode and light mode
{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

const hedenul = document.getElementById("hedenul");
const changeColor = document.getElementById("changeColor");

// when hover  on heade =>   changeColor
changeColor.addEventListener("mouseover", (params) => {
  hedenul.style.display = "block";
});
changeColor.addEventListener("mouseout", (params) => {
  hedenul.style.display = "none";
});
// when  i click on change header BG of and change bg of change mode
const headerbr = document.getElementById("headerbr");
const myheader = document.getElementsByClassName("myheader")[0];
const coures = document.getElementById("coures");
let vc = 0;
const dark = document.getElementById("dark");
headerbr.addEventListener("click", (params) => {
  const c = Math.floor(Math.random() * 1000);
  myheader.style.backgroundColor = "#" + c;
  coures.style.backgroundColor = "#" + c;
  dark.style.backgroundColor = "#" + Math.floor(Math.random() * 1000);

  vc = c;
});

// when  i click on change Title  BG of
const titlebg = document.getElementById("titlebg");
const cbh = document.querySelectorAll("h1");

titlebg.addEventListener("click", (params) => {
  let zz = Math.floor(Math.random() * 1000);
  cbh.forEach((element) => {
    element.style.backgroundColor = "#" + zz;
  });
  if (vc == 0) {
    cbh[0].style.backgroundColor = "#3d4a59";
  } else {
    cbh[0].style.backgroundColor = "#" + vc;
  }
});
// when i click on Title color change color of text
const titlecolor = document.getElementById("titlecolor");
titlecolor.addEventListener("click", (params) => {
  let co = Math.random().toString(16).slice(2, 8);
  cbh.forEach((element) => {
    element.style.color = "#" + co;
  });
});

// when i click on section Gb change the bg color of section
// 1 methode :
const arrayy = ["#2b7a00", "#b30000", "black"];
const as = document.querySelectorAll("section");
const sectionbg = document.getElementById("sectionbg");
let index = 0;
sectionbg.addEventListener("click", (params) => {
  as.forEach((element) => {
    element.style.backgroundColor = arrayy[index];
    element.style.transition = "2s";
  });
  index++;
  if (index >= arrayy.length) {
    index = 0;
  }
});
// 2 methode :

// const arrayy = ["#2b7a00", "#b30000", "#FFFB1E"];
// const as = document.querySelectorAll("section");
// const sectionbg = document.getElementById("sectionbg");
// sectionbg.addEventListener("click", (params) => {
//     const sc = Math.floor(Math.random() * (arrayy.length));
//     as.forEach((element) => {
//       element.style.backgroundColor = arrayy[sc];
//     });
//   });

//  3 method

// function rc(params) {
//     const sc = Math.floor(Math.random() * (arrayy.length));
//     return sc ;
// }
// const arrayy = ["#2b7a00", "#b30000", "#FFFB1E"];
// const as = document.querySelectorAll("section");
// const sectionbg = document.getElementById("sectionbg");
// sectionbg.addEventListener("click", (params) => {
//     as.forEach((element) => {
//       element.style.backgroundColor = arrayy[rc()];
//     });
//   });

// method 4

// const arrayy = ["#2b7a00", "#b30000", "#FFFB1E"];
// const as = document.querySelectorAll("section");
// const sectionbg = document.getElementById("sectionbg");
// sectionbg.addEventListener("click", (params) => {
//     const sc = Math.floor(Math.random() * (arrayy.length));
//     for (let i = 0; i < arrayy.length; i++) {
//         as[i].style.backgroundColor = arrayy[sc];
//     }
//   });

// auto writing

let counter = 1;
const autowriting = () => {
  const texxt = "Courses4Y";
  document.getElementById("coures").innerHTML = texxt.slice(0, counter);
  counter++;
  if (counter > texxt.length) {
    // counter= 1
    clearInterval(stoptexto);
  }
};
const stoptexto = setInterval(() => {
  autowriting();
}, 600);

// random video on click on random video
let conteur = 0;
const rv = document.getElementById("rv");
rv.addEventListener("click", () => {
  const arr = ["dNVZ0ZPfE8s", "t-1V1eqUkFw"];
  if (conteur >= arr.length) {
    conteur = 0;
  }
  document.getElementById("pifame").innerHTML = `
    <iframe  id="iframe" width="650" height="350" src="https://www.youtube.com/embed/${arr[conteur]}" title="YouTube video player" 
             frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             style=" margin-top: 10px; border: solid yellow 5px; border-radius: 20px;" allowfullscreen>
    </iframe>`;
  conteur++;
});
// random quotes on click on random quotes
let conteur2 = 0;
const rq = document.getElementById("rq");
rq.addEventListener("click", () => {
  const arr = [
    "<p id=quotes>“So many books, so little time.”</p>",
    "<p id=quotes> ! كلّ المواجعِ في الحياةِ يسيرةٌ إلاّ انكسارَ القلبِ ما أقساهُ  </p>",
    "<p id=quotes> النجاح الهائل يأتي عندما تتمكن من قتل نفسك الكسولة</p>",
    "<p id=quotes> شخص يشعر بالإحباط بعد بذل مجهود عظيم</p>",
    "<p id=quotes>❤️ إذا رضيت بقضاء ربك فأعلم أن ربك سيرضيك بجمال قدرك </p>",
  ];
  if (conteur2 >= arr.length) {
    conteur2 = 0;
  }
  document.getElementById("pquotes").innerHTML =
    "<h3 id=h3a>" + arr[conteur2] + "</h3>";
  conteur2++;
});

//
// change position of emojes

const click = document.getElementById("click");
click.addEventListener("click", () => {
  const arr = ["&#128155", "&#128151", "&#128154", "😍", "💝"];
  const se = setInterval(() => {
    const heart = document.createElement("div");
    heart.setAttribute("class", "div");
    heart.innerHTML = arr[Math.floor(Math.random() * arr.length)];
    heart.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`;
    heart.style.left = `${Math.random() * 100}%`;
    document.getElementById("continer").append(heart);
  }, 10);
  setTimeout(() => {
    clearInterval(se);
  }, 2000);
  setTimeout(() => {
    document.getElementById("continer").innerHTML = "";
  }, 3000);
});
// accordion 
const plus = document.querySelectorAll(".plus");
plus.forEach((element) => {
  element.addEventListener("click", (params) => {
    const content =
      params.target.parentElement.parentElement.getElementsByClassName(
        "content"
      )[0];
    content.classList.toggle("contentjs");
    // + & -
    element.classList.toggle("hide-plus");
    if (element.classList.contains("hide-plus")) {
      element.innerText = "__";
      element.style.transform = "translateY(-23%)";
      content.style.height = `${content.scrollHeight}px`;
    } else {
      element.innerText = "+";
      element.style.transform = "translateY(0%)";
      content.style.height = `0px`;
    }
  });
});
// section 8

setInterval(() => {
  const date = new Date();
  let H = date.getHours();
  let M = date.getMinutes();
  let S = date.getSeconds();
  if (S < 10) {
    S = "0" + S;
  }
  if (M < 10) {
    M = "0" + M;
  }
  if (H < 10) {
    H = "0" + H;
  }
  document.getElementById(
    "d1s8"
  ).innerHTML = `${date.toDateString()}<br><br>${H} : ${M} : ${S}`;
}, 1000);
// section 9
//next button
const s9arr = ["imgs/0.jpg","imgs/1.jpg","imgs/2.jpg","imgs/3.jpg","imgs/4.jpg"]
const imgs9 = document.getElementById("imgs9");
const next = document.getElementById("next");
const bre = document.getElementById("bre");
const divs9p = document.querySelectorAll(".ppp")
const ps9 = document.getElementById("ps9")
let ii = 0;

// when i click in button name next  change img 
next.addEventListener("click", (params) => {
  imgs9.removeAttribute("src")
  bre.classList.remove("styleAfterfinaleimg")
  ii += 1;

  divs9p.forEach(element => {
    element.style.backgroundColor="transparent"
  });
  divs9p[ii].style.backgroundColor="#00a6ff"
  if (ii > 3) {
    imgs9.setAttribute("src", "imgs/" + 4 + ".jpg");
    next.classList.add("styleAfterfinaleimg")
  }
  ps9.innerHTML= `img ${ii+1} of 5 `

    imgs9.setAttribute("src", `${s9arr[ii]}`);


});
// when i click in button name bre vhange img 
bre.addEventListener("click", (params) => {
  next.classList.remove("styleAfterfinaleimg")
  ii -= 1; 
  imgs9.setAttribute("src", "imgs/" + ii + ".jpg");
  divs9p.forEach(element => {
    element.style.backgroundColor="transparent"
  });
  divs9p[ii].style.backgroundColor="#00a6ff"
  if (ii < 1) {
    imgs9.setAttribute("src", "imgs/" + 0 + ".jpg");
    bre.classList.add("styleAfterfinaleimg")
  }
  ps9.innerHTML= `img ${ii+1} of 5 `
});
