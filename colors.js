function LinksSetColor(color){
       var alist = document.querySelectorAll('a');
       var i = 0;
       while(i < alist.length){
       console.log(alist[i]);
       alist[i].style.color = color;
       i = i + 1;
    }
}
function BodySetColor(color){
    document.querySelector('body').style.color = color;
}
function BodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
}
function dayNightHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
      BodySetBackgroundColor('gray')
      BodySetColor('white')
      self.value = 'day'
      LinksSetColor('white')
      } else {
        BodySetBackgroundColor('white')
        BodySetColor('black')
        self.value = 'night'
        LinksSetColor('black')
      }
  }
