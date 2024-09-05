class DataGenerator {
  // Returns random string with specific length, e.g. if length = 6, then output will be "abcdef"
  static getRandomString(length) {
    var str = ''
    var i
    var characters = 'abcdefghijklmnopqrstuvwxyz'
    for (i = 0; i < length; i++) {
      str += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return str
  }
}

exports.DataGenerator = DataGenerator
