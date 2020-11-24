const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10 // salt가 몇글자인지
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // space를 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { // 관리자, 일반유저
        type: Number, // Num 1 관리자 0 유저 이런 식으로
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { // token 사용기간
        type: Number
    }

})

userSchema.pre('save', function(next) {
    //비밀번호 암호화
    var user = this

    if(user.isModified('password')) {
        // 비밀번호를 바꿀 때에만 hash
        bcrypt.genSalt(saltRounds, function (err, salt) {
            // Store hash in your password DB, genSalt : salt 만들기
            if(err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash
                next()
            })
        }) // salt 이용해서 비밀번호 암호화
    } else {
        next()
        // next 해줘야 pre 들어온 이후에 비밀번호 안바꿀 시 user.save로 나갈 수 있음.
    }
}) // 저장하기 전에 function 실행

userSchema.methods.comparePassword = function(plainPassword, cb) {
    // plainPassword = 123456 암호화 된 비밀번호 = $2b$10$jOfNL5DjMM.WJlw3.b7J7eQsNTF.3RzZaCINsz62O4AL1D3/hbr0G
    // 복호화는 안되므로 plainPassword를 암호화 한 후 대조
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err)
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this;
    // jsonwebtoken
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    // token = user._id + 'secretToken' 
    // ->
    // 'secretToken' -> user._id

    user.token = token

    user.save(function(err, user) {
        if(err) return cb(err) // Error
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    //token을 decode한다.
    jwt.verify(token, 'secretToken', function(err, decoded) {
        // decoded == user._id
        // user._id를 이용해서 user를 찾은 다음에
        // client에서 가져온 token과 db에 보관된 token이 일치하는지 확인

        user.findOne({ "_id": decoded, "token": token}, function(err, user) {
            if(err) return cb(err);
            cb(null, user)
        })
    })
}

const User = mongoose.model('User', userSchema) // schema를 model로 감쌈
module.exports = { User } // 외부에서 쓸 수 있게
