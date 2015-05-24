

$(document).ready( function () {
  var artwork, title, price, seller, everything;

  elvis.results.forEach(function (items){
     title = '<p class="etitle">' + items.title + '</p>';
     artwork = '<img src= "'+ items.Images[0].url_170x135 +'" />';
     price = '<p class="eprice">' + "$" + items.price + "USF" + '</p>';
     seller = '<p class="eseller">' + items.Shop.shop_name + '</p>';
     everything = '<div class="everything">' + artwork + title + seller + price + '</div>';

         $('.maine').append(everything);

  })




});



