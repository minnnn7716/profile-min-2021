$(document).ready(function () {
  // 點擊按鈕滾動
  $('.scroll-profile a').click(function () {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $("#profile").offset().top - 85
    }, 1000);
  });

  $('.scroll-resume a').click(function () {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $("#resume").offset().top - 85
    }, 1000);
  });

  $('.scroll-work a').click(function () {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $("#work").offset().top - 85
    }, 1000);
  });

  $('.scroll-contact a').click(function () {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $("#contact").offset().top - 85
    }, 1000);
  });

  // nav 至指定位置出現
  var winHeight = $(document).scrollTop();
  $(window).scroll(function () {
    var scrollY = $(document).scrollTop();
    // 獲取垂直滾動的距離,即滾動了多少
    if (scrollY > 530) {
      //如果滾動距離大於530px則顯示,否則刪除
      $('.nav').addClass('showed');
    }
    else { $('.nav').removeClass('showed'); }
    if (scrollY > winHeight) {
      //如果沒滾動到頂部,顯示顯示類,否則新增
      $('.nav').removeClass('hidened');
    }
    else { $('.nav').addClass('hidened'); }
  });

  // nav active
  // $(".navLink-layout>li").each(function (index) {
  //   $(this).click(function () {
  //     $("li").removeClass("active");
  //     $("li").eq(index).addClass("active");
  //   });
  // });

  // Swiper
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  // 大小圖切換
  // 1. 獲取需要的標簽
  var bigImg_web_bookey = document.getElementById('bigImg_web_bookey');
  var smallImg_web_bookey = document.getElementById('smallImg_web_bookey');
  var aLists_booky = smallImg_web_bookey.getElementsByTagName('a');
  console.log(aLists_booky);

  // 2. 事件綁定
  for (var i = 0; i < aLists_booky.length; i++) {
    var a = aLists_booky[i];
    // console.log(a);
    a.onclick = function (ev1) {
      console.log(this);
      bigImg_web_bookey.setAttribute('src', this.href);
      // 阻止執行默認事件 a
      return false;
    }
  }

  var bigImg_web_prefume = document.getElementById('bigImg_web_prefume');
  var smallImg_web_prefume = document.getElementById('smallImg_web_prefume');
  var aLists_prefume = smallImg_web_prefume.getElementsByTagName('a');
  console.log(aLists_prefume);

  for (var i = 0; i < aLists_prefume.length; i++) {
    var a = aLists_prefume[i];
    // console.log(a);
    a.onclick = function (ev1) {
      console.log(this);
      bigImg_web_prefume.setAttribute('src', this.href);
      // 阻止執行默認事件 a
      return false;
    }
  }

  var bigImg_design_yokohama = document.getElementById('bigImg_design_yokohama');
  var smallImg_design_yokohama = document.getElementById('smallImg_design_yokohama');
  var aLists_yokohama = smallImg_design_yokohama.getElementsByTagName('a');
  console.log(aLists_yokohama);

  for (var i = 0; i < aLists_yokohama.length; i++) {
    var a = aLists_yokohama[i];
    // console.log(a);
    a.onclick = function (ev1) {
      console.log(this);
      bigImg_design_yokohama.setAttribute('src', this.href);
      // 阻止執行默認事件 a
      return false;
    }
  }

  var bigImg_design_earth = document.getElementById('bigImg_design_earth');
  var smallImg_design_earth = document.getElementById('smallImg_design_earth');
  var aLists_earth = smallImg_design_earth.getElementsByTagName('a');
  console.log(aLists_earth);

  for (var i = 0; i < aLists_earth.length; i++) {
    var a = aLists_earth[i];
    // console.log(a);
    a.onclick = function (ev1) {
      console.log(this);
      bigImg_design_earth.setAttribute('src', this.href);
      // 阻止執行默認事件 a
      return false;
    }
  }

  var bigImg_illusator_kids = document.getElementById('bigImg_illusator_kids');
  var smallImg_illusator_kids = document.getElementById('smallImg_illusator_kids');
  var aLists_kids = smallImg_illusator_kids.getElementsByTagName('a');
  console.log(aLists_kids);

  for (var i = 0; i < aLists_kids.length; i++) {
    var a = aLists_kids[i];
    // console.log(a);
    a.onclick = function (ev1) {
      console.log(this);
      bigImg_illusator_kids.setAttribute('src', this.href);
      // 阻止執行默認事件 a
      return false;
    }
  }

  var bigImg_illusator_crownin = document.getElementById('bigImg_illusator_crownin');
  var smallImg_illusator_crownin = document.getElementById('smallImg_illusator_crownin');
  var aLists_crownin = smallImg_illusator_crownin.getElementsByTagName('a');
  console.log(aLists_crownin);

  for (var i = 0; i < aLists_crownin.length; i++) {
    var a = aLists_crownin[i];
    // console.log(a);
    a.onclick = function (ev1) {
      console.log(this);
      bigImg_illusator_crownin.setAttribute('src', this.href);
      // 阻止執行默認事件 a
      return false;
    }
  }


  // 大小圖切換 active
  $('.img-select-item').click(function () {
    $(this).addClass('active').parent().siblings().children().removeClass('active');
  });

  // 作品 tab 切換
  var $li = $('.work-button li');
  $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();

  $li.click(function () {
    $($(this).find('a').attr('href')).show().siblings('.tab-inner').hide();
    $(this).addClass('active').siblings('.active').removeClass('active');
  });

  $('.work-button li a').click(function () {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $("#work").offset().top - 85
    }, 1000);
  });


  // 作品 tab 按鈕 active
  $('.work-button>li>a').click(function () {
    $(this).addClass('active').parent().siblings().children().removeClass('active');
  });
});