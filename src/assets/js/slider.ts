export class Slider {
  slider = new function () {
    let id: string,
      wrap,
      wrap2,
      container: any,
      container2: any,
      interval: number,
      slideSize: number,
      intervalID: any,
      xSpage: number,
      slideStart = 0,
      pageList,
      status = true,
      sliderWorkArr,
      sliderWorkDom,
      sizeStep = 0,
      slidePrev = 0;

    const self = this,
      slider = document.getElementsByClassName('xS-slider'),
      slideClass = ' .xS-page';

    // иннициализация и настройка отображения---------------------------------------------------------------------------
    self.initSlider = function (itemParams) {
      this.settings = $.extend({
        id: 'slide',
        id2: 'slide',
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

      id = this.settings.id;
      wrap = $(id);
      wrap2 = document.getElementById(this.settings.id2);
      sliderWorkArr = [document.getElementById(this.settings.id2).querySelector('.xS-slider')];
      sliderWorkDom = document.getElementById(this.settings.id2).querySelector('.xS-slider');

      container = $(id + ' .xS-pageContainer');

      container2 = [sliderWorkDom.querySelector('.xS-pageContainer')];
      slideSize = container2[0].childElementCount;

      interval = this.settings.interval;
      switch (this.settings.type) {
        case 'rotate':
          self.rotateAnimate(sliderWorkDom);
          break;
        case 'block':
          self.blockAnimate(sliderWorkDom);
          break;
        case 'customAnimate':
          self.showHideAnimate(sliderWorkDom);
          break;
        default:
          self.rotateAnimate(sliderWorkDom);
      }
      if (this.settings.slideButton) {
        self.slideButtonAdd();
      }
      if (this.settings.autoPlay) {
        self.autoPlayEvent(this.settings);
      }
      self.slideWidth(this.settings.slideSize);
      self.pageAdd(this.settings);
    };
    // добавление кнопок------------------------------------------------------------------------------------------------
    self.slideButtonAdd = () => {
      wrap2
        .querySelector('.xS-button')
        .insertAdjacentHTML('afterBegin', '<button class="xS-buttonNext"></button><button class="xS-buttonPrev"></button>');
    };
    // добавление пагинаций---------------------------------------------------------------------------------------------
    self.pageAdd = (item) => {
      if (item.page) {
        wrap2
          .querySelector('.xS-button')
          .insertAdjacentHTML('afterBegin', '<ul class="xS-p"></ul>');
      }
      for (let i = 0; i < slideSize; i++) {
        sliderWorkDom
          .querySelector('.xS-page.slide' + i).setAttribute('data-num', i);
        if (item.page) {
          wrap2
            .querySelector('.xS-p')
            .insertAdjacentHTML('beforeend', '<li data-num="' + i + '"><button data-num="' + i + '"></button></li>');
        }
        if (i === slideSize) {
          self.pageStep(item);
        }
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
    self.slideWidth = (s) => {
      xSpage = slider[0].clientWidth / s;
      for (const i of container2[0].getElementsByTagName('div')) {
        i.style.width = xSpage + 'px';
      }
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
      sliderWorkDom.classList.add('typeRotate');
    };
    // блочный режим отображения----------------------------------------------------------------------------------------
    self.blockAnimate = function () {
      sliderWorkDom.classList.add('typeBlock');
    };
    // появление/исчезновение режим отображения-------------------------------------------------------------------------
    self.showHideAnimate = function () {
      sliderWorkDom.classList.add('typeShowHide');
    };
    // шаг в перёд------------------------------------------------------------------------------------------------------
    self.slideNext = function () {
      if (status !== true) {
        return false;
      }
      switch (this.settings.type) {
        case 'rotate' :
          rotate();
          break;
        case 'block':
          block(this.settings);
          break;
        case 'customAnimate':
          customAnimate(this.settings);
          break;
        default:
          rotate();
      }

      function rotate() {
        const start = Date.now();
        const timer = setInterval(function () {
          const timePassed = Date.now() - start;
          container2[0].style.left = -timePassed + 'px';
          if (timePassed >= xSpage) {
            clearInterval(timer);
            container2[0].style.left = '';
            container2[0].appendChild(container2[0].getElementsByTagName('div')[0]);
            const currentPage = container2[0].getElementsByTagName('div')[0].dataset.num;
            wrap2.querySelector('.xS-p').getElementsByTagName('li')[slidePrev].classList.remove('xS-button-active');
            wrap2.querySelector('.xS-p').getElementsByTagName('li')[currentPage].classList.add('xS-button-active');
            slidePrev = currentPage;
            return;
          }
        }, 0);
      }


      function block(settings) {
        console.log('в лево');
        sizeStep++;
        if (sizeStep > 1) {
          sizeStep = 1;
        }


        let step = xSpage;

        slideStart--;
        slidePrev = slideStart;
        slidePrev++;
        if (slideStart < 0) {
          slideStart = slideSize - 1;
        }
        const start = Date.now();
        const timer = setInterval(function () {
          const timePassed = Date.now() - start;
          container2[0].getElementsByTagName('div')[0].style.left = -timePassed + 'px';
          if (timePassed >= xSpage) {
            clearInterval(timer);
            container2[0].appendChild(container2[0].getElementsByTagName('div')[0]);
            for (const item of container2[0].getElementsByTagName('div')) {
              item.style.left = '';
              item.style.right = '';
            }
            return;
          }
        }, 0);
        if (settings.page) {
          wrap2.querySelector('.xS-p').getElementsByTagName('li')[slidePrev].classList.remove('xS-button-active');
          wrap2.querySelector('.xS-p').getElementsByTagName('li')[slideStart].classList.add('xS-button-active');
        }
        console.log(sizeStep);
      }


      function customAnimate(settings) {
        slideStart++;
        slidePrev = slideStart;
        slidePrev--;
        if (slideStart >= slideSize) {
          slideStart = 0;
        }
        const list = container2[0].getElementsByTagName('div');
        for (const item of list) {
          item.classList.remove('active');
          item.classList.remove('prevActive');
        }
        container2[0].getElementsByTagName('div')[slideStart].classList.add('active');
        container2[0].getElementsByTagName('div')[slidePrev].classList.add('prevActive');
        if (settings.page) {
          wrap2.querySelector('.xS-p').getElementsByTagName('li')[slidePrev].classList.remove('xS-button-active');
          wrap2.querySelector('.xS-p').getElementsByTagName('li')[slideStart].classList.add('xS-button-active');
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
        let step = xSpage;
        container2[0].style.left = -xSpage + 'px';
        container2[0].insertBefore(container2[0].getElementsByTagName('div')[5], container2[0].getElementsByTagName('div')[0]);
        const timer = setInterval(function () {
          step--;
          container2[0].style.left = -step + 'px';
          if (step <= 0) {
            clearInterval(timer);
            if (settings.page) {
              const currentPage = container2[0].getElementsByTagName('div')[0].dataset.num;
              wrap2.querySelector('.xS-p').getElementsByTagName('li')[slidePrev].classList.remove('xS-button-active');
              wrap2.querySelector('.xS-p').getElementsByTagName('li')[currentPage].classList.add('xS-button-active');
              slidePrev = currentPage;
            }
            return;
          }
        }, 0);
      }


      function block(settings) {
        console.log('в право');
        sizeStep--;
        if (sizeStep < -1) {
          sizeStep = -1;
        }


        let step = xSpage;
        slideStart++;
        slidePrev = slideStart;
        slidePrev--;
        if (slideStart >= slideSize) {
          slideStart = 0;
        }

        const start = Date.now();
        const timer = setInterval(function () {
          const timePassed = Date.now() - start;
          console.log(timePassed);
          if (sizeStep < 0) {
            step = 0;

            container2[0].getElementsByTagName('div')[0].style.right = -timePassed + 'px';
            if (timePassed >= xSpage) {
              clearInterval(timer);
              container2[0].insertBefore(container2[0].getElementsByTagName('div')[0], container2[0].getElementsByTagName('div')[6]);
              for (const item of container2[0].getElementsByTagName('div')) {
                item.style.left = '';
                item.style.right = '';
              }
              return;
            }

          } else {
            container2[0].insertBefore(container2[0].getElementsByTagName('div')[5], container2[0].getElementsByTagName('div')[0]);
            container2[0].getElementsByTagName('div')[0].style.right = -xSpage + 'px';
            container2[0].getElementsByTagName('div')[0].style.right = step + 'px';
            if (step <= 0) {
              clearInterval(timer);
              for (const item of container2[0].getElementsByTagName('div')) {
                item.style.left = '';
                item.style.right = '';
              }
              return;
            }
          }
        });

        if (settings.page) {
          wrap2.querySelector('.xS-p').getElementsByTagName('li')[slidePrev].classList.remove('xS-button-active');
          wrap2.querySelector('.xS-p').getElementsByTagName('li')[slideStart].classList.add('xS-button-active');
        }


      }

      console.log(sizeStep);


      function customAnimate(settings) {
        slideStart--;
        slidePrev = slideStart;
        slidePrev++;
        if (slideStart < 0) {
          slideStart = slideSize - 1;
        }
        const list = container2[0].getElementsByTagName('div');
        for (const item of list) {
          item.classList.remove('active');
          item.classList.remove('prevActive');
        }
        container2[0].getElementsByTagName('div')[slideStart].classList.add('active');
        container2[0].getElementsByTagName('div')[slidePrev].classList.add('prevActive');
        if (settings.page) {
          console.log(slidePrev);
          wrap2.querySelector('.xS-p').getElementsByTagName('li')[slidePrev].classList.remove('xS-button-active');
          wrap2.querySelector('.xS-p').getElementsByTagName('li')[slideStart].classList.add('xS-button-active');
        }
      }

      self.disableButton(this.settings);
    };
    // переключение табами----------------------------------------------------------------------------------------------
    self.pageStep = (settings) => {

      pageList = $(id + ' .xS-p li');
      const tabs: any = wrap2.querySelector('.xS-p');
      tabs.addEventListener('click', (e) => {
        if (e.target.localName === 'button') {
          const dataCurrent = +e.target.dataset.num;
          if (status !== true) {
            return false;
          }
          if (e.path[1].className === 'xS-button-active') {
            return false;
          }
          tabs.getElementsByTagName('li')[slidePrev].classList.remove('xS-button-active');
          tabs.getElementsByTagName('li')[e.target.dataset.num].classList.add('xS-button-active');
          slidePrev = dataCurrent;
          slideStart = dataCurrent;
          let prevData;
          for (let i = 0; i <= container2[0].getElementsByTagName('div').length; i++) {
            const item = +container2[0].getElementsByTagName('div')[i].dataset.num;
            if (dataCurrent === item) {
              prevData = i;
              break;
            }
          }
          const pageLeft = prevData * xSpage;
          switch (settings.type) {
            case 'rotate' :
              rotatePage(dataCurrent, pageLeft);
              break;
            case 'block':
              blockPage(dataCurrent);
              break;
            case 'customAnimate':
              customAnimate(dataCurrent);
              break;
            default:
              rotatePage(dataCurrent, pageLeft);
          }
          self.disableButton(settings);
        }

        function blockPage(dataCurrent) {
          container.find(slideClass).removeClass('prevActive');

          $('.active')
            .addClass('prevActive')
            .removeClass('active');
          setTimeout(() => {
            container.find(slideClass + '[data-num="' + dataCurrent + '"]')
              .addClass('active')
              .css('left', '100%')
              .animate({left: 0}, settings
                .slideSpeed, () => {
                container.find(slideClass)
                  .css('left', '100%').css('right', 'auto');
                container
                  .find(slideClass + '[data-num="' + dataCurrent + '"]')
                  .css('left', '0')
                  .css('right', 'auto');
                status = true;
              });
          }, 0);
        }

        function rotatePage(dataCurrent, pageLeft) {
          container.css('left', '0').stop().animate({
            left: -pageLeft
          }, settings.slideSpeed, () => {
            container.css('left', '0');
            wrap
              .find(slideClass)
              .not($(slideClass + '[data-num="' + dataCurrent + '"]')
                .nextAll(slideClass))
              .not(slideClass + '[data-num="' + dataCurrent + '"]')
              .appendTo(container);
            status = true;
          });
        }

        function customAnimate(dataCurrent) {
          container.find(slideClass)
            .removeClass('prevActive');
          $('.active').addClass('prevActive')
            .removeClass('active');
          setTimeout(() => {
            container.find(slideClass + '[data-num="' + dataCurrent + '"]')
              .addClass('active');
          }, 0);
        }
      });
    };
    // блокировка событий если анимация в движений----------------------------------------------------------------------
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
