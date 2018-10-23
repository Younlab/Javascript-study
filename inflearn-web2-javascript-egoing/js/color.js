
var Body = {
    SetTextColor:function (color){
        document.querySelector('body').style.color = color;
    },
    SetBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Link = {
    SetColor:function (color){
        var a_list = document.querySelectorAll('ul > li > a');
        var i = 0
        
        while(i < a_list.length){
            a_list[i].style.color = color;
            ++i
        }
    },
}

function nightDayHandler(self){
    if(self.value === 'toggle night'){
        Body.SetBackgroundColor('black');
        Body.SetTextColor('white');
        self.value = 'toggle day';
        Link.SetColor('powderblue')
    } else {
        Body.SetBackgroundColor('white');
        Body.SetTextColor('black');
        self.value = 'toggle night';
        Link.SetColor('blue');
    }
}
