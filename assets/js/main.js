(function () {
  "use strict";

  // ==== Preloader
  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  // ======= Sticky
  window.onscroll = function () {
    const header_navbar = document.querySelector(".navbar-area");
    const sticky = header_navbar.offsetTop;
    const logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = "assets/images/logo/NEW_LOGO_2.svg";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = "assets/images/logo/NEW_LOGO.svg";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ==== for menu scroll
  const pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 1 - 60,
      });
    });
  });

  // section menu active
  function onScroll(event) {
    const sections = document.querySelectorAll(".page-scroll");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val);
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelector(".page-scroll").classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  }

  window.document.addEventListener("scroll", onScroll);

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });

  // ========= glightbox
  const myGallery = GLightbox({
    href: "https://www.youtube.com/watch?v=TGgq6lS6qWc",
    type: "video",
    source: "youtube", //vimeo, youtube or local
    width: 900,
    autoplayVideos: true,
  });

  //====== counter up
  const cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append: "k+",
  });
  cu.start();

  //=====  WOW active
  new WOW().init();

  //=====  particles
  if (document.getElementById("particles-1"))
    particlesJS("particles-1", {
      particles: {
        number: {
          value: 40,
          density: {
            enable: !0,
            value_area: 4000,
          },
        },
        color: {
          value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#fff",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 33,
            height: 33,
          },
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: {
            enable: !0,
            speed: 0.2,
            opacity_min: 0.15,
            sync: !1,
          },
        },
        size: {
          value: 50,
          random: !0,
          anim: {
            enable: !0,
            speed: 2,
            size_min: 5,
            sync: !1,
          },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 1,
          direction: "top",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: !1,
            mode: "bubble",
          },
          onclick: {
            enable: !1,
            mode: "repulse",
          },
          resize: !0,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: !0,
    });

  if (document.getElementById("particles-2"))
    particlesJS("particles-2", {
      particles: {
        number: {
          value: 40,
          density: {
            enable: !0,
            value_area: 4000,
          },
        },
        color: {
          value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#fff",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 33,
            height: 33,
          },
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: {
            enable: !0,
            speed: 0.2,
            opacity_min: 0.15,
            sync: !1,
          },
        },
        size: {
          value: 50,
          random: !0,
          anim: {
            enable: !0,
            speed: 2,
            size_min: 5,
            sync: !1,
          },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 1,
          direction: "top",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: !1,
            mode: "bubble",
          },
          onclick: {
            enable: !1,
            mode: "repulse",
          },
          resize: !0,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: !0,
    });
})();
$(function () {
  "use strict";
  $(window).on("load", function (o) {
    $(".preloader").delay(500).fadeOut(500);
  }),
    $(window).on("scroll", function (o) {
      $(window).scrollTop() < 10
        ? $(".navbar-area").removeClass("sticky")
        : $(".navbar-area").addClass("sticky");
    }),
    $(".navbar-nav a").on("click", function () {
      $(".navbar-collapse").removeClass("show");
    }),
    $(".navbar-toggler").on("click", function () {
      $(this).toggleClass("active");
    }),
    $(".navbar-nav a").on("click", function () {
      $(".navbar-toggler").removeClass("active");
    });
  var o = $(".page-scroll");
  $(window).scroll(function () {
    var i = $(this).scrollTop();
    o.each(function () {
      $(this.hash).offset().top - 73 <= i &&
        ($(this).parent().addClass("active"),
        $(this).parent().siblings().removeClass("active"));
    });
  }),
    $('[href="#side-menu-right"], .overlay-right').on("click", function (o) {
      $(".sidebar-right, .overlay-right").addClass("open");
    }),
    $('[href="#close"], .overlay-right').on("click", function (o) {
      $(".sidebar-right, .overlay-right").removeClass("open");
    }),
    AOS.init(),
    $(".container").imagesLoaded(function () {
      var o = $(".grid").isotope({ transitionDuration: "1s" });
      $(".portfolio-menu ul").on("click", "li", function () {
        var i = $(this).attr("data-filter");
        o.isotope({ filter: i });
      }),
        $(".portfolio-menu ul li").on("click", function (o) {
          $(this).siblings(".active").removeClass("active"),
            $(this).addClass("active"),
            o.preventDefault();
        });
    }),
    $(".image-popup").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
    }),
    $(".video-popup").magnificPopup({ type: "iframe" }),
    $(".testimonial-active").slick({
      infinite: !0,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 800,
      arrows: !1,
      dots: !0,
      autoplay: !0,
      autoplaySpeed: 5e3,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
        { breakpoint: 576, settings: { slidesToShow: 1, arrows: !1 } },
      ],
    }),
    $(".testimonial-active-2").slick({
      infinite: !0,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 800,
      arrows: !1,
      dots: !0,
      autoplay: !0,
      autoplaySpeed: 5e3,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 2 } },
        { breakpoint: 992, settings: { slidesToShow: 1 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
        { breakpoint: 576, settings: { slidesToShow: 1, arrows: !1 } },
      ],
    }),
    $(".client-active").slick({
      infinite: !0,
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 800,
      arrows: !1,
      dots: !1,
      autoplay: !0,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 6 } },
        { breakpoint: 992, settings: { slidesToShow: 5 } },
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 576, settings: { slidesToShow: 2, arrows: !1 } },
      ],
    }),
    $(".testimonial-active-4").slick({
      infinite: !0,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 800,
      arrows: !1,
      dots: !0,
      autoplay: !0,
      autoplaySpeed: 5e3,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 2 } },
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
        { breakpoint: 576, settings: { slidesToShow: 1, arrows: !1 } },
      ],
    }),
    $(window).on("scroll", function (o) {
      $(this).scrollTop() > 600
        ? $(".back-to-top").fadeIn(200)
        : $(".back-to-top").fadeOut(200);
    }),
    $(".back-to-top").on("click", function (o) {
      o.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 1500);
    });
});

$(".client-active").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 800,
  arrows: false,
  dots: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
  ],
});
document.addEventListener("DOMContentLoaded", function () {
  var dropdownToggle = document.getElementById("uslugiDropdown");

  dropdownToggle.addEventListener("click", function () {
    if (dropdownToggle.classList.contains("show")) {
      dropdownToggle.classList.remove("show");
    } else {
      dropdownToggle.classList.add("show");
    }
  });

  dropdownToggle.addEventListener("show.bs.dropdown", function () {
    dropdownToggle.classList.add("show");
  });

  dropdownToggle.addEventListener("hide.bs.dropdown", function () {
    dropdownToggle.classList.remove("show");
  });
});
