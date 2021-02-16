import $ from "jquery";

let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
let regexe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let email = document.getElementById("email");
let btn = $(".but-2");
let inp1 = $(".name");
let inp2 = $(".number");
let inp3 = $(".email");
let list = $(".task");

$(".but-1").click(function (event) {
  $(".container").css("display", "block");
});

$(".but-2").on("click", function (event) {
  if (!$(".name").val()) {
    alert("name field is empty");
    $(".name").css("backgroundColor", "#db4242ce");
    event.preventDefault();
  }
  if (!$(".number").val()) {
    alert("number field is empty");
    $(".number").css("backgroundColor", "#db4242ce");
    event.preventDefault();
  }
  if (!$(".email").val()) {
    alert("E-mail field is empty");
    $(".email").css("backgroundColor", "#db4242ce");
    event.preventDefault();
  }
  if (!regex.test($(".number").val())) {
    alert("Put a numbers!");
    $(".number").css("backgroundColor", "#db4242ce");
    return;
  } else {
    console.log("Соответствует");
  }
  if (!regexe.test($(".email").val())) {
    alert("Put a right e-mail!");
    $(".number").css("backgroundColor", "#db4242ce");
    return;
  } else {
    console.log("Соответствует");
  }

  if ($(".name").val() && $(".number").val() && $(".email").val()) {
    console.log("z[ustilos li");
    test1();
  }
});

$(".but-3").click(function () {
  $(".container").css("display", "none");
});

// btn.on("click", function () {
//   let obj = {
//     task: inp1.val(),
//     task2: inp2.val(),
//     task3: inp3.val()
//   };
//   setItemToStorage(obj);
//   render();
//   inp1.val("");
//   inp2.val("");
//   inp3.val("");
// });

function test1() {
  console.log("test1");
  let obj = {
    task: inp1.val(),
    task2: inp2.val(),
    task3: inp3.val()
  };
  setItemToStorage(obj);
  render();
  inp1.val("");
  inp2.val("");
  inp3.val("");
}

function setItemToStorage(task) {
  if (!localStorage.getItem("tasks-data")) {
    localStorage.setItem("tasks-data", "[]");
  }

  let data = JSON.parse(localStorage.getItem("tasks-data"));
  data.push(task);
  localStorage.setItem("tasks-data", JSON.stringify(data));
}

function render() {
  if (!localStorage.getItem("tasks-data")) {
    localStorage.setItem("tasks-data", "[]");
  }
  let newData = JSON.parse(localStorage.getItem("tasks-data"));

  list.html(" ");
  newData.forEach((item) => {
    list.append(
      `<li>${item.task} ${item.task2} ${item.task3}  <button class="btn-delete">Delete</button></li>`
    );
  });
}

$("body").on("click", ".btn-delete", function () {
  let data = JSON.parse(localStorage.getItem("tasks-data"));
  let index = $(this).parent().index();

  data.splice(index, 1);
  localStorage.setItem("tasks-data", JSON.stringify(data));
  render();
});
render();

//  ТИПЫ НОМЕРОВ КОТОРЫЕ ПРОЙДУТ
// 89000000000
// +79000000000
// 8-900-000-00-00
// +7-900-000-00-00
// 8(900)0000000
// 8(900)000 00 00
// +7 (900) 000 00 00
// 8(900)-000-00-00
// +7(900)-000-00-00
// +7(900)000-00-00
// 8 900 000 00 00
// +7 900 000 00 00
// 8-(900) 000 00 00
// +7-(900) 000 00 00
// 8-(900)-000-00-00
// +7-(900)-000-00-00
// 7(999)999 99 99
// 79000000000
// 7-900-000-00-00
// 7-(900)-000-00-00
// 7(900)-000-00-00
// 7(900) 000 00 00
// 7 (900)-000-00-00
// 7 (900) 000 00 00
// 7 900 000 00 00
// 8000000000
// 9000000000
// 800 000 00 00
// 900 000 00 00
// 800-000-00-00
// 900-000-00-00
// (800)-000-00-00
// (900)-000-00-00
