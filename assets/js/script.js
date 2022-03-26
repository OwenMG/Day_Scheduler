// hooking DOM elements to variables
var currentTimeEl = $("#currentDay");
var plannerField = $("#plannerField")
var blocks = document.getElementsByClassName("block");

// setting moment variables.
var now = moment();
var hour = now.hour();

// displaying current time under website title
currentTimeEl.text(now.format("dddd, MMMM Do, h:mm a"));

// styling and filling hour blocks on page load
for (i=0; i<blocks.length; i++) {
    var selectedBlock = $(blocks[i]);
    var blockID = selectedBlock.data('id');
    // colors by time
    if (blockID < hour) {
        selectedBlock.children(1).addClass("past");
        console.log(hour);
        console.log(selectedBlock);
    }
    if (blockID == hour) {
        selectedBlock.children(1).addClass("present");
    }
    if (blockID > hour) {
        selectedBlock.children(1).addClass("future");
    }
    var loadedStorage = localStorage.getItem(blockID);
    selectedBlock.children("input").val(loadedStorage);
}

// creating save button function
var saveTask = function(event) {
    var savedHour = $(this).parent().attr("data-id")
    console.log(savedHour);
    var savedTask = $(".inputField" + savedHour.toString()).val();
    console.log(savedTask);
    localStorage.setItem(savedHour, savedTask);
}

// linking save function to save buttons
$(".saveBtn").on("click", saveTask)