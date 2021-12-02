var OBJECTIVE = 'Fresh Graduate Software Engineer. <br>Mobile Developer works in: Flutter, Xcode and Kotlin and Java.<br>Backend Developer works on: Python Django'
var EDUCATIONS = 'King Fahad University of Petroleum and Minerals, B.S., Software Engineer Jul 2021.'
var SHORTCOURSES = [{ url: 'https://confirm.udacity.com/VDZQLTAD', title: 'Nanodegree in Data Analysis with Udacity', date: 'May - June 2021' },{ url: 'https://www.udemy.com/certificate/UC-60d01a30-a299-4e8e-be45-9fe084157522/', title: 'Flutter & dart 42 hour course from Udemy', date: 'Jan - Jul 2021' },{ url: 'https://ssc.kfupm.edu.sa/index.php?mp=cert_verify_sc&qstr=c2Nfb2ZyZD0xMjkmY2VydF9ubz02JnRlcm09MjYmc2Vzc2lvbj0x', title: 'Data Analysis using Python', date: 'Feb 2021' },
    { url: 'http://ssc.kfupm.edu.sa/index.php?mp=cert_verify_sc&qstr=c2Nfb2ZyZD0xMjAmY2VydF9ubz03JnRlcm09MjUmc2Vzc2lvbj0x', title: 'Introduction to Marketing (For Engineers and Scientists)', date: 'Sep 2020' }, { url: 'https://ssc.kfupm.edu.sa/index.php?mp=cert_verify_sc&qstr=c2Nfb2ZyZD0yMSZjZXJ0X25vPTMmdGVybT0xNSZzZXNzaW9uPTE=', title: 'Embedded system with Arduino as platform', date: 'Aug 2017' }
]



var EXPERIENCESt = 'I word on some Software Documentation in the Software Courses.'

var EXPERIENCES = [{ detail: 'Work in software project for senior project', img: './img/kfupm.jpg', date: 'Sep 2020 - Apr 2021' }, { detail: 'Software Engineering Trainee at NyarTech Company', img: './img/nyartech.jpg', date: 'Jul 2020 - Sep 2020' }, { detail: 'Season job with Zain for one month', img: './img/zain.jpg', date: 'Jul 2020' }]
var CERTIFICATIONS = [{detail:'123'}]
var PROJECTSt = 'I work on prototype projects and some complete projects.<br>I work on Native Mobile Devolopment and Web Back-End and Full-Stack Devolopment'

var PROJECTS = [{ detail: 'Work in privacy project to edit text privately and securely', urlType: 'GitHub', url: 'https://github.com/amd840/COE426' },
    { detail: 'Work on UML diagram with my team for a software course', urlType: 'Doc', url: 'https://docs.google.com/document/d/15W9lirOTEpx-E43Cfuio-694b3tX6njonUKL1HDW03Y/edit?usp=sharing' },
    { detail: 'Work on IOS app for KFUPM deanship of student affair', urlType: 'IOS', url: 'https://apps.apple.com/sa/app/ikfupm/id1473702047' }, { detail: 'Work on market website for web development course', urlType: 'Beta Website', url: 'http://testharaj.herokuapp.com/' }

    , { detail: 'Work on a prototype of KFUPM registration system with my team for software course', urlType: 'GitHub', url: 'https://github.com/mojtaba-alamer/Registration_System' }

]
var icon = { GitHub: 'large github middle aligned icon', IOS: 'large app store ios middle aligned icon', Doc: 'large file word middle aligned icon', 'Beta Website': 'large safari middle aligned icon' }

var ACTIVITIES = [{ detail: 'Member in many clubs in KFUPM (computer club, photography club and visitation club)', img: './img/kfupm.jpg', date: '' }, { detail: 'Vice president of Computer Club in KFUPM. I lead the project of the club for the first semester.', img: './img/cclub.jpg', date: 'sep 2019 - Sep 2020' }, { detail: 'President of Computer club in KFUPM', img: './img/cclub.jpg', date: 'Oct 2020 - present' }, { detail: 'Volunteering on KFUPM voluntary workday three times', img: './img/volunteer.jpg', date: '2017, 2019, 2020' }]
var PROGRAMMINGLANGUAGES = [{ name: 'Swift', img: 'http://assets.stickpng.com/images/58482ce4cef1014c0b5e4a4c.png' }, { name: 'Python', img: 'http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png' }, { name: 'Kotlin', img: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png' },
    { name: 'java', img: 'http://assets.stickpng.com/images/58480979cef1014c0b5e4901.png' }, { name: 'dart', img: './img/dart.jpg' }, { name: 'django', img: './img/dj.png' },
    { name: 'flutter', img: 'https://i.pinimg.com/originals/c1/65/1f/c1651f598d212acdfe551f103548e495.png' }, { name: 'javascript', img: 'https://e7.pngegg.com/pngimages/780/695/png-clipart-javascript-comment-html-logo-international-conference-on-missions-node-js-icon-angle-text.png' }, { name: 'php', img: 'https://pngimg.com/uploads/php/php_PNG12.png' },
    { name: 'sql', img: './img/sql.png' }, { name: 'html', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' }, { name: 'css', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.png' },
    { name: 'rest api', img: 'https://miro.medium.com/max/2720/1*3R6tTamJyAn2mRBgzfFlfQ.png' }, { name: 'ajax', img: './img/ajax.png' }, { name: 'C', img: 'https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png' }
]

var COMPUTERSKILL
var LANGUAGES

$('#OBJECTIVE').click(function() {
        $('#title').text("Ahmed Almoairfi");
        $('#details').html(OBJECTIVE);
        $('#titleContainer').attr('hidden', false);

        $('.ui.sidebar').sidebar('toggle');
        $('body').css("background", "#e4f6f5");
        $('#additionsDiv').attr('hidden', true);










    }

);
$('#EDUCATIONS').click(function() {
    $('#title').text("EDUCATIONS");
    $('#details').text(EDUCATIONS);
    $('.ui.sidebar').sidebar('toggle');
    $('#additionsDiv').attr('hidden', false);
    $('#titleContainer').attr('hidden', false);

    var additions = ''
    SHORTCOURSES.forEach((values, keys) => {
        additions += `<div class="item"><img class="ui avatar image" src= "./img/cer.png"></i><div class="content"><a class="header" href='${values['url']}'>${values['title']}</a><div class="description">${values['date']}</div> </div></div>`
    })

    $('#additionsTitle').text("SHORT COURSES");
    $('#additions').html(additions);


});
$('#EXPERIENCES').click(function() {
    $('#title').text("EXPERIENCES");
    $('#details').text(EXPERIENCESt);
    $('.ui.sidebar').sidebar('toggle');
    $('#additionsDiv').attr('hidden', false);
    $('#titleContainer').attr('hidden', true);

    additions = ''
    EXPERIENCES.forEach((values, keys) => {

        additions += `<div class="item"><img class="ui avatar image" src="${values['img']}"><div class="content"><p class="header">${values['detail']}</p><div class="description">${values['date']}</div> </div></div>`
    })

    $('#additionsTitle').text("EXPERIENCES");
    $('#additions').html(additions);
});
$('#CERTIFICATIONS').click(function() {
    $('#title').text("CERTIFICATIONS");
    $('#details').text('');
    $('.ui.sidebar').sidebar('toggle');
    $('#additionsDiv').attr('hidden', false);
    $('#titleContainer').attr('hidden', true);

    additions = ''
    CERTIFICATIONS.forEach((values, keys) => {

        additions += `<div class="item"><img class="ui avatar image" src= "./img/cer.png"><div class="content"><p class="header">${values['detail']}</p> </div></div>`
    })

    $('#additionsTitle').text("CERTIFICATIONS");
    $('#additions').html(additions);
});

$('#PROJECTS').click(function() {
    $('#title').text("PROJECTS");
    $('#details').html(PROJECTSt);
    $('.ui.sidebar').sidebar('toggle');
    $('#additionsDiv').attr('hidden', false);
    $('#titleContainer').attr('hidden', true);

    additions = ''
    PROJECTS.forEach((values, keys) => {

        additions += `<div class="item"><i class="${icon[values['urlType']]}"></i><div class="content"><p class="header">${values['detail']}</p><a href="${values['url']}" class="description">${values['urlType']}</a> </div></div>`
    })

    $('#additionsTitle').text("PROJECTS");
    $('#additions').html(additions);
});

$('#ACTIVITIES').click(function() {
    $('#title').text("ACTIVITIES");
    $('#details').text(OBJECTIVE);
    $('.ui.sidebar').sidebar('toggle');
    $('#additionsDiv').attr('hidden', false);
    $('#footer').dimmer('hide');
    $('#titleContainer').attr('hidden', true);

    additions = ''
    ACTIVITIES.forEach((values, keys) => {

        additions += `<div class="item"><img class="ui avatar image" src="${values['img']}"><div class="content"><p class="header">${values['detail']}</p><div class="description">${values['date']}</div> </div></div>`
    })

    $('#additionsTitle').text("ACTIVITIES");
    $('#additions').html(additions);
});

$('#PROGRAMMINGLANGUAGES').click(function() {
    $('#title').text("PROGRAMMING LANGUAGES");
    $('#details').text(OBJECTIVE);
    $('.ui.sidebar').sidebar('toggle');
    $('#additionsDiv').attr('hidden', false);
    $('#titleContainer').attr('hidden', true);

    $('#footer').dimmer('hide');
    additions = ''

    for (var i = 0; i < 5; i++) {
        var row = '<div class="item"><div style="width:100%" class="ui very relaxed horizontal divided list">'
        for (var j = 0; j < 3; j++) {
            row += `<div style="width:33%" class="item">
        <img class="ui avatar image" src="${PROGRAMMINGLANGUAGES[j + (i * 3)]['img']}">
        <div class="content">
          <div class="header">${PROGRAMMINGLANGUAGES[j + (i * 3)]['name']}</div>
        </div>
      </div>`

        }
        row += '</div></div>'
        additions += row;
    }

    $('#additionsTitle').text("PROGRAMMING LANGUAGES");
    $('#additions').html(additions);
});

$('#PROGRAMMING000LANGUAGES').click(function() {
    $('#title').text("PROGRAMMING LANGUAGES");
    $('#details').text(OBJECTIVE);
    $('.ui.sidebar').sidebar('toggle');
    $('#additionsDiv').attr('hidden', false);
    $('#footer').dimmer('hide');
    additions = ''

    for (var i = 0; i < 5; i++) {
        var row = '<div class="item"><div style="width:100%" class="ui very relaxed horizontal divided list">'
        for (var j = 0; j < 3; j++) {
            row += `<div style="width:33%" class="item">
        <img class="ui avatar image" src="${PROGRAMMINGLANGUAGES[j + (i * 3)]['img']}">
        <div class="content">
          <div class="header">${PROGRAMMINGLANGUAGES[j + (i * 3)]['name']}</div>
        </div>
      </div>`

        }
        row += '</div></div>'
        additions += row;
    }

    $('#additionsTitle').text("PROGRAMMING LANGUAGES");
    $('#additions').html(additions);
});

$('#LANGUAGES').click(function() {

    $('.mini.modal')
        .modal('show');
});
$('#DownloadCV').click(function() {


});


$(document).ready(function() {
    $("#menuBtn").click(function(e) {
        $('.ui.sidebar').sidebar('toggle');





    });
});
