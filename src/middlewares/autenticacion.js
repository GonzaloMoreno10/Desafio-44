export const auth = function(req,res,next){
    if(req.cookies.user){
        return next();
    }
    else{
        return res.render('users/error')
    }
}

export const authSession = function(req,res,next){
    if(req.session.user){
        let date = new Date();
        date.setTime(date.getTime() + 60 * 10000);
        req.session.contador ++;
        req.session.cookie.expires = date = date;
        return next();
    }
    else{
        return res.render('users/error')
    }
}

/*export const auth = function(req,res,next){
    if(req.session && req.session.user){
        console.log('User: ' + req.session.user)
        return next();
    }
    else{
        return res.redirect('/api/users/login');
    }
}*/