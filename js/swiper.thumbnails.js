/**
 * Enable thumbnail support for Swiper
 * @param swiper (pass swiper element)
 * @param settings (pass custom options)
 */
var swiperThumbs = function (swiper, settings) {

  /**
   * Default settings
   */
  var options = {
    element: 'swiper-thumbnails',
    activeClass: 'is-active'
  }

  /**
   * Merge user settings and default settings
   */
  $.extend(options, settings);

  /**
   * Helper vars
   */
  var element = $('.' + options.element);
  var startIndex = swiper.activeIndex;

  /**
   * Get real activeIndex
   * @returns {*}
   */
  var realIndex = function (index) {
    if (index === undefined) index = swiper.activeIndex;
    return parseInt(swiper.slides.eq(index).attr('data-swiper-slide-index'));
  }

  var app = {

    init: function () {
      app.bindUIevents();
    },

    bindUIevents: function () {
      /**
       * Bind click events to thumbs
       */
      element.children().each(function () {
        $(this).on('click', function () {

          // Get clicked index
          var index = parseInt($(this).index());

          // Get difference between item clicked and current real active index.
          var difference = (index - realIndex());

          // Move to slide that makes sense for the user by 
          // checking what the current active slide is and adding the difference
          // this makes sure the swiper moves to a natural direction the user expects.
          app.moveToSlide(swiper.activeIndex + difference);
        })
      })

      /**
       * Update thumbs on slideChange
       */
      swiper.on('slideChangeStart', function (swiper) {
        app.updateActiveClasses(realIndex())
        console.log('activeIndex: '+swiper.activeIndex);
      });
    },

    moveToSlide: function (index) {
      swiper.slideTo(index);
    },

    updateActiveClasses: function (index) {
      element.children().removeClass(options.activeClass);
      element.children().eq(index).addClass(options.activeClass);
    }
  }

  app.init();

};