$(document).ready(function () {
    $(".home-col-1, .home-col-2, .home-col-3").click(function(){
        window.location = $(this).find("a:first").attr("href");
        return false;
    });
    $( "#add-brand-button" ).click(function() {
        $( "#wrapper-for-form" ).show( "slow" );
        $('html, body').animate({
    scrollTop: $("#wrapper-for-form").offset().top
}, 1000);
    });
    
    $( "#add-product-button" ).click(function() {
        $( "#wrapper-for-form" ).show( "slow" );
        $('html, body').animate({
    scrollTop: $("#wrapper-for-form").offset().top
}, 1000);
    });
    
    $( "#add-sale-setting-button" ).click(function() {
        $( "#wrapper-for-form" ).show( "slow" );
        $('html, body').animate({
    scrollTop: $("#wrapper-for-form").offset().top
}, 1000);
    });
    
    $( "#add-branch-button" ).click(function() {
        $( "#wrapper-for-form-admin-branch" ).show( "slow" );
        $('html, body').animate({
    scrollTop: $("#wrapper-for-form-admin-branch").offset().top
}, 1000);
    });
    
    $( "#add-sale-button" ).click(function() {
        $( "#wrapper-for-form" ).show( "slow" );
        $('html, body').animate({
    scrollTop: $("#wrapper-for-form").offset().top
}, 1000);
    });
    
    $( "#add-notif-button" ).click(function() {
        $( "#wrapper-for-form-admin-notif" ).show( "slow" );
        $('html, body').animate({
    scrollTop: $("#wrapper-for-form-admin-notif").offset().top
}, 1000);
    });
    
    
    $( "#close-for-form" ).click(function() {
        $( "#wrapper-for-form" ).hide( "slow" );
        $('html, body').animate({
    scrollTop: $("#add-brand-button").offset().top
}, 1000);
    });
    
    $( "#close-for-form-sale-setting" ).click(function() {
        $( "#wrapper-for-form" ).hide( "slow" );
        $('html, body').animate({
    scrollTop: $("#add-sale-setting-button").offset().top
}, 1000);
    });
    
    
    $( "#close-for-form-admin-sale" ).click(function() {
        $( "#wrapper-for-form" ).hide( "slow" );
        $('html, body').animate({
    scrollTop: $("#add-sale-button").offset().top
}, 1000);
    });
    
    $( "#close-for-form-admin-branch" ).click(function() {
        $( "#wrapper-for-form-admin-branch" ).hide( "slow" );
        $('html, body').animate({
    scrollTop: $("#add-branch-button").offset().top
}, 1000);
    });
    
    $( "#close-for-form-admin-notif" ).click(function() {
        $( "#wrapper-for-form-admin-notif" ).hide( "slow" );
        $('html, body').animate({
    scrollTop: $("#add-notif-button").offset().top
}, 1000);
    });
    
    $( "#close-for-form-admin-product" ).click(function() {
        $( "#wrapper-for-form" ).hide( "slow" );
        $('html, body').animate({
    scrollTop: $("#add-product-button").offset().top
}, 1000);
    });
    
    
    
    $( "#collection-scroll" ).click(function() {
        $('html, body').animate({
    scrollTop: $("#collection-section").offset().top
}, 1000);
    });
    
    $( "#mall-scroll" ).click(function() {
        $('html, body').animate({
    scrollTop: $("#mall-section").offset().top
}, 1000);
    });
    
});