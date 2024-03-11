$(document).ready(function () {

    $(".menu--enter").on("click",()=>{
    
        $(".menu").css({
            right:"0%"
        })
    })

    $("a").on("click",()=>{
    
        $(".menu").css({
            right:"-100%"
        })
    })
    
    $(".menu--exit").on("click",()=>{
        
        $(".menu").css({
            right:"-100%"
        })
    })
    
});

