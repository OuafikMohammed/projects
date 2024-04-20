document.getElementById("btn-hide").addEventListener("click",function(){
    $("#title-1").hide();
    
})
$('#btn-show-red').on("click",()=>{
    $(".paragraph").show();
    $(".paragraph").css('color','red');
})

$('.inputtxt').on("focus",()=>{
    $(".inputtxt").css('backgroundColor','green')
})
$('#title-1').on("hover",()=>{
    $("#title-1").css('Color','yellow')
})