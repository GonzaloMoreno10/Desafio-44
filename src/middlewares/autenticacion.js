export const auth = function(req,res,next){
    if(req.cookies.user){
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