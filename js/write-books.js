var len = Object.keys(data).length;
var text_pre = ['<div class="col-sm-6 col-md-4" data-subject="', '"><div class="thumbnail" style="height: 550px;overflow: auto;">'];
var text_post = '</div></div></div>';
var text_cap = '<div class="caption">';
var text = '';
for(let i=0; i < len; i++){
  text +=text_pre[0] + data[i].sub + text_pre[1] + data[i].img_link + text_cap + data[i].cap_link 
      + data[i].cap_p2 + data[i].cap_p1 + text_post;
}

document.getElementById('book_shelf').innerHTML = text;
