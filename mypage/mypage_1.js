// mypage/mypage_1.js
const util = require('../utils/util.js');
const api = require('../config/api.js');
var user = require('../services/user.js');


const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    siteurl: api.TdApi,
    ads: [],
    brands: [],
    newgoods: [],
    channels: []

  },
  /**
   * 获取data
   */
  getIndexData: function () {
    let that = this;
    util.request(api.TdApi).then(function (res) {
      console.log(res)
      that.setData({
        ads: res.Ads,
        brands: res.Brands,
        newgoods: res.NewGoods,
        channels: res.Channels
      });
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getIndexData();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})