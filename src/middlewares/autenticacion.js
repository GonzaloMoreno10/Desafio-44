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
        req.session.contador ++;
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