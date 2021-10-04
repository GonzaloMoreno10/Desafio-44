export const auth = function(req,res,next){
    if(req.user){
        let date = new Date();
        date.setTime(date.getTime() + 60 * 10000);
        req.session.cookie.expires = date;
        console.log(req.session)
            return next();
        }
    else{
        let message = 'No se encuentra logeado'
        return res.render('errors/login',{message})
    }
}
