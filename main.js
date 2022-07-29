/** @format */

mouseEvent = "";
canvas = canvas.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "";
width = "";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = "color_line";
    width = "width_line";
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX = canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY = canvas.offsetTop;

    if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.linTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    mouseEvent = "touchstart";
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.linTo(current_position_of_touch_y, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}
