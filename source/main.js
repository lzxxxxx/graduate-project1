window.onload = function (){

  document.addEventListener('scroll',(evt) => {
    var callbk = function (){
      var d = document.body.scrollTop*100/document.body.scrollHeight;
      var headpage = $('.headpage-section');
      headpage.css('background-position','0 '+(d+50)+'%');
    };
    requestAnimationFrame(callbk);
  });

  var uploadText = $('.upload-image .upload-image_text')[0];
  var uploadBtn = $('.upload-image .upload-image_btn')[0];
  var uploadImg = $('.upload-image img')[0];
  uploadText.addEventListener('click',(evt) => {
    uploadBtn.click();
  });
  uploadBtn.addEventListener('change',(evt) => {
    var files = uploadBtn.files;
    if(files){
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = function(evt){
        uploadImg.setAttribute('width','150px');
        uploadImg.setAttribute('height','150px');
        uploadImg.src = evt.target.result;
      };
    }
  });

  var data1 = {
    list: [
      {
        sectionClass: 'resume-section_edubackground',
        decorationText: '教育背景',
        left: '2013.09 - 2017.06',
        middle: 'Institute of Disaster Prevention Science and Technology',
        right: '网络工程',
        itemText: '主修课程：网络工程，计算机网络，C语言，数据结构等'
      },
      {
        sectionClass: 'resume-section_internexperience',
        decorationText: '工作经历',
        left: '2013.09 - 2017.06',
        middle: '云联万通',
        right: '前端开发实习生',
        itemText: '1.  团队管理。分配工作任务，与其他部门对接，制作报表；<br>2.  APP数据跟踪分析（新用户注册量、活跃用户量、日均UV、跳转情况、跳出率），进行页面内容优化工作；<br>3.  微信内容运营、粉丝维护；<br>4.  与设计、技术、营销、客服配合，展开线上活动策划及管理，如大转盘抽奖、话题互动抽奖、晒照赢免单、GIF截图抢代金券活动、与<br>4.  Uber车主端合作互推等；<br  6.  公司品牌宣传稿件撰写，对外推广产品文案撰写。<br>'
      },{
        sectionClass: 'resume-section_schoolexperience',
        decorationText: '校内实践',
        left: '2014.09 - 2015.06',
        middle: '青年志愿者协会',
        right: '外联部部长',
        itemText:'1.balbablalblablalbalblala ...'
      }
    ]
  }
  var html1 = template('show',data1);
  $('.resume-section_main')[0].innerHTML = html1;

  function changeTheme (number) {
    $(':root').css('--color-themecur','var(--color-theme'+number+')');
  }
  var selectbtns = $('[class *= select-bar_theme]');
  Array.from(selectbtns).forEach((cur,idx=0,arr) => {
    cur.addEventListener('click',changeTheme.bind(null,idx+1));
  });
};
