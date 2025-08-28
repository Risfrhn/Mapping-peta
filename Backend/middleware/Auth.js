const isLoggedIn = (req, res, next) => {
  if (req.session.user) {
    // Jika ada sesi user (artinya sudah login), lanjutkan ke request berikutnya
    next(); 
  } else {
    // Jika tidak ada, redirect ke halaman login
    res.redirect('/login');
  }
};

module.exports = { isLoggedIn };