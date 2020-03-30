Page({
  data: {
    name: 'Coderwhy',
    age: '19',
    students: [{
        id: 110,
        name: '刘子越',
        age: 19
      },
      {
        id: 120,
        name: 'Kobe',
        age: 38
      },
      {
        id: 130,
        name: 'jams',
        age: 34
      }
    ],
    counter: 0,
  },
  handleBtnClick() {
    //1.错误做法：界面不会刷新
    // this.data.counter += 1
    // console.log(this.data.counter)
    //2.this.setData()
    this.setData({
      
      counter:this.data.counter+1
    })
  },
  handleSubtraction(){
      this.setData({
        counter:this.data.counter-1
      })
  }
})