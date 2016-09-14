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
      'pic_url':'https://goo.gl/Ks5c6y'

    },
    {
      'name':'Thriller',
      'category':'albums',
      'price':24,
      'pic_url':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ihcYhpeLS0DP2xBq7K-eBeiTGcwHOPq-jDDYmLcHdPRSH-DIRg'

    }]

};
localStorage.setItem('all-products', JSON.stringify(products))

var mainFunctions = {
  'mainContent':function(){
    var content='';
    var s =0;
    var stored = JSON.parse(localStorage.getItem('all-products'));
    for(var key in stored){
      $('.dropdown-menu').append('<li><a href="#">'+key+'</a></li>');
      for (var i = 0; i < stored[key].length; i++) {
        if (s === 0 || s%3 === 0) {
          content += '<div class="row">'
        }
        content += this.add_to_page(stored[key][i]);
        if ((s+1)%3 === 0) {
          content += '</div>'
        }
        s++
      }
    }
    $('.content').html(content);
  },
  'headerFooter':function(){
    var x = '<nav class="navbar navbar-default navbar-static-top">'+
          '<div class="container-fluid addUser">'+
            '<div class="navbar-header">'+
              '<a class="navbar-brand" href="#">'+
                '<img src="" alt="Brand Img" />'+
              '</a>'+
              '<a class="navbar-brand" href="#">Brand name</a>'+
            '</div>'+

          '</div>'+
          '<div class="container-fluid">'+
            '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" >'+

              '<form class="navbar-form navbar-left">'+
                '<div class="form-group">'+
                  '<label for="search"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></label>'+

                  '<input id="search" type="text" class="form-control" placeholder="Search">'+
                '</div>'+
                '<button type="submit" id="go" class="btn btn-default">Go</button>'+
              '</form>'+

              '<ul class="nav navbar-nav">'+
                '<li class="dropdown">'+
                  '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Category <span class="caret"></span></a>'+
                  '<ul class="dropdown-menu">'+
                  '</ul>'+
                '</li>'+
              '</ul>'+

              '<button type="button" class="btn btn-default btn-md navbar-right">'+
                '<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>'+
                '<span class="badge" id="count"></span>'+
              '</button>'+

          '  </div>'+

          '</div>'+


        '</nav>'+



        '<div class="container-fluid content"></div>'+



        '<div class="footer">'+


          '<p id="copyrights">'+
              'Copyright&copy; 2016 Team Four. All rights reserved.'+
          '</p>'+


        '</div>';
    $('body').html(x);
  },
  'addToCart':function(){
    var m = document.querySelector('#count').textContent;

    $('.add').click(function(){
        if($(this).text()=== "Add to cart"){

          $('#count').text(++m);

          $(this).text("Remove from cart").removeClass('btn-primary');
        }
        else {
          $('#count').text(--m);

          $(this).text("Add to cart").addClass('btn-primary');
          if ($('#count').text() === "0") {
            $('#count').text("");

          }

        }
    });
  },
  'add_to_page':function(item){
    var  x = '<div  class="col-xs-12 col-sm-6    col-md-4">'+
          '<div  class="thumbnail product">'+
            '<img src='+item.pic_url+' alt="...">'+
            '<div class="caption">'+
              '<div class="name">'+
                '<h3>'+item.name+'</h3>'+
              '</div>'+
              '<div class="price">'+
                '<p>'+item.price+' EGP</p>'+
              '</div>'+

              '<p><button class="btn btn-primary add" type="button" data-toggle="button" aria-pressed="false" autocomplete="off">Add to cart</button><a href="#" class="btn btn-default" role="button">Details</a></p>'+
            '</div></div></div>';
    return x;
  },
  'signedAs':function(){
    var user = JSON.parse(localStorage.getItem('UserName'));
    $('.addUser').append('<p class="navbar-text navbar-right signedAs">Signed in as '+user+' </p>');
  },
  'addRemove':function(){
    var removeBtn = '<button type="button" class="btn btn-default btn-sm removeBtn"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>'


    var addModal = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
      '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">New item</h4>'+
          '</div>'+
          '<div class="modal-body">'+
            '<div class="productImage">'+
              "<label for='proImage' >Product's Image</label>"+
              "<input type='text' placeholder='Image's URL' id='proImage' >"+
            '</div>'+
            '<div class="productName">'+
              "<label for='proName'>Product's Name</label>"+
              '<input type="text" id="proName" >'+

            '</div>'+
            '<div class="productPrice">'+
              "<label for='proPrice'>Product's Price</label>"+
              '<input type="text" id="proPrice" >'+
            '</div>'+
            '<div class="productCategory">'+
              "<label for='proCategory'>Product's Category</label>"+
              '<input type="text" id="proCategory" >'+
            '</div>'+


          '</div><div class="modal-footer">  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary addItem">Add Item</button>  </div>  </div>  </div>  </div>'+
          '<button type="button" class="btn btn-default btn-lg btn-primary addBtn" data-toggle="modal" data-target="#myModal">  <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>    </button>';
    $('.thumbnail').append(removeBtn);
    $('body').append(addModal);
  }
}



$('.signIn').click(function(event){
  event.preventDefault();
  var username = document.getElementById('exampleInputEmail1').value;
  var password = document.getElementById('exampleInputPassword1').value;
  localStorage.setItem('UserName',JSON.stringify(username));
  if (username === 'usamasaied' && password === '7070') {
    mainFunctions.headerFooter();
    mainFunctions.mainContent();
    mainFunctions.addToCart();
    mainFunctions.signedAs();
    mainFunctions.addRemove();

  } else {
    mainFunctions.headerFooter();
    mainFunctions.mainContent();
    mainFunctions.addToCart();
    mainFunctions.signedAs();
    $('#go').click(function(){
      var term =document.getElementById('search').value;

      var res=[] ;
      for(var key in products){
        var fltr = _.filter(products[key],function(index){
         return index.name === term;
          })
         res.push(fltr)
      }
      var searchResults ='';
      for (var i = 0; i < res.length; i++) {
        for (var j = 0; j < res[i].length; j++) {
        searchResults += mainFunctions.add_to_page(res[i][j]);
        }
      }
      $('.content').html(searchResults)
      mainFunctions.addToCart();
    });
    $('.dropdown-menu li').click(function(){
      var m =0;
      var filter ='';
      for (var i = 0; i < products[$(this).text()].length; i++) {
        if (m === 0 || m%3 === 0) {
          filter += '<div class="row">'
        }
        filter += mainFunctions.add_to_page(products[$(this).text()][i]);
        if ((m+1)%3 === 0) {
          filter += '</div>'
        }
        m++
      }
      $('.content').html(filter);
      mainFunctions.addToCart();
    });
  }

  $('.addItem').click(function(){

    var image = document.getElementById('proImage').value;
    var name = document.getElementById('proName').value;
    var price = document.getElementById('proPrice').value;
    var category = document.getElementById('proCategory').value;
    // products[category] = products[category] || [];
    // products[category].push({'category': category,'name': name, 'pic_url':image,'price':parseInt(price)});
    var items = JSON.parse(localStorage.getItem('all-products')) || {};
    items[category] = items[category] || [];
    items[category].push({'category': category,'name': name, 'pic_url':image,'price':parseInt(price)});
    localStorage.setItem('all-products', JSON.stringify(items));

    console.log(JSON.parse(localStorage.getItem('all-products')));

  })


})
