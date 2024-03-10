$(document).ready(function () {

    $(".menu--enter").on("click",()=>{
    
        $(".menu").css({
            right:"0%"
        })
    })


    
    $(".menu--exit").on("click",()=>{
        
        $(".menu").css({
            right:"-100%"
        })
    })
    
});

