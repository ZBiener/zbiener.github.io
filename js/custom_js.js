// plus-minus buttons
//Grab all the trigger elements on the page
var offset = 0;
var timeout = 150;
//Listen for click events, but only on toggle triggers
window.addEventListener('click', (ev) => {
    const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
    const showAllTrigger = Array.from(document.querySelectorAll('[data-toggle="showall"], [data-toggle="hideall"]'));

    const elm = ev.target;
    if (triggers.includes(elm)) {
        const selector = elm.getAttribute('data-target');
        collapse(selector, 'toggle');
        if (elm.classList.contains('minus')) {
            setTimeout(function() {
                elm.classList.remove('minus');
            }, timeout);

        } else {
            elm.classList.add('minus');
        }

    }
    // terrible logic, for publications page
    if (showAllTrigger.includes(elm)) {
        var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();      
            var foundFirst =  true;
            //$('.collapse').each( function() {
            //    var offset = $(this).offset();
            //    if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight) ) {                    
            //       if ( foundFirst ==  true) {
            //        $(this).addClass("first");
            //        foundFirst= false;
            //       }                  
            //    } else {
            //        $(this).removeClass("first");
            //        foundFirst= true;
            //    }
            //});
            //$('.first').css('background','blue');

            offset = ( $(".hackmenu").offset().top - $(window).scrollTop() )
            //console.log(offset);
        if (elm.getAttribute('data-toggle') == 'showall') {
            
            //const selector = elm.getAttribute('data-target');
            //collapse(selector, 'show');
            collapse('.collapse.editedbooks, .collapse.articles, .collapse.shortarticles, .collapse.talks, .collapse.abstract, .collapse.fullentry, .collapse.project, .collapse.post, .collapse.item_details, .collapse.grad, .collapse.undergrad' , 'show');
            elm.setAttribute('data-toggle', 'hideall');

        } else {
            const selector = elm.getAttribute('data-target');
            collapse(selector, 'hide');
            collapse('.collapse.project', 'hide');
            elm.setAttribute('data-toggle', 'showall');
            elm.set;

        }
        
        //$('.first').each( function() {
          //      console.log(this.innerHTML);
                //offset = $(".first").offset().top;
  //                     console.log(offset);
  //                     console.log($(window).height());
  //                     console.log($(window).scrollTop());



  //     //});
  //     console.log(offset);

      //setTimeout(function() {
      //$('html, body').animate({
      //     scrollTop: $('.hackmenu').offset().top
      //}, 500);
      //}, 1500);
       //**//var location = "'#" + $('.first').attr('id') + "'";
       

        //console.log(location);


        
        //$(location).css('background','red');

        //jQuery('html,body').animate({
        //scrollTop: jQuery(location).offset().top
        //}, 'slow');

        setTimeout(function() {
             window.scrollTo(0, 0);
             var current = $(".hackmenu").offset().top
             window.scrollBy(0, (current - offset   ) );
         }, 300);

        
//
//        setTimeout(function() {
//             window.scrollTo(0, offset);
//         }, 500);
//
//        $('html, body').animate({
//     scrollTop: $('.hackmenu').offset().top
//}, 500);
        //$(".collapse").each( function() {
        //    $(this).removeClass("first");
        //});

   
    }
}, false);

const fnmap = {
    'toggle': 'toggle',
    'show': 'add',
    'hide': 'remove'
};
const collapse = (selector, cmd) => {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
        target.classList[fnmap[cmd]]('show');
       // target.classList[fnmap[cmd]]('header-switch');
        isinview();
    });
};

// end plus-minus buttons

//switching header image when the cursor hovers on certain divs
//var myFunction = function() {
//    var attribute = this.getAttribute('data-image');
//    var block_to_insert;
//    var container_block;
//    //define div above original bacground-image
//    block_to_insert = document.createElement('div');
//    block_to_insert.setAttribute('class', 'header-image header-image--on not-visible');
//    block_to_insert.setAttribute('style', 'background-image:' + attribute);
//    container_block = document.getElementsByClassName('header')[0];
//    //turn off original background-image
//    document.getElementsByClassName("header-image header-image--on")[0].classList.add('not-visible');
//    //add new background-image, changes classes to turn off opacity
//    container_block.insertBefore(block_to_insert, container_block.firstChild);
//    document.getElementsByClassName("header-image header-image--on")[0].classList.remove('not-visible');
//    document.getElementsByClassName("header-image header-image--on")[0].classList.add('visible');
//
//};
//
//$(document).ajaxComplete(function() {
//    var hoverDivs = document.getElementsByClassName('header-switch');
//    for (var i = 0; i < hoverDivs.length; i++) {
//        hoverDivs[i].addEventListener('mouseover', myFunction, false);
//    };
//
//});
// end header image code

//switching header image when the cursor hovers on certain divs
//function switchHeader1(el) {
//
//    if (el.hasAttribute('data-image')) {
//    var featuredImage = el.getAttribute('data-image');
//    var block_to_insert;
//    var container_block;
//    //define div above original bacground-image
//    block_to_insert = document.createElement('div');
//    block_to_insert.setAttribute('class', 'header-image header-image--on not-visible');
//    block_to_insert.setAttribute('style', 'background-image:' + featuredImage);
//    container_block = document.getElementsByClassName('header')[0];
//    // turn off original background-image
//    document.getElementsByClassName("header-image header-image--on")[0].classList.add('not-visible');
//    //add new background-image, changes classes to turn off opacity
//    container_block.insertBefore(block_to_insert, container_block.firstChild);
//    document.getElementsByClassName("header-image header-image--on")[0].classList.remove('not-visible');
//    document.getElementsByClassName("header-image header-image--on")[0].classList.add('visible');
//    setTimeout(function() {
//            document.getElementsByClassName("header-image header-image--on not-visible")[0].remove();
//            }, 800);
//    }
//}

function checkforDoubleHeader() {
        if ( $('.header-image--on').length > 1 ) {
          $('.header-image').slice(1).removeClass('header-image--on');
        }
    
        if ( $('.header-image:not(.header-image--on)').length > 1 ) {
          $('.header-image').slice(1).addClass('header-image--on');
        };
    }


function switchHeader(el) {
        //console.log(el.outerHTML);
        if ( el == 'default' ) {
        var newFeaturedImage = $('.page__content').attr('data-image');
    } else {
    // what is the current header image? it is not necessarily the default one.
        var imageLink = document.createElement("a");
        if ( $('.header-image.header-image--on').css('background-image') != undefined ) {
        imageLink.href = $('.header-image.header-image--on').css('background-image').match(/url\([\'\"]*(.*?)[\'\"]*\)/)[1];
            var featuredImage = imageLink.pathname;
        } else {
            var featuredImage = $('.page__content').attr('data-image');
        }
        if ( el.hasAttribute('data-image') ) {
            var newFeaturedImage = el.getAttribute('data-image');
        }
    }  

        if (newFeaturedImage !== featuredImage) {
            featuredImage = newFeaturedImage;

                if ( $(window).width() < 1024 ) { featuredImage = featuredImage.replace(".", "_wide." )};

                // Change and animate featured image
                $('.header-image:not(.header-image--on)').css('background-image', 'url(' + featuredImage + ')');
                                
                $('.header-image:not(.header-image--on)').addClass('header-image--switch');
                
                    checkforDoubleHeader();

                    $('.header-image--switch').imagesLoaded({ background: true }, function() {
                    $('.header-image--on').removeClass('header-image--on');              
                    $('.header-image--switch').addClass('header-image--on');                                    
                    $('.header-image--switch').removeClass('header-image--switch');
                                    
                    checkforDoubleHeader();
                                                        });
                

        }

    }



//function defaultHeader(el) {
//    var pageImage = $('.page__content').attr('data-image');
//    // When scrolling two quickly, execution of this script can result in two image--on elements.
//                
//                // Remove one of the elements for proper execution of the rest of the function.
//                if ( $('.header-image--on').length > 1 ) {
//                    console.log('two .header-image--on detected, attempting to remove one');;
//                    $('.header-image').slice(1).removeClass('header-image--on');
//                }
//
//                if ( $('.header-image:not(.header-image--on)').length > 1 ) {
//                    console.log('two .header-image detected, attempting to remove one');;
//                    $('.header-image').slice(1).removeClass('header-image--on');
//                }
//    // Change and animate featured image
//
//    //if (el.hasAttribute('data-image')) { //if the attribute exists, the image should have changed already, so needs changing back.
//    $('.header-image:not(.header-image--on)').css('background-image', 'url(' + pageImage + ')');
//    $('.header-image:not(.header-image--on)').addClass('header-image--switch');
//
//    $('.header-image--switch').imagesLoaded({ background: true }, function() {
//        $('.header-image--on').removeClass('header-image--on');
//        $('.header-image--switch').addClass('header-image--on');
//        $('.header-image--switch').removeClass('header-image--switch');
//    });
//    //}    
//}

//Totall f-ed up logic here. But works. Need to redesign completely.

function isinview() {
    var windowHeight = $(window).height(),
        gridTop = windowHeight * .2,
        gridBottom = windowHeight * .3;
    $('.header-switch-onscroll').each(function() {
        var thisTop = $(this).offset().top - $(window).scrollTop();
        if (thisTop > gridTop && (thisTop) < gridBottom) {
            switchHeader(this);
            //return false;
        };
    });
}

$(document).ready(function() {
    isinview();
    $(window).on('scroll', function() {
        $.throttle(1000, isinview());
    });

    //$(document).on('mouseenter', '.header-switch-onhover', function (){
    //    var thisElement = this;
    //        //    switchHeader(thisElement);
    // });

    //$(".header-switch-onhover").on({
    //mouseenter: function() {
    //    var thisElement = this;
    //        //    switchHeader(thisElement);  
    //  
    //},
    //mouseleave: function() {
    //    defaultHeader(this);
//
    //}
    //});

});





//$(document).on("mouseover",".header-switch-onhover",function() {
//    switchHeader(this);
//});



//$(document).ready(function()  {
//    var elementCount = 0;
//    $('.header-switch').each( function() {
//    // Get gallery element
//    elementCount++;
//    var thisId = 'header-switch' + elementCount;
//    //var thisObject = thisId + 'div'
//    var thisObject = new Waypoint({
//        element: $(this),
//        offset: '10%',
//        handler: function(direction) {
//            alert('You have scrolled to a thing' + thisId + direction)
//        }
//
//});
//});
//});

$("div").on('click', '.showall', function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 400);
});


$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});
