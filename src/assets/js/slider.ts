export class Slider {
  slider = new function () {
    const self = this;
    let id: string;
    let wrap;
    let container: any;
    let interval: number;
    let slideSize: number;
    let intervalID: any;
    let xSpage: number;
    let page: number;
    let slideStart = 0;
    let slidePrev: number;
    let pageList;
    const slideClass = ' .xS-page';
    let status = true;
    // иннициализация и настройка отображения---------------------------------------------------------------------------
    self.initSlider = function (itemParams) {
      this.settings = $.extend({
        id: 'slide',
        type: 'rotate',
        page: false,
        slideButton: false,
        autoPlay: true,
        slideSize: 1,
        desktop: [1170, 1],
        notebook: [970, 1],
        tablet: [750, 1],
        mobile: [550, 1],
        interval: 3000,
        slideSpeed: 1000
      }, itemParams);
      switch (this.settings.type) {
        case 'rotate':
          self.rotateAnimate();
          break;
        case 'block':
          self.blockAnimate();
          break;
        case 'customAnimate':
          self.showHideAnimate();
          break;
        default:
          self.rotateAnimate();
      }
      id = this.settings.id;
      wrap = $(id);
      container = $(id + ' .xS-pageContainer');
      interval = this.settings.interval;
      slideSize = container.find(slideClass).length;
      if (this.settings.page) {
        self.pageStep(this.settings);
      }

      if (this.settings.slideButton) {
        self.slideButtonAdd();
      }
      if (this.settings.autoPlay) {
        self.autoPlayEvent(this.settings);
      }
      self.slideWidth(this.settings.slideSize);
      self.pageAdd();
    };
    // добавление кнопок------------------------------------------------------------------------------------------------
    self.slideButtonAdd = () => {
      $(id + ' .xS-button')
        .prepend('<button class="xS-buttonNext"></button><button class="xS-buttonPrev"></button>');
    };
    // добавление пагинаций---------------------------------------------------------------------------------------------
    self.pageAdd = () => {
      for (let i = 0; i < slideSize; i++) {
        $(id + slideClass)
          .eq(i)
          .attr('data-num', i);
      }
    };
    // изменение ширины слайдов согластно размерам экрана---------------------------------------------------------------
    self.slideResize = function () {
      this.width = $(window).width();
      if (this.width >= this.settings.desktop[0]) {
        this.slideWidth(this.settings.desktop[1]);
      } else {
        if (this.settings.desktop[0] >= this.width && this.width >= this.settings.notebook[0]) {
          this.slideWidth(this.settings.notebook[1]);
        } else {
          if (this.settings.notebook[0] >= this.width && this.width >= this.settings.tablet[0]) {
            this.slideWidth(this.settings.notebook[1]);
          } else {
            if (this.settings.tablet[0] >= this.width && this.width >= this.settings.mobile[0]) {
              this.slideWidth(this.settings.tablet[1]);
            } else {
              if (this.settings.mobile[0] >= this.width) {
                this.slideWidth(this.settings.mobile[1]);
              }
            }
          }
        }
      }
    };
    // изменение ширины слайдов-----------------------------------------------------------------------------------------
    self.slideWidth = (s) => {
      xSpage = wrap.width() / s;
      $(id + slideClass).css('width', xSpage);
    };
    // авто прокрутка---------------------------------------------------------------------------------------------------
    self.autoPlayEvent = (settings) => {
      intervalID = setInterval(() => {
        self.slideNext(settings);
      }, settings.interval);
      wrap.hover(
        function () {
          clearInterval(intervalID);
        },
        function () {
          intervalID = setInterval(() => {
            self.slideNext(settings);
          }, settings.interval);
        }
      );
    };
    // режим отображения прокрутка--------------------------------------------------------------------------------------
    self.rotateAnimate = function () {
      $(this.settings.id + ' .xS-slider').addClass('typeRotate');

    };
    // блочный режим отображения----------------------------------------------------------------------------------------
    self.blockAnimate = function () {
      $(this.settings.id + ' .xS-slider').addClass('typeBlock');
    };
    // появление/исчезновение режим отображения-------------------------------------------------------------------------
    self.showHideAnimate = function () {
      $(this.settings.id + ' .xS-slider').addClass('typeShowHide');
    };
    // шаг в перёд------------------------------------------------------------------------------------------------------
    self.slideNext = function () {
      if (status !== true) {
        return false;
      }
      switch (this.settings.type) {
        case 'rotate' :
          rotate(this.settings);
          break;
        case 'block':
          block(this.settings);
          break;
        case 'customAnimate':
          customAnimate(this.settings);
          break;
        default:
          rotate(this.settings);
      }

      function rotate(settings) {
        $(slideClass).removeClass('active');
        setTimeout(() => {
          container.stop().animate({
            left: -xSpage
          }, settings.slideSpeed, () => {
            container
              .css('left', '0')
              .find(slideClass + ':first')
              .addClass('active')
              .appendTo(container);
            page = $(id + slideClass + ':first').data('num') * 1;
            if (settings.page) {
              pageList
                .addClass('xS-button-active')
                .not('.xS-p li' + '[data-num="' + page + '"]')
                .removeClass('xS-button-active');
            }

          });
        }, 0);
      }

      function block(settings) {

        slideStart++;
        slidePrev = slideStart;
        slidePrev--;
        if (slideStart >= slideSize) {
          slideStart = 0;
        }
        if (settings.page) {
          pageList
            .addClass('xS-button-active')
            .not('.xS-p li' + '[data-num="' + slideStart + '"]')
            .removeClass('xS-button-active');
        }
        container
          .find(slideClass)
          .removeClass('active')
          .removeClass('prevActive')
          .css('right', '100%')
          .css('left', 'auto');
        container
          .find(slideClass + '[data-num="' + slidePrev + '"]')
          .addClass('prevActive')
          .css('right', '0');
        container
          .find(slideClass + '[data-num="' + slideStart + '"]')
          .addClass('active')
          .css('right', '100%')
          .animate({right: 0}, settings.slideSpeed);
      }

      function customAnimate(settings) {
        slideStart++;
        slidePrev = slideStart;
        slidePrev--;
        if (slideStart >= slideSize) {
          slideStart = 0;
        }
        container
          .find(slideClass)
          .removeClass('active')
          .removeClass('prevActive');
        container
          .find(slideClass + '[data-num="' + slidePrev + '"]')
          .addClass('prevActive');
        container
          .find(slideClass + '[data-num="' + slideStart + '"]')
          .addClass('active');
        if (settings.page) {
          pageList
            .addClass('xS-button-active')
            .not('.xS-p li' + '[data-num="' + slideStart + '"]')
            .removeClass('xS-button-active');
        }

      }

      self.disableButton(this.settings);
    };
    // шаг назад--------------------------------------------------------------------------------------------------------
    self.slidePrev = function () {
      if (status !== true) {
        return false;
      }
      switch (this.settings.type) {
        case 'rotate' :
          rotate(this.settings);
          break;
        case 'block':
          block(this.settings);
          break;
        case 'customAnimate':
          customAnimate(this.settings);
          break;
        default:
          rotate(this.settings);
      }

      function rotate(settings) {
        container.find(slideClass)
          .removeClass('active');
        container.css('left', -xSpage + 'px')
          .find(slideClass + ':last')
          .addClass('active')
          .prependTo(container);
        container.stop()
          .animate({
            left: 0
          }, settings.slideSpeed, function () {
            this.data = $(id + slideClass + ':first')
              .data('num');
            if (settings.page) {
              pageList
                .addClass('xS-button-active')
                .not('.xS-p li' + '[data-num="' + this.data + '"]')
                .removeClass('xS-button-active');
            }
            slideStart = 0;
          });
      }

      function block(settings) {
        slideStart--;
        let slidePrevB = slideStart;
        slidePrevB++;
        if (slideStart < 0) {
          slideStart = slideSize - 1;
        }
        if (settings.page) {
          pageList
            .addClass('xS-button-active')
            .not('.xS-p li' + '[data-num="' + slideStart + '"]')
            .removeClass('xS-button-active');
        }

        container
          .find(slideClass)
          .removeClass('active')
          .removeClass('prevActive')
          .css('left', '100%')
          .css('right', 'auto');
        container
          .find(slideClass + '[data-num="' + slidePrevB + '"]')
          .addClass('prevActive').css('left', '0');
        container
          .find(slideClass + '[data-num="' + slideStart + '"]')
          .addClass('active').css('left', '100%')
          .animate({left: 0}, settings.slideSpeed);
      }

      function customAnimate(settings) {
        slideStart--;
        let slidePrevC = slideStart;
        slidePrevC++;
        if (slideStart < 0) {
          slideStart = slideSize - 1;
        }
        container.find(slideClass)
          .removeClass('active')
          .removeClass('prevActive');
        container.find(slideClass + '[data-num="' + slidePrevC + '"]')
          .addClass('prevActive');
        container.find(slideClass + '[data-num="' + slideStart + '"]')
          .addClass('active');
        if (settings.page) {
          pageList.addClass('xS-button-active')
            .not('.xS-p li' + '[data-num="' + slideStart + '"]')
            .removeClass('xS-button-active');
        }
      }

      self.disableButton(this.settings);
    }
    ;
    // переключение табами----------------------------------------------------------------------------------------------
    self.pageStep = (settings) => {

      $(id + ' .xS-button')
        .prepend('<ul class="xS-p"></ul>');
      for (let i = 0; i < slideSize; i++) {
        $(id + ' .xS-button ul')
          .append('<li' + ' data-num=' + i + '><button></button></li>');
      }
      pageList = $(id + ' .xS-p li');

      $(id + ' .xS-p li ')
        .on('click', function () {
          const data = $(this).data('num') * 1;
          if (status !== true) {
            return false;
          }
          if ($(this).hasClass('xS-button-active')) {
            return false;
          }

          pageList.addClass('xS-button-active')
            .not(this)
            .removeClass('xS-button-active');

          slideStart = data;
          const prevData = wrap
            .find(slideClass + '[data-num="' + data + '"]')
            .prevAll(slideClass).length;
          const pageLeft = prevData * xSpage;
          switch (settings.type) {
            case 'rotate' :
              rotatePage();
              break;
            case 'block':
              blockPage();
              break;
            case 'customAnimate':
              customAnimate();
              break;
            default:
              rotatePage();
          }

          function blockPage() {
            container.find(slideClass).removeClass('prevActive');
            $('.active')
              .addClass('prevActive')
              .removeClass('active');
            setTimeout(() => {
              container.find(slideClass + '[data-num="' + data + '"]')
                .addClass('active')
                .css('left', '100%')
                .animate({left: 0}, settings
                  .slideSpeed, () => {
                  container.find(slideClass)
                    .css('left', '100%').css('right', 'auto');
                  container
                    .find(slideClass + '[data-num="' + data + '"]')
                    .css('left', '0')
                    .css('right', 'auto');
                  status = true;
                });
            }, 0);
          }

          function rotatePage() {
            container.css('left', '0').stop().animate({
              left: -pageLeft
            }, settings.slideSpeed, () => {
              container.css('left', '0');
              wrap
                .find(slideClass)
                .not($(slideClass + '[data-num="' + data + '"]')
                  .nextAll(slideClass))
                .not(slideClass + '[data-num="' + data + '"]')
                .appendTo(container);
              status = true;
            });
          }

          function customAnimate() {
            container.find(slideClass)
              .removeClass('prevActive');
            $('.active').addClass('prevActive')
              .removeClass('active');
            setTimeout(() => {
              container.find(slideClass + '[data-num="' + data + '"]')
                .addClass('active');
            }, 0);
          }

          self.disableButton(settings);
        });
    };
    // блакировка событий если анимация в движений----------------------------------------------------------------------
    self.disableButton = (settings) => {
      status = false;
      setTimeout(() => {
        status = true;
        return status;
      }, settings.slideSpeed);
      return status;
    };
    // resize-----------------------------------------------------------------------------------------------------------
    $(window).resize(() => {
      self.slideResize();
    });
    // движение вперёд--------------------------------------------------------------------------------------------------
    $('body').on('click', '.xS-buttonNext', () => {
      self.slideNext();
    });
    // движение назад---------------------------------------------------------------------------------------------------
    $('body').on('click', '.xS-buttonPrev', () => {
      self.slidePrev();
    });
  };
}
