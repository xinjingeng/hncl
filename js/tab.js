function TabsFn() {}

TabsFn.prototype = {
    constructor: TabsFn,
    init: function(){
        this.bindEvent();
    },
    // 绑定事件
    bindEvent: function () {
        $('.click-items').click(function () {
            // console.log($('.click-items'));
            //  $(this).addClass('active').siblings().removeClass('active');
            $('.click-items').removeClass('active');
            $(this).addClass('active');

            console.log($('.click-items').removeClass('active'))
            console.log($(this).addClass('active'))
        });


        // var liList = document.getElementsByClassName("click-items");
        // for(let i = 0; i<liList.length; i++) { 
        //     var index = liList[i]
        //     liList[i].onclick=function() {
        //         for(var j = 0;j<liList.length;j++){

        //             liList[j].classList.remove("active")
        //         }
        //         this.classList.add("active")
        //     }
        // }
        
        
    }
};