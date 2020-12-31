console.log('Autobots Roll Out');

let clickCounter = 0;

$(document).ready(handleReady);

function handleReady() {
    console.log('in handleReady');

    //click listener for Generate Button
    $(document).on('click', '#genButton', addDiv);

    $(document).on('click', '.yellowButton', changeColor);
    $(document).on('click', '.deleteDiv', deleteDiv);

}; //end handleReady

function addDiv() {
    console.log('clicked GENERATE');

    //getting rid of zombie dupes
    $('#clickCounter').empty();
    //incrementing clickCounter
    clickCounter++;
    console.log(clickCounter);

    //appending div element to DOM
    $('.element').append(`
    <div class="redDiv redColor">
    <p>CLICK COUNTER: ${clickCounter}</p>
    <button type="button" class="yellowButton">YELLOW</button>
    <button type="button" class="deleteDiv">DELETE</button>
    `);

    //clearing input
    $('#clickCounter').val('');

}; //end addDiv

function changeColor() {
    console.log('Poof ... Yellow!');

    $(this).parent().removeClass('redColor');
    $(this).parent().addClass('addYellow');

}; //end changeColor

function deleteDiv () {
    console.log('DELETED');

    $(this).parent().empty();
}




console.log('end file')