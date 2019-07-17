const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const formatTimeShow = timestamp => {
  const oneMinute = 1000 * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const yestday = oneDay * 2;
  const oneMonth = oneDay * 30;

  const config = [
    {
      timestampMin: 0,
      timestampMax: oneMinute,
      text(timestamp) {
        return '刚刚'
      }
    },
    {
      timestampMin: oneMinute,
      timestampMax: oneHour,
      text(timestamp) {
        const minute = Math.floor(timestamp / oneHour);
        return `${minute}分钟前`
      }
    },
    {
      timestampMin: oneHour,
      timestampMax: oneDay,
      text(timestamp) {
        const hour = Math.floor(timestamp / oneHour)
        return `${hour}小时前`
      }
    },
    {
      timestampMin: oneDay,
      timestampMax: yestday,
      text(timestamp) {
        const day = Math.floor(timestamp / oneDay);
        return '昨天'
      }
    },
    {
      timestampMin: yestday,
      timestampMax: oneMonth,
      text(timestamp) {
        const day = Math.floor(timestamp / oneDay);
        return `${day}天前`
      }
    }
  ]

  for (let item of config) {
    const min = item.timestampMin;
    const max = item.timestampMax;

    if (timestamp >= min && timestamp < max) {
      return item.text(timestamp);
    }
  }
}

module.exports = {
  formatTime: formatTime,
  formatTimeShow: formatTimeShow
}
