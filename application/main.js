'use strict';

window.onload = function () {
  document.addEventListener('scroll', function (evt) {
    var callbk = function callbk() {
      var d = document.body.scrollTop * 100 / document.body.scrollHeight;
      var headpage = $('.headpage-section');
      headpage.css('background-position', '0 ' + (d + 50) + '%');
    };
    requestAnimationFrame(callbk);
  });

  var uploadText = $('.upload-image .upload-image_text')[0];
  var uploadBtn = $('.upload-image .upload-image_btn')[0];
  var uploadImg = $('.upload-image img')[0];
  uploadText.addEventListener('click', function (evt) {
    uploadBtn.click();
  });
  uploadBtn.addEventListener('change', function (evt) {
    var files = uploadBtn.files;
    if (files) {
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function (evt) {
        uploadImg.setAttribute('width', '150px');
        uploadImg.setAttribute('height', '150px');
        uploadImg.src = evt.target.result;
      };
    }
  });
};