

$(document).ready( function () {
  var artwork, title, price, seller, eicon, eiconb, everything;

  elvis.results.forEach(function (items){
     title = '<p class="etitle">' + items.title + '</p>';
     artwork = '<img class="epic" src= "'+ items.Images[0].url_170x135 +'" />';
     price = '<p class="eprice">' + "$" + items.price + " USD" + '</p>';
     seller = '<p class="eseller">' + items.Shop.shop_name + '</p>';
     eicon = '<span class="epic1"><img src="images/hamburger.png"></span>';
     eiconb = '<span class="epic2"><img src="images/heart.png"></span>';

     everything = '<div class="everything">' + artwork + title + seller + price + eicon + eiconb + '</div>';

         $('.maine').append(everything);

  })




});



