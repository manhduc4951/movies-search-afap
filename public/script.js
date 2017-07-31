$( document ).ready(function(e) {
    $(".thumbnail").mouseenter(function(){
         $(this).children('.tooltip-span').show();
         $(this).children('.tooltip-span').css({position:"absolute", top: "10px", left: "25px"});
    });
    
    $(".thumbnail").mouseleave(function(){
         $(this).children('.tooltip-span').hide();
    });
    
    
});

// var tooltipSpan = document.querySelector('.tooltip-span');

// window.onmousemove = function (e) {
//     var x = e.clientX,
//         y = e.clientY;
//     tooltipSpan.style.top = (y + 20) + 'px';
//     tooltipSpan.style.left = (x + 20) + 'px';
// };