function preloader() {
  if (document.images) {
      var img1 = new Image();
      var img2 = new Image();
      var img3 = new Image();
      var img4 = new Image();
      var img5 = new Image();
      var img6 = new Image();
      var img7 = new Image();
      var img8 = new Image();
      img1.src = "./pictures/eco_Valgepea_2013_21_abundance_lv1_800.png";
      img2.src = "./pictures/eco_Valgepea_2013_21_abundance_lv2_800.png";
      img3.src = "./pictures/eco_Valgepea_2013_21_abundance_lv3_800.png";
      img4.src = "./pictures/eco_Valgepea_2013_21_abundance_lv5_800.png";
      img5.src = "./pictures/eco_Valgepea_2013_21_cost_lv1_800.png";
      img6.src = "./pictures/eco_Valgepea_2013_21_cost_lv2_800.png";
      img7.src = "./pictures/eco_Valgepea_2013_21_cost_lv3_800.png";
      img8.src = "./pictures/eco_Valgepea_2013_21_cost_lv5_800.png";
  }
}
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(preloader);
