var len = Object.keys(data).length;
var text_pre = '<div class="col-sm-6 col-md-4"><div class="thumbnail">';
var text_post = '</div></div></div>';
var text_cap = '<div class="caption">';
var text = '';
for(let i=0; i < len; i++){
  text +=text_pre + data[i].img_link + text_cap + data[i].cap_link 
      + data[i].cap_p1 + data[i].cap_p2 + text_post;
}

document.getElementById('book_shelf').innerHTML = text;
