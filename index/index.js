window.onload = function () {
    new fullpage('#fullpage', {
        navigation:true,
        navigationTooltips: ['个人信息','技能','项目','联系方式'],
        //菜单的绑定
        anchors:["page1","page2","page3","page4"],
        menu:"#menu",
        afterLoad: function(orgin, next, direction){

            console.log(orgin);
            console.log(next);
            console.log(direction);
        },
        afterRender: function(){
            var mySwiper = new Swiper ('.swiper-container', {
                loop:true,
                autoplay:{
                    delay:5000,
                    disableOnInteraction: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                },
                effect : 'cube',
                lockAnchors: false,
            })
        }
    });

}
