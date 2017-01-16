// pages/detail/detail.js
const request=require("../../utils/requests");
var star = require("../../utils/star");
Page({
  data:{
      id:""
  },
  onLoad:function(options){
      // 页面初始化 options为页面跳转所带来的参数
      var that=this;
      that.setData({ id:options.id});
      wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 10000
      })
      request.getBookById(that.data.id,function(res){

          var types =res.data;
          var rating = types.rating;
          rating.block = star.get_star(rating.average);

          res.data = types;
          console.log(res.data);

          that.setData({bookInfo:res.data});
      });
  },
  onReady:function(){
    // 页面渲染完成
   wx.hideToast();
  },
  onShow:function(){
    // 页面显示
    console.log("显示");
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})