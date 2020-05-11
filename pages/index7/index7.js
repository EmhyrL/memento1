// pages/index7/index7.js
Page({
  data: {
    imgUrl: ""
  },
//上传图片
uploadpic(){
  let that=this;
  wx.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success (res) {
      console.log("选择成功",res)
      that.uploadImg(res.tempFilePaths[0]);
    }
  })
},
  uploadImg(fileUrl){
    wx.cloud.uploadFile({
      cloudPath: new Date().getTime()+'.jpg',
      filePath: fileUrl,
      success: res => {
        console.log("上传成功",res)
        this.setData({
          imgUrl:res.fileID
        })
      },
      fail: console.error
    })
  },
 
  
})