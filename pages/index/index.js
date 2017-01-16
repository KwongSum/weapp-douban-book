//index.js
//获取应用实例
var app = getApp();
const request=require("../../utils/requests");
var star = require("../../utils/star");
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    count:0,
    imgUrls:[
      "../../images/banner1.jpg",
      "../../images/banner2.jpg"
      ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    toRe:0

  },
  toHandel:function () {
      var that=this;
      wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 1000
      })
      request.getBookList(that.data.toRe,"",function(res){
          var types = res.data.books;
          for (var i = 0; i < types.length; ++i) {
              var book = types[i];
              var rating = book.rating;

              rating.block = star.get_star(rating.average);
          }
          res.data.books = types;
          console.log(res.data.books);
          if(res.data.count==0){
              return;
          }
          that.setData({bookList:res.data.books,count:that.data.count+res.data.count});

      });
  },
  toRefresh: function (e) {
      var that=this;
      this.setData({
          toRe : star.toRefresh()
      });
      that.toHandel();
      console.log("随机换一个栏目ID");
      console.log(that.data.toRe);
  },
  onLoad:function (options) {
      var that=this;
      that.setData({
          toRe : star.toRefresh()
      });
      console.log("加载");
      console.log(that.data.toRe);


      request.getBookList(that.data.toRe,"",function(res){
          var types = res.data.books;
          for (var i = 0; i < types.length; ++i) {
              var book = types[i];
              var rating = book.rating;

              rating.block = star.get_star(rating.average);
          }
          res.data.books = types;
          console.log(res.data.books);
          if(res.data.count==0){
              return;
          }
          that.setData({bookList:res.data.books,count:that.data.count+res.data.count});

      });


  },
   /* toRefresh:function(){
      var that=this;
        this.setData({start:0});
        that.searchHandel();
    },*/
  upper: function(e) {
    console.log("已到顶部");

  },
  lower: function(e) {
    console.log("已到低部");
    var that=this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    });
    request.getBookList(that.data.toRe,{start:that.data.count},function(res){
        var types = res.data.books;
        for (var i = 0; i < types.length; ++i) {
            var book = types[i];
            var rating = book.rating;
            rating.block = star.get_star(rating.average);
        }
        res.data.books = types;
        console.log(res.data.books);
      if(res.data.count==0){return;}
      that.setData({bookList:that.data.bookList.concat(res.data.books),count:that.data.count+res.data.count});
      wx.hideToast();
    })
  }


})
