var products = {
  'Books':[
    {
      'name':'Beautiful Ruins',
      'category':'books',
      'price':24.99,
      'pic_url':' https://goo.gl/jTHWdy'
    },
    {
      'name':'catch-22',
      'category':'books',
      'price':20,
      'pic_url':'https://goo.gl/9l5kff'


    },
    {
      'name':'lolita',
      'category':'books',
      'price':22,
      'pic_url':'https://goo.gl/ZdJT12'

    }],
  'Albums':[
    {
      'name':'The Black Album',
      'category':'albums',
      'price':19.99,
      'pic_url':'https://i.ytimg.com/vi/DqDeH3hwxfw/maxresdefault.jpg'
    },
    {
      'name':'25',
      'category':'albums',
      'price':29.99,
      'pic_url':'https://s-media-cache-ak0.pinimg.com/564x/a9/95/9c/a9959c17c8260650136fdc4a7d8bb218.jpg'

    },
    {
      'name':'Thriller',
      'category':'albums',
      'price':24,
      'pic_url':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ihcYhpeLS0DP2xBq7K-eBeiTGcwHOPq-jDDYmLcHdPRSH-DIRg'

    }]

};

var add_to_page = function(item){
  var  x = '<div  class="col-xs-12 col-sm-6    col-md-4">'+
        '<div  class="thumbnail product">'+
          '<img src='+item.pic_url+' alt="...">'+
          '<div class="caption">'+
            '<div class="name">'+
              '<h3>'+item.name+'</h3>'+
            '</div>'+
            '<div class="price">'+
              '<p>'+item.price+'</p>'+
            '</div>'+

            '<p><button class="btn btn-primary add" type="button" data-toggle="button" aria-pressed="false" autocomplete="off">Add to cart</button><a href="#" class="btn btn-default" role="button">Details</a></p>'+
          '</div></div></div>';
  return x;
}
var content='';
var s =0;
for(var key in products){
  for (var i = 0; i < products[key].length; i++) {
    if (s === 0 || s%3 === 0) {
      content += '<div class="row">'
    }
    content += add_to_page(products[key][i]);
    if ((s+1)%3 === 0) {
      content += '</div>'
    }
    s++
  }
}
$('.content').html(content);
$('.dropdown-menu li').click(function(){
  var m =0;
  var filter ='';
  for (var i = 0; i < products[$(this).text()].length; i++) {
    if (m === 0 || m%3 === 0) {
      filter += '<div class="row">'
    }
    filter += add_to_page(products[$(this).text()][i]);
    if ((m+1)%3 === 0) {
      filter += '</div>'
    }
    m++
  }
  $('.content').html(filter);
  addToCart();
})
$('#go').click(function(){
  var term =document.getElementById('search').value;
  var res=[] ;
  for(var key in products){
    var fltr = _.filter(products[key],function(index){
     console.log(index.name);
     return index.name === term;
      })
     res.push(fltr)
  }
  var searchResults ='';
  for (var i = 0; i < res.length; i++) {
    for (var j = 0; j < res[i].length; j++) {
    searchResults += add_to_page(res[i][j]);
    }
  }
  $('.content').html(searchResults)
  addToCart();
})

var addToCart = function(){
  var m = document.querySelector('#count').textContent;

  $('.add').click(function(){
      if($(this).text()=== "Add to cart"){

        $('#count').text(++m);

        $(this).text("Remove from cart");
      }
      else {
        $('#count').text(--m);

        $(this).text("Add to cart");
        if ($('#count').text() === "0") {
          $('#count').text("");

        }

      }
  });
};
addToCart();
