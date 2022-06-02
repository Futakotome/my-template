function mockReports() {
  let arr = [];
  for (let i = 0; i < 11; i++) {
    arr.push({
      cno: i + 1,
      city: '广州',
      cname: '客户xxx',
      reportName: '报告XXX',
      reportType: '报告类型A',
      reportTime: new Date(),
      lastTime: new Date()
    })
  }
  return arr;
}


function mockRecords() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push({
      name: '记录1',
      sender: 'zzz',
      sendTime: new Date(),
      receiver: 'zzz'
    })
  }
  return arr;
}

const proxy = {
  'POST /report/list': (req, res) => {
    console.log(req.body)
    res.send({
      data: {
        list: mockReports(),
        total: 12
      }
    })
  },
  'POST /record/list': (req, res) => {
    console.log(req.body)
    res.send({
      data: {
        list: mockRecords()
      }
    })
  }
}

module.exports = proxy
