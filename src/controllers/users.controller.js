
class UsersController {
  login(req, res) {
    let { name } = req.body;
    let date = new Date();
    date.setTime(date.getTime() + (60 * 1000));
    if (name) {
      res
        .cookie('user',name,{ expires: date, httpOnly: true })
        .redirect('/api/productos/vista')

    } else {
      res.send({ error: 'set-cookie: falta nombre ' });
    }
  }

  singin(req, res) {

  }

  logout(req, res) {
    res.clearCookie('user').redirect('/api/users/login')
  }
}

export const userController = new UsersController();
