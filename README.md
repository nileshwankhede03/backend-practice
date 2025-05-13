# backend-practice
This repo contains practices of dynamic-routing ,  express set-up, acess for static-file to everyone, file linking like js . css. 

install npm : npm init -y
express install

 setting up parsers for FORM.

setting up ejs for ejs pages
    INSTALL : npm i ejs
    set up 'ejs' as a for `view engine`
     add : app.set("view ejs","ejs")
     instead of send use res.render ,  and give filename inside it


setting up public static files : 
        // console.log(__dirname+'/public');
        //  same thing krrte path.join & path la pn require karyach :  /Users/nileshbhausahebwankhede/Documents/myBackend-Practice/public
        //console.log(__dirname);
        // /Users/nileshbhausahebwankhede/Documents/myBackend-Practice
        app.use(express.static(path.join(__dirname,'public')))


 learn : dynamic routing
    how to get data comming from frontend , at backend route.
    => hum log kai baar routes dekhte hai unmein sirf ek hi hissa change hota hai

    ex : 

    /author/Nilesh
    /author/Saad
    /author/Priyanshu
    /author/Tejasvini

    /profile/Nilesh
    /profile/Tejasvini
    /profile/Priyanshu

    /like/abgfaejgvfjayegf
    /like/srhfkueagfkuasvs


    approach : sabse pehle browser jao , 
    url likhiye apana jo aapko chahiye and ENTER dabaaiye
    ab us url route ko create kariye
    res bhejiye kuchhh bhi

    abb usi url ko agar dynamic banana hai to realise kro konsa part
    dynamic hai aur uss part ke aage route mein : laga do
    means jya values change honar like aata Tejasvini aahe nantr Nilesh hoil.
    Ex : app.get ("/profile/:Tejasvini",routeHandler)
    Tejasvini ye abb variable bann chuka hai abb kuch bhi likh sakte ho.

    : colon means ye part dynamic hai baba 

    /profile/:Tejasvini jrr Tejasvini aaplyala route madhe hawi trr
    req.params means jise aage colon hai ( : )
    and tyacha puch access karayla  req.params.Tejasvini

    jrr frontend la routes change kele trr value change honar means te dynamic aahe

