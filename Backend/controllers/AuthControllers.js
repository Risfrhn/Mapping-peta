require('../utils/db');
const User = require('../models/User');  
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      nama: req.body.nama,
      username: req.body.username,
      password: hashedPassword,
      role: req.body.role
    });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) =>{
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username: username});
        if(!user){
            console.log("data ga ada");
            return res.status(400).send("Username tidak terdaftar");
        } 
        
        const passwordMatch = await bcrypt.compare(password.trim(), user.password);
        
        if(!passwordMatch){
            console.log("password salah");
            return res.status(400).send("password salah"); 
        }

        req.session.user = {
            id: user._id,
            username: user.username,
            nama: user.nama,
            role: user.role
        };

        res.redirect("/Dashboard");
        
    } catch (err){
        res.status(500).json({ error: err.message });
    }
}

exports.logout = async(req, res) => {
    req.session.destroy(err => {
    if (err) {
      return res.redirect('/Dashboard'); // Jika gagal logout, tetap di dashboard
    }
    res.clearCookie('connect.sid'); // Hapus cookie sesi dari browser
    res.redirect('/login'); // Redirect ke halaman login setelah berhasil logout
  });
};


