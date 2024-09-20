$.getJSON(url, function(data) {
'use strict';
    var items = [];
    $.each(data, function(key, val) {
        items.push('<li id="' + key + '"><span>' + val + '</span></li>');
    });

    $('<ol/>', {
        class: 'my-new-list',
        html: items.join('')
    }).appendTo('body');
});
