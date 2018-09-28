
$(".ns-item").hover(function(){
    $(this).find(".text .top").css("color","#1874dc");
},function () {
    $(this).find(".text .top").css("color","#333");
});
for(var n=0;n<4;n++){
    (function(n){
        $(".nav-center").find("a").eq(n+1).hover(function(){
            $(".nav-second").eq(n).show();
        },function () {
            $(".nav-second").eq(n).hover(function () {
                $(".nav-second").eq(n).show();
            },function () {
                $(".nav-second").hide();
            })
            $(".nav-second").hide();
        });
    })(n);
}
