var $$ = {
    Swiper:function(){
        mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    },

    canviSide:function(){
        var canviLeft = new Canvi({
            content: '.js-canvi-content',
            navbar: '.js-canvi-navbar-left',
            openButton: '.js-canvi-open-button-left',
            position: 'left',
            pushContent: false,
            width: '3.92rem',
            speed: '0.5s'
        });
        $(".listIcon").on('click',function () {
            canviLeft.close();
        })
    },

    goBack:function(){
        $("#closePhoto").on('click',function () {
            history.back(-1)
        })
    },

    return:function () {
        $(".return img").on('click',function () {
            history.back(-1)
        })
    },

    vipSwiper:function () {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay:true,
            delay:500,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },

    sideBar:function(){
            $('.sideBar').hide();
            $('.backIcon img').on('click',function () {
            $('.sideBar').toggle();

        })
    },


    addIndex:function () {
        $(".backIcon img").on('click',function () {
            $(".twoIcon").css('margin-top','-2.7rem');
            $(".listIcon").css('margin-top','0.1rem');
            $(".toggleBtn").css('height','0.3rem');
            $(".twoIcon .loginIcon").css('margin-top','0');
        })
    },

}
