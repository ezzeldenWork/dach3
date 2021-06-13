$(document).ready(function () {
    $(".box-title").addClass("theme-color-item");

    $("#aside-color li").click(function () {
        // get colorTheme
        const colorTheme = $(this).attr("class");

        // set color theme in the items
        $(".theme-back-color-item, .theme-back-solid-color-item, .theme-color-item, .theme-border-color-item ").attr("data-color", colorTheme);

        // set color theme in the localStorage
        localStorage.setItem("colorTheme", colorTheme);
    });
    // get color from localStorage
    const localStorageTheme = localStorage.getItem("colorTheme");

    // if localStorage has item or not
    if (localStorage.getItem("colorTheme") != null) {
        $(".theme-back-color-item, .theme-back-solid-color-item, .theme-color-item, .theme-border-color-item").attr("data-color", localStorageTheme);
    } else {
        $(".theme-back-color-item, .theme-back-solid-color-item, .theme-color-item, .theme-border-color-item").attr("data-color", "blue-color");
    }










    $(document).click(function () {
        $(".nav-section .nav-box .nav-item .click-box ").siblings(".nav-sub-box").hide();
        $(".aside-box .aside-ul ul li").siblings().children("ul").slideUp();
    });

    // page lode
    $(window).on("load", function () {
        $(".loding-pag").fadeOut();
    });

    // toggle ul
    $(".aside-box .aside-ul ul li").click(function (e) {
        e.stopPropagation();
        $(this).children("ul").slideToggle();
        $(this).siblings().children("ul").slideUp();
    });
    $(".menu-box").click(function (e) {
        e.stopPropagation();
        $(this).toggleClass("not-full");
        $(".aside-box").toggleClass("mobile-width");
        $(".content-section").toggleClass("full-width");
    });
    $(".aside-box .aside-ul ul li ul li a.active").parent().parent().show();

    if($(window).width() < 772) {
        $(".aside-box").append("<div class='over-lay'></div>");
        $(".menu-box").click(function () {
            $(".aside-box").addClass("mobile-width");
             $(".over-lay").show();
        });
    }
    $(".over-lay").click(function () {
        $(".aside-box").removeClass("mobile-width");
         $(this).hide();
    });



    // nav box
    $(".nav-section .nav-box .nav-item ").click(function (navBox) {
        navBox.stopPropagation();
        $(this).children(".nav-sub-box").toggle();
        $(this).siblings().children(".nav-sub-box").hide();
    });

    // page title

    const pageTitle = $(".aside-box .aside-ul ul li a.active .ul-text , .nav-section .nav-box .nav-item .nav-sub-box ul.user-ul li a.active").text();
    $(".content-box .page-title").text(pageTitle);

    // modla content

    $(".card .link-box a.missing-buttom").click(function () {
        const imgSrc = $(this).parent().parent().parent().children(".card-img-top").attr("src"),
            nameLabel = $(this).parent().parent().parent().find(".card-title").text(),
            dateLable = $(this).parent().parent().parent().find(".missing-date").text(),
            oldText = $(this).parent().parent().parent().find(".old-lable-text").text(),
            healthStute = $(this).parent().parent().parent().find(".health-stute").text(),
            PragText = $(this).parent().parent().parent().find(".ditales-text").text(),
            cunteryLabel = $(this).parent().parent().parent().find(".cuntry-label").text();
        $(".modal-custom .item-img img").attr("src", imgSrc);
        $(".modal-custom #name-position").text(nameLabel);
        $(".modal-custom #missing-dateId").text(dateLable);
        $(".modal-custom #old-label").text(oldText);
        $(".modal-custom #health-stute").text(healthStute);
        $(".modal-custom #ditales-position").text(PragText);
        $(".modal-custom #cuntry-position").text(cunteryLabel);
    });

    $(".massege-show").click(function () {
        const massegeContent = $(this).siblings(".massege-text").text();
        console.log(massegeContent);
        $("#massegePop #ditales-position").text(massegeContent);
    });

    // select2
    $(".select-tow").select2();

    // show a new img 
    $("#admin_img").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#admin-pop-img").show().attr("href", e.target.result);
                $("#admin-new-img").show().attr("src", e.target.result);
            };
            reader.readAsDataURL(this.files[0]);
        }
    });
});
