$(".slide").slick({
  speed: 50,
  dots: true,
  infinite: true,
  speed: 50,
  fade: true,
  autoplay: true,
  infinite: true,
  arrows: false,
  cssEase: "linear",
});
$(".chefs-slide").slick({
  speed: 50,
  infinite: true,
  speed: 50,
  fade: true,
  autoplay: true,
  infinite: true,
  cssEase: "linear",
  arrows: false,
});
$(".testimony-slide").slick({
  speed: 50,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  infinite: true,
  cssEase: "linear",
  arrows: false,
  dots: true,
});

$(".photo-slide").slick({
  centerMode: true,
  slidesToShow: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
