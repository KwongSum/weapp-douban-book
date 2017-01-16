//星级图Date 
const starDate =  {
    star : [
        {
            src : "../../images/icon_star_0.png",
            name : '零星'
        },
        {
            src : "../../images/icon_star_0_5.png",
            name : '半星'
        },
        {
            src : "../../images/icon_star_1.png",
            name : '一星'
        },
        {
            src : "../../images/icon_star_1_5.png",
            name : '一星半'
        },
        {
            src : "../../images/icon_star_2.png",
            name : '二星'
        },
        {
            src : "../../images/icon_star_2_5.png",
            name : '二星半'
        },
        {
            src : "../../images/icon_star_3.png",
            name : '三星'
        },
        {
            src : "../../images/icon_star_3_5.png",
            name : '三星半'
        },
        {
            src : "../../images/icon_star_4.png",
            name : '四星'
        },
        {
            src : "../../images/icon_star_4_5.png",
            name : '四星半'
        },
        {
            src : "../../images/icon_star_5.png",
            name : '五'
        }
    ]
};
//计算分数，插入对应的图片
function get_star(timer) {
    console.log("开始计算星星");
    var block = starDate.star[ Math.floor(timer)].src;
    /*var block; 
    if(timer < 1){
        block = starDate.star[0].src;
        //console.log('零星');
    }else if (timer >= 1 && timer < 2){
        block = starDate.star[1].src;
        //console.log('半星');
    }else if (timer >= 2 && timer < 3){
        block = starDate.star[2].src;
        //console.log('一个');
    }else if (timer >= 3 && timer < 4){
        block = starDate.star[3].src;
        //console.log('一星半');
    }else if (timer >= 4 && timer < 5){
        block = starDate.star[4].src;
        //console.log('二星');
    }else if (timer >= 5 && timer < 6){
        block = starDate.star[5].src;
        //console.log('二星半');
    }else if (timer >= 6 && timer < 7){
        block = starDate.star[6].src;
        //console.log('三星');
    }else if (timer >= 7 && timer < 8){
        block = starDate.star[7].src;
        //console.log('三星半');
    }else if (timer >= 8 && timer < 9){
        block = starDate.star[8].src;
        //console.log('四星');
    }else if (timer >= 9 && timer < 10){
        block = starDate.star[9].src;
        //console.log('四星半');
    }else if (timer >= 10){
        block = starDate.star[10].src;
        //console.log('五星');
    }*/
    return block;

}
//随机一个200内的数字，用于调用首页列表
function toRefresh(){
    var num = Math.random();  //Math.random()：得到一个0到1之间的随机数
    num = Math.ceil(num * 200);  //num*80的取值范围在0~80之间,使用向上取整就可以得到一个1~80的随机数
    var str;
    str = num.toString();
    return str;

}
//
module.exports = {
    starDate: starDate,
    get_star: get_star,
    toRefresh: toRefresh
}