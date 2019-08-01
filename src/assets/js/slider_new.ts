export class Slider {
  slider = new function () {
    let self = this;
    let id: string;
    let wrap;
    let container: any;
    let interval: number;
    let slideSize: number;
    let intervalID: any;
    let xSpage: number;
    let page: number;
    let slideStart: number = 0;
    let slidePrev: number;
    let pageList;
    let nawContainer;
    let slideClass: string;
    let status: boolean = true;
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
      wrap = document.getElementById(id);
      container = wrap.getElementsByClassName('xS-pageContainer')[0];
      slideClass = container.getElementsByClassName('xS-page');
      nawContainer = wrap.getElementsByClassName('xS-button')[0];
      interval = this.settings.interval;
      slideSize = container.getElementsByTagName('div').length;

      if (this.settings.page) {
        self.pageStep(this.settings);
      }

      if (this.settings.slideButton) {
        self.slideButtonAdd();
      }

      if (this.settings.autoPlay) {
        //self.autoPlayEvent(this.settings);
      }
      self.slideWidth(this.settings.slideSize);
      self.pageAdd();
    };

    // добавление кнопок------------------------------------------------------------------------------------------------
    self.slideButtonAdd = function () {
      let buttonHtml = document.createElement('div');
      buttonHtml.innerHTML = '<button class="xS-buttonNext"></button><button class="xS-buttonPrev"></button>';
      nawContainer.appendChild(buttonHtml);
    };
    // добавление пагинаций---------------------------------------------------------------------------------------------
    self.pageAdd = function () {
      for (let i = 0; i < slideSize; i++) {
        container.getElementsByClassName('xS-page')[i].setAttribute('data-num', i);
      }
    };
    // изменение ширины слайдов согластно размерам экрана---------------------------------------------------------------
    self.slideResize = function () {
      this.width = window.innerWidth;
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
    self.slideWidth = function (s) {
      xSpage = wrap.offsetWidth / s;
      for (let i = 0; i < slideSize; i++) {
        container.getElementsByClassName('xS-page')[i].style.width = xSpage + 'px';
      }
    };
    // авто прокрутка---------------------------------------------------------------------------------------------------
    self.autoPlayEvent = function (settings) {
      intervalID = setInterval(function () {
        self.slideNext(settings);
      }, settings.interval);
      wrap.hover(
        function () {
          clearInterval(intervalID);
        },
        function () {
          intervalID = setInterval(function (settings) {
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
      if (status !== true) return false;
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
        setTimeout(function () {
          container.stop().animate({
            left: -xSpage
          }, settings.slideSpeed, function () {
            container.css('left', '0').find(slideClass + ':first').addClass('active').appendTo(container);
            page = $(id + slideClass + ':first').data('num');
            if (settings.page)
              pageList.addClass('xS-button-active').not('.xS-p li' + '[data-num="' + page + '"]').removeClass('xS-button-active');
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
        if (settings.page)
          pageList.addClass('xS-button-active').not('.xS-p li' + '[data-num="' + slideStart + '"]').removeClass('xS-button-active');
        container.find(slideClass).removeClass('active').removeClass('prevActive').css('right', '100%').css('left', 'auto');
        container.find(slideClass + '[data-num="' + slidePrev + '"]').addClass('prevActive').css('right', '0');
        container.find(slideClass + '[data-num="' + slideStart + '"]').addClass('active').css('right', '100%').animate({right: 0}, settings.slideSpeed);
      }

      function customAnimate(settings) {
        slideStart++;
        slidePrev = slideStart;
        slidePrev--;
        if (slideStart >= slideSize) {
          slideStart = 0;
        }
        container.find(slideClass).removeClass('active').removeClass('prevActive');
        container.find(slideClass + '[data-num="' + slidePrev + '"]').addClass('prevActive');
        container.find(slideClass + '[data-num="' + slideStart + '"]').addClass('active');
        if (settings.page)
          pageList.addClass('xS-button-active').not('.xS-p li' + '[data-num="' + slideStart + '"]').removeClass('xS-button-active');
      }

      self.disableButton(this.settings);
    };
    // шаг назад--------------------------------------------------------------------------------------------------------
    self.slidePrev = function () {
      if (status !== true) return false;
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
        container.find(slideClass).removeClass('active');
        container.css('left', -xSpage + 'px').find(slideClass + ':last').addClass('active').prependTo(container);
        container.stop().animate({
          left: 0
        }, settings.slideSpeed, function () {
          this.data = $(id + slideClass + ':first').data('num');
          if (settings.page)
            pageList.addClass('xS-button-active').not('.xS-p li' + '[data-num="' + this.data + '"]').removeClass('xS-button-active');
          slideStart = 0;
        });
      }

      function block(settings) {
        slideStart--;
        let slidePrev = slideStart;
        slidePrev++;
        if (slideStart < 0) {
          slideStart = slideSize - 1;
        }
        if (settings.page)
          pageList.addClass('xS-button-active').not('.xS-p li' + '[data-num="' + slideStart + '"]').removeClass('xS-button-active');
        container.find(slideClass).removeClass('active').removeClass('prevActive').css('left', '100%').css('right', 'auto');
        container.find(slideClass + '[data-num="' + slidePrev + '"]').addClass('prevActive').css('left', '0');
        container.find(slideClass + '[data-num="' + slideStart + '"]').addClass('active').css('left', '100%').animate({left: 0}, settings.slideSpeed);
      }

      function customAnimate(settings) {
        slideStart--;
        let slidePrev = slideStart;
        slidePrev++;
        if (slideStart < 0) {
          slideStart = slideSize - 1;
        }
        container.find(slideClass).removeClass('active').removeClass('prevActive');
        container.find(slideClass + '[data-num="' + slidePrev + '"]').addClass('prevActive');
        container.find(slideClass + '[data-num="' + slideStart + '"]').addClass('active');
        if (settings.page)
          pageList.addClass('xS-button-active').not('.xS-p li' + '[data-num="' + slideStart + '"]').removeClass('xS-button-active');
      }

      self.disableButton(this.settings);
    };
    // переключение табами----------------------------------------------------------------------------------------------
    self.pageStep = function (settings) {
      let ulHtml = document.createElement('div');
      ulHtml.innerHTML = '<ul class="xS-p"></ul>';
      nawContainer.appendChild(ulHtml);
      for (let i: any = 0; i < slideSize; i++) {
        let li = document.createElement('li');
        li.setAttribute('data-num', i);
        li.innerHTML = '<button onclick="window.step2()" id="test"></button>';
        nawContainer.getElementsByClassName('xS-p')[0].appendChild(li);
      }


      function step2() {
        console.log('hgfg');
      }

      pageList = $(id + ' .xS-p li');


      $(id + ' .xS-p li ').on('click', function () {

        if (status !== true) return false;
        if ($(this).hasClass('xS-button-active'))
          return false;
        pageList.addClass('xS-button-active').not(this).removeClass('xS-button-active');
        let data = $(this).data('num');
        slideStart = data;
        let prevData = wrap.find(slideClass + '[data-num="' + data + '"]').prevAll(slideClass).length;
        let pageLeft = prevData * xSpage;
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
          $('.active').addClass('prevActive').removeClass('active');
          setTimeout(function () {
            container.find(slideClass + '[data-num="' + data + '"]').addClass('active').css('left', '100%').animate({left: 0}, settings.slideSpeed, function () {
              container.find(slideClass).css('left', '100%').css('right', 'auto');
              container.find(slideClass + '[data-num="' + data + '"]').css('left', '0').css('right', 'auto');
              status = true;
            });
          }, 0);
        }

        function rotatePage() {
          container.css('left', '0').stop().animate({
            left: -pageLeft
          }, settings.slideSpeed, function () {
            container.css('left', '0');
            wrap.find(slideClass).not($(slideClass + '[data-num="' + data + '"]').nextAll(slideClass)).not(slideClass + '[data-num="' + data + '"]').appendTo(container);
            status = true;
          });
        }

        function customAnimate() {
          container.find(slideClass).removeClass('prevActive');
          $('.active').addClass('prevActive').removeClass('active');
          setTimeout(function () {
            container.find(slideClass + '[data-num="' + data + '"]').addClass('active');
          }, 0);
        }

        self.disableButton(settings);
      });
    };
    // блакировка событий если анимация в движений----------------------------------------------------------------------
    self.disableButton = function (settings) {
      status = false;
      setTimeout(function () {
        status = true;
        return status;
      }, settings.slideSpeed);
      return status;
    };
    // resize-----------------------------------------------------------------------------------------------------------
    $(window).resize(function () {
      self.slideResize();
    });
    // движение вперёд--------------------------------------------------------------------------------------------------
    $('body').on('click', '.xS-buttonNext', function () {
      self.slideNext();
    });
    // движение назад---------------------------------------------------------------------------------------------------
    $('body').on('click', '.xS-buttonPrev', function () {
      self.slidePrev();
    });
  };
}
