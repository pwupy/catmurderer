function show(what) {
  what.classList.remove("hidden");
} 

function hide(what) {
  what.classList.add("hidden");
}

function showAll(thing) {
  var items = document.getElementsByClassName(thing);
  for (var i of items) {
    show(i);
  }
}

function hideAll(thing) {
  var items = document.getElementsByClassName(thing);
  for (var i of items) {
    hide(i);
  }
}

function go(where) {
  hideAll("room");
  show(where);
}

function get(what) {
  show(what);
  hideAll("lacks_" + what.id);
  showAll("has_" + what.id);
}

function drop(what) {
  hide(what);
  showAll("lacks_" + what.id);
  hideAll("has_" + what.id);
}

function setup() {
  var items = document.getElementsByClassName("item");
  for (var i of items) {
    drop(i);
  }
  go(start);
  show(allRooms);
}

setup();
