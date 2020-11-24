if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
// 환경변수가 production이면 /prod에서 key를 가져옴.
// 환경변수가 development라면 dev에서 가져옴