// pages/index9/index9.js
const DB = wx.cloud.database().collection("Record")
let record=""
Page({
  //添加数据
  addRecord(event){
    record = event.detail.value
  },
  addData(){
    DB.add({
      data:{
        record: record
      },
      success(res) {
        console.log("添加成功",res)
      },
      fail(res){
        console.log("添加失败",res)
      },
    })
  },
  //查询数据
  data: {
    recordList:[]
  },
  getRecord(){
    let that = this
    DB.get({
         success(res){
           console.log("查询成功",res)
          that.setData({
            recordList: res.data
          })
         },
        fail(res){
          console.log("查询失败",res)
        },
    })
  }
})