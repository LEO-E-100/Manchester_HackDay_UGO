/**
 * Created by Leo on 15/07/2017.
 */

console.log("Hello world")

function handleProgressClick (e) {
    var x = e.pageX - this.offsetLeft;
    var clickedValue = x * this.max / this.offsetWidth;
    console.log(x)
}

// document.getElementById('progress').addEventListener('click', handleProgressClick)


fetch('https://young-taiga-28780.herokuapp.com/service/RW3MR').then(function(res){
    return res.json()
}).then(function(body){
    $('#loading').replaceWith(
        $('<div>', {class: 'container'})
        .append($('<h1/>', {class: 'title', text: 'NHS feedback'}))
        .append($('<p/>', {text: `How would you rate your service at ${body.name} today?`}))
    );
//     var containerDiv = `<div class = 'container'>
// <h1 class='title'>NHS feedback</h1>
//
// <p>How would you rate your service at ${body.name} today?</p>
//
// <div class = 'icons'>
// <span class = 'icon is-large' id = "1">
//     <i class = 'fa fa-star'></i>
// </span>
//
// <span class = 'icon is-large' id = "2">
//     <i class = 'fa fa-star'></i>
// </span>
//
// <span class = 'icon is-large' id = "3">
//     <i class = 'fa fa-star'></i>
// </span>
//
// <span class = 'icon is-large' id = "4">
//     <i class = 'fa fa-star'></i>
// </span>
//
// <span class = 'icon is-large' id = "5">
//     <i class = 'fa fa-star'></i>
// </span>
// </div>
//
// <button class = 'button is-primary'>Submit</button>
// </div>`
//     $('#loading').replaceWith(containerDiv)
})

