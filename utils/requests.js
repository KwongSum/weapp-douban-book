var api = require('./config.js');
//网络请求模块
function request(url, data, successCb, errorCb, completeCb) {
    wx.request({
        url: url,
        method: 'GET',
        data: data,
        success: successCb,
        error: errorCb,
        complete: completeCb
    });
}

//搜索图书 
function searchBook(data, successCb, errorCb, completeCb) {
    request(api.searchBook, data, successCb, errorCb, completeCb);
}
//获取图书详细信息
function getBookById(id, successCb, errorCb, completeCb) {
    request(api.getBookById+id, "", successCb, errorCb, completeCb);
}
//获取丛书列表
function getBookList(id, data, successCb, errorCb, completeCb) {
    request(api.getBookList.replace(':id', id), data, successCb, errorCb, completeCb);
}

//
module.exports = { searchBook: searchBook, getBookById: getBookById, getBookList:getBookList}