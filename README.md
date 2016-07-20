# Swiper-Thumbnails
Small [Swiper](http://idangero.us/swiper/#.V49zbZOrhBc) plugin that enables pre-rendered thumbnail support.

## Usage:
```javascript
$(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        // Example options
        direction: 'vertical',
        loop: true,
    })
  
    swiperThumbs(cases, {
        // Our default options
        element: 'swiper-thumbnails',
        activeClass: 'is-active'
    });
});
```

*Add anywhere to your html:*
```html
<div class="swiper-thumbnails">
    <button type="button">any html content</button>
    <button type="button">any html content</button>
    <button type="button">any html content</button>
</div>
```

If you want sliding thumbnails (useful if you have lots of thumbnails) I suggest using the official sliding thumbnails which can be found [here](http://idangero.us/swiper/demos/23-thumbs-gallery.html).

## Caveats
* Currently only supported for the jQuery version of Swiper
* Only tested with horizontal slider