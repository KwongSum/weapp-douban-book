// pages/search/search.js
const request=require("../../utils/requests");
var star = require("../../utils/star");
Page({
  data:{
      value:"",
      bookList:null,
      count:0
  },
  changeValue:function(e){
      this.setData({value:e.detail.value});
  },
    searchHandel:function(){
        var that=this;
        if(that.data.value.replace(/\s/g,"")){
            that.setData({
                bookList:null
            })
            wx.showToast({
                title: '加载中',
                icon: 'loading',
                duration: 10000
            })
            request.searchBook({q:that.data.value},function(res){
                var types = res.data.books;
                for (var i = 0; i < types.length; ++i) {
                    var book = types[i];
                    var rating = book.rating;

                    rating.block = star.get_star(rating.average);
                }
                res.data.books = types;
                console.log(res.data.books);

                if(res.data.count==0){return;}
                that.setData({bookList:res.data.books,count:that.data.count+res.data.count});
                wx.hideToast();
                console.log(res.data);
            })
        }
        else
        {
            wx.showToast({
                title: '请输入书名',
                icon:"loading"
            })
        }
    },
    toSearch:function(){
        var that=this;
        this.setData({start:0});
        that.searchHandel();
    },
    lower: function(e) {
        console.log("已到低部");
        var that=this;
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 10000
        })
        var sobj=that.data.bookTag ?{tag:that.data.bookTag,start:that.data.count}:{q:that.data.value,start:that.data.count};
        request.searchBook(sobj,function(res){
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
    },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})