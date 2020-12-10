! function($) {
    const $loutinav = $('#loutinav'); //获取整个楼梯
    const $louti = $('#loutinav li').not('.last'); //获取除最后的li
    const $louceng = $('.louceng'); //获取楼层


    //滚轮事件
    function scroll() {
        let $scrolltop = $(window).scrollTop();
        if ($scrolltop >= 400) {
            $loutinav.show();
        } else {
            $loutinav.hide();
        }

        //楼层事件
        $louceng.each(function(index, element) {
            let $loucengtop = $(element).offset().top;
            if ($loucengtop >= $scrolltop) {
                $louti.removeClass('active');
                $louti.eq(index).addClass('active').siblings('li').removeClass('active');
                return false;

            }

        })
    }

    scroll();

    $(window).on('scroll', function() {
        scroll();
    })

    $louti.on('click', function() {
        $(window).off('scroll');
        $(this).addClass('active').siblings('li').removeClass('active');
        let $loucengtop = $louceng.eq($(this).index()).offset().top;
        $('html').animate({
            scrollTop: $loucengtop
        }, function() {
            $(window).on('scroll', function() {
                scroll();
            })
        })

    })

    $('.last').on('click', function() {
        $('html').animate({
            scrollTop: 0
        })
    })


}(jQuery);