$(function () {
  $("#js-tab li").click(function () {
    $("#js-tab li").removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();

    $(".tab-content").removeClass("active");
    $(".tab-content").eq(index).addClass("active");
  });
});

(function () {
  if ($(".js-modal-video").length) { //クラス名js-modal-videoがあれば以下を実行
    $(".js-modal-video").modalVideo({
      channel: "youtube",
      youtube: {
        rel: 0, //関連動画の指定
        autoplay: 0, //自動再生の指定
        controls: 0, //コントロールさせるかどうかの指定
      },
    });
  }
})();

