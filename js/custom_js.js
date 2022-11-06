// plus-minus buttons
//Grab all the trigger elements on the page

var offset = 0;
var timeout = 150;

//Listen for click events, but only on toggle triggers

function checkforDoubleHeader() {
        if ( $('.header-image--on').length > 1 ) {
          $('.header-image').slice(1).removeClass('header-image--on');
        }
    
        if ( $('.header-image:not(.header-image--on)').length > 1 ) {
          $('.header-image').slice(1).addClass('header-image--on');
        };
    }


function switchHeader(el) {
    var imageLink = document.createElement("a");

    if ( $('.header-image.header-image--on').css('background-image') != undefined ) {
        imageLink.href = $('.header-image.header-image--on').css('background-image').match(/url\([\'\"]*(.*?)[\'\"]*\)/)[1];
        var featuredImage = imageLink.pathname;
    } else {
        var featuredImage = $('.page__content').attr('data-image');
    }

    if ( el == 'default' ) {
        var newFeaturedImage = $('.page__content').attr('data-image');
    } else if ( el.hasAttribute('data-image') ) {
        var newFeaturedImage = el.getAttribute('data-image');
    }  
    
    if ( $(window).width() < 1024 ) { newFeaturedImage = newFeaturedImage.replace(".", "_wide." )};

        if (newFeaturedImage !== featuredImage) {

            featuredImage = newFeaturedImage;

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
    //switchHeader('default');
    isinview();
    $(window).on('scroll', function() {
        $.throttle(1000, isinview());
    });
});


window.addEventListener('click', (ev) => {
    const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
    const showAllTrigger = Array.from(document.querySelectorAll('[data-toggle="showall"], [data-toggle="hideall"]'));

    const elm = ev.target;
    if (triggers.includes(elm)) {
        const selector = elm.getAttribute('data-target');
        const parentSelector = elm.getAttribute('data-parent'); 
        const parent = document.querySelector(elm.getAttribute('data-parent')); 
        if (parent) {
            var childDivs = parent.getElementsByClassName('collapse');
        
            //console.log("childDivs:", childDivs)
    
            for( var i=0; i< childDivs.length; i++ )
            {
            var childSelector = "#" + childDivs[i].id;
            collapse(childSelector, 'hide');
            }
        }   

        collapse(selector, 'toggle');

        if (elm.classList.contains('minus')) {
            setTimeout(function() {
                elm.classList.remove('minus');
            }, timeout);

        } else {
            elm.classList.add('minus');
        }

    }
    // terrible logic, for selectively collapsing elements page
    if (showAllTrigger.includes(elm)) {
        var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();      
            var foundFirst =  true;

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

        // Keeps the undo icon in the same spot, after collapse/expand
        // But reset view to top
        setTimeout(function() {
             window.scrollTo(0, 0);
             var current = $(".hackmenu").offset().top
             window.scrollBy(0, (current - offset   ) );
         }, 300);   
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