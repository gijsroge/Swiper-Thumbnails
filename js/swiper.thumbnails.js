(function ($, window) {

  /**
   * Enable thumbnail support for Swiper
   * @param swiper (pass swiper element)
   * @param settings (pass custom options)
   */
  window.swiperThumbs = function (swiper, settings) {

    /**
     * Loop over swiper instances
     */
    $(swiper).each(function () {

      var _this = this;

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

      /**
       * Get real activeIndex
       * @returns {*}
       */
      var realIndex = function (index) {
        // if index doesn't exist set index to activeIndex of swiper
        if (index === undefined) index = _this.activeIndex;

        // Check if swiper instance has loop before getting real index
        if (_this.params.loop) {
          return parseInt(_this.slides.eq(index).attr('data-swiper-slide-index'));
        } else {
          return index;
        }
      }

      var app = {

        init: function () {
          app.bindUIevents();
          app.updateActiveClasses(realIndex(_this.activeIndex));
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
              app.moveToSlide(_this.activeIndex + difference);
            })
          })

          /**
           * Update thumbs on slideChange
           */
          _this.on('slideChangeStart', function (swiper) {
            app.updateActiveClasses(realIndex())
          });
        },

        moveToSlide: function (index) {
          _this.slideTo(index);
        },

        updateActiveClasses: function (index) {
          element.children().removeClass(options.activeClass);
          element.children().eq(index).addClass(options.activeClass);
        }
      }

      app.init();

    });

  };

}(jQuery, window));