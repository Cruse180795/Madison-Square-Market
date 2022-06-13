$(document).ready(() =>{
const $cart = $('#cart');
const $account = $('#account');
const $help = $('#help');
const $dropDownMenu = $('.dropdown-menu');


function handleCart(){
    $cart.on('click', () =>{
        $('#cartMenu').show();
    });
    hideDropDown();
}

function handleAccount(){
    $account.on('click', () =>{
        $('#accountMenu').show();
    });
    hideDropDown();
}

function handleHelp(){
    $help.on('click', () =>{
        $('#helpMenu').show();
    });
    hideDropDown();
}

function hideDropDown(){
    $dropDownMenu.on('mouseleave', () =>{
        $dropDownMenu.hide();
    })
}


handleCart();
handleAccount();
handleHelp();

})