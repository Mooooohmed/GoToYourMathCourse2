const stages = document.querySelector(".stages");
const stagesBtn = document.querySelector(".stages__btn--defualt");
const stagesMenu = document.querySelector(".stages__menu");
const stagesMenuButtons = document.querySelectorAll(".stages__menu button"); // all buttons in the list (gives array)
// ..............................................................
const btnStagesAttr = [];
stagesMenuButtons.forEach(function (btn) {
  // console.log(btn);
  btnStagesAttr.push(btn.getAttribute("data-stage"));
  // console.log(btnStagesAttr); // every element in array (function معرفة داخل ال )
});
// console.log(btnStagesAttr); // all element in single array (function معرفة خارج ال )
// .................................select your grade..................................
const grades = document.querySelector(".grades");
const gradesBtn = document.querySelector(".grades__btn--defualt");
const primGradesMenu = document.querySelector(".grades__menu-prim");
const primGradesMenuButtons = primGradesMenu.querySelectorAll("button");
const prepGradesMenu = document.querySelector(".grades__menu-prep");
const prepGradesMenuButtons = prepGradesMenu.querySelectorAll("button");
const secGradesMenu = document.querySelector(".grades__menu-sec");
const secGradesMenuButtons = secGradesMenu.querySelectorAll("button");
const choosenGradeArray = [primGradesMenu, prepGradesMenu, secGradesMenu];
// ------------------------------------------------------------------------
const btnGradesAttr = [];
primGradesMenuButtons.forEach(function (btn) {
  btnGradesAttr.push(btn.getAttribute("data-grade"));
});
prepGradesMenuButtons.forEach(function (btn) {
  btnGradesAttr.push(btn.getAttribute("data-grade"));
});
secGradesMenuButtons.forEach(function (btn) {
  btnGradesAttr.push(btn.getAttribute("data-grade"));
});
// console.log(btnGradesAttr);
// ------------------------------------------------------------------------
const termChoose = document.querySelector(".select-term");
const termSelectorBtn = document.querySelector(".select-term__btn");
const termMenu = document.querySelector(".select-term__menu");
const termMenuButtons = document.querySelectorAll(".select-term__menu button");
const btnTermAttr = [];
termMenuButtons.forEach(function (btn) {
  btnTermAttr.push(btn.getAttribute("data-term"));
});
// ..............................................................
const GoYourCourse = document.querySelectorAll(".final-course");
const GoYourCourseBtn = document.querySelector(".final-course button");
const GoYourCourseAncors = document.querySelectorAll(".final-course a"); // all buttons in the list
const GoYourCourseAttr = [];
GoYourCourseAncors.forEach(function (ele) {
  GoYourCourseAttr.push(ele.getAttribute("data-course")); // all attributes in the buttons in single array
});
// console.log(GoYourCourseAttr);
// ------------------------------------------------------------------------
const angleIconStage = document.querySelector(".stages #angle-icon");
const angleIconGrade = document.querySelector(".grades  #angle-icon");
const angleIconTerm = document.querySelector(".select-term #angle-icon");
// ---------------------- functions --------------------------------------------------
// لو داس في اي مكان فاضي تقفل القايمة
function CloseIt(subMenu, mainMenu) {
  document.addEventListener("click", function (event) {
    let isClickInsideMenu = mainMenu.contains(event.target); // retrun true or false
    // console.log(isClickInsideMenu);
    if (!isClickInsideMenu) {
      subMenu.classList.remove("active");
      if (mainMenu === stages) {
        angleIconStage.className =
          "stages__text d-block fa-solid fa-angle-left fa-angle-down--size";
      }
      if (mainMenu === grades) {
        angleIconGrade.className =
          "grades__text d-block fa-solid fa-angle-left fa-angle-down--size";
      }
      if (mainMenu === termChoose) {
        angleIconTerm.className =
          "select-term__text d-block fa-solid fa-angle-left fa-angle-down--size";
      }
    }
  });
}
// ------------------------------------------------------------------------
// لو مكنش اختار بالترتيب المنطقي اظهر رسالة و اقفل كل حاجة مفتوحة
function validateSelection(btn, name) {
  if (btn.querySelector("span").textContent === `select your ${name}`) {
    window.alert(`please you should select your ${name}`);
    stagesMenu.classList.remove("active");
    choosenGradeArray.forEach(function (menu) {
      menu.classList.remove("active");
      termMenu.classList.remove("active");
    });
    return false;
  }
  return true;
}
// ------------------------------------------------------------------------
// لتغير شكل السهم الصغير مع الفتح و القفل
function openClose(icon) {
  if (icon.classList.contains("fa-angle-left")) {
    icon.classList.replace("fa-angle-left", "fa-angle-down");
  } else if (icon.classList.contains("fa-angle-down")) {
    icon.classList.replace("fa-angle-down", "fa-angle-left");
  }
}
// ------------------------------------------------------------------------
// choose form sub menu and close it
let nameOfStage;
let nameOfGrade;
let nameOfTerm;
let FinalBtnTarget;
let shouldOpenModal;
// console.log(nameOfStage);  // udefined // سيبك منه مش مهم
//event listner  غير معرفين في الجوبل اسكوب لوجود
//if condition هيبقوا معرفين بعد ما يدخل ال
function selectedMenu(subMenu, mainBtn, mainMenu, arrayOfAtrr, atrr) {
  subMenu.addEventListener("click", function (ele) {
    for (let i = 0; i < arrayOfAtrr.length; i++) {
      if (ele.target.getAttribute(`${atrr}`) === `${arrayOfAtrr[i]}`) {
        // console.log(`${arrayOfAtrr[i]}`);
        mainBtn.querySelector("span").textContent = `${arrayOfAtrr[i]}`;
        subMenu.classList.remove("active");
        mainMenu.classList.add("fade");
        // -----------------------------
        if (mainBtn === stagesBtn) {
          nameOfStage = mainBtn.querySelector("span").textContent;
          // عشان بعد ما تتختار السهم يرجع لوضعه الطبيعي
          angleIconStage.className =
            "stages__text d-block fa-solid fa-angle-left fa-angle-down--size";
        }
        if (mainBtn === gradesBtn) {
          nameOfGrade = mainBtn.querySelector("span").textContent;
          angleIconGrade.className =
            "grades__text d-block fa-solid fa-angle-left fa-angle-down--size";
        }
        // if (mainBtn === termSelectorBtn) {
        //   nameOfTerm = mainBtn.querySelector("span").textContent;
        // }
      }
    }
  });
}
// ------------------------------------stage select------------------------------------
stagesBtn.addEventListener("click", function () {
  // شغال click للتأكد ان ال  // console.log("Hellow world");
  stagesMenu.classList.toggle("active");
  //  ----------------  << function الاختيار من القائمة هيروح ينادي   ------------
  CloseIt(stagesMenu, stages);
  openClose(angleIconStage);
  selectedMenu(stagesMenu, stagesBtn, stages, btnStagesAttr, "data-stage");
  // reset the defualt view
  stagesBtn.querySelector("span").textContent = `select your stage`;
  gradesBtn.querySelector("span").textContent = `select your grade`;
  termSelectorBtn.querySelector("span").textContent = `select your term`;
  stages.classList.remove("fade");
  grades.classList.remove("fade");
  termChoose.classList.remove("fade");
  choosenGradeArray.forEach(function (menu) {
    menu.classList.remove("active");
  });
  termMenu.classList.remove("active");
  termSelectorBtn.removeAttribute("disabled");
  GoYourCourseBtn.setAttribute("disabled", true);
  nameOfStage = undefined;
  nameOfGrade = undefined;
  nameOfTerm = undefined;
  FinalBtnTarget = undefined;
  shouldOpenModal = true;
});
// ------------------------------------grade select------------------------------------
gradesBtn.addEventListener("click", function () {
  validateSelection(stagesBtn, "stage");
  // -------------------------
  choosenGradeArray.forEach(function (menu) {
    if (menu.getAttribute("data-stage") === nameOfStage) {
      menu.classList.toggle("active"); // كده مش هتفتح غير لما يحدد المرحلة الاول
      //  ----------------  << function الاختيار من القائمة هيروح ينادي   ------------
      CloseIt(menu, grades);
      openClose(angleIconGrade);
      selectedMenu(menu, gradesBtn, grades, btnGradesAttr, "data-grade");
      // -------------------------
      gradesBtn.querySelector("span").textContent = `select your grade`;
      termSelectorBtn.querySelector("span").textContent = `select your term`;
      grades.classList.remove("fade");
      termChoose.classList.remove("fade");
      termMenu.classList.remove("active");
      shouldOpenModal = true;
    }
  });
});
termSelectorBtn.addEventListener("click", function () {
  if (`${nameOfGrade}` === "sec three") {
    termSelectorBtn.setAttribute("disabled", true);
    GoYourCourseBtn.removeAttribute("disabled");
    GoYourCourseBtn.setAttribute("data-bs-toggle", "modal");
    GoYourCourseBtn.setAttribute("data-bs-target", "#staticBackdrop");
    termChoose.classList.add("fade");
  } else if (validateSelection(gradesBtn, "grade")) {
    termMenu.classList.toggle("active");
    CloseIt(termMenu, termChoose);
    openClose(angleIconTerm);
    selectedMenu(
      termMenu,
      termSelectorBtn,
      termChoose,
      btnTermAttr,
      "data-term"
    );
    termSelectorBtn.querySelector("span").textContent = `select your term`;
    termChoose.classList.remove("fade");
    shouldOpenModal = true;
  }
  // console.log(nameOfTerm); // undefined
  // الحالي event listner مش هيبقي معرف غير لما يخرج من ال
  //مخصوص له event listner و بالتالي هعمل
});
//nameOfTerm reassigin  هنعمل

termMenu.addEventListener("click", function (ele) {
  angleIconTerm.className =
    "select-term__text d-block fa-solid fa-angle-left fa-angle-down--size";
  GoYourCourseBtn.removeAttribute("disabled");
  nameOfTerm = ele.target.textContent.trim();
  GoYourCourseAttr.forEach(function (atr) {
    if (atr === `${nameOfStage} ${nameOfGrade} ${nameOfTerm}`) {
      FinalBtnTarget = atr;
    }
  });
  if (
    FinalBtnTarget === `preparatory stage prep three first term` ||
    FinalBtnTarget === `preparatory stage prep three second term`
  ) {
    shouldOpenModal = false;
  }
  if (shouldOpenModal) {
    GoYourCourseBtn.setAttribute("data-bs-toggle", "modal");
    GoYourCourseBtn.setAttribute("data-bs-target", "#staticBackdrop");
  }
  if (!shouldOpenModal) {
    GoYourCourseBtn.removeAttribute("data-bs-toggle", "modal");
    GoYourCourseBtn.removeAttribute("data-bs-target", "#staticBackdrop");
  }
});
GoYourCourseBtn.addEventListener("click", function () {
  if (!shouldOpenModal) {
    // console.log(FinalBtnTarget);
    GoYourCourseAncors.forEach(function (ele) {
      if (ele.getAttribute("data-course") === FinalBtnTarget) {
        ele.classList.add("active");
        const href = ele.getAttribute("href");
        window.open(href, "_blank");
      }
    });
  }
  GoYourCourseBtn.setAttribute("disabled", true);
});
// -----------------------------------------------------------------------------------
const currentSpanYear = document.getElementById("current-year");
console.log(currentSpanYear);
currentSpanYear.textContent = new Date().getFullYear();
