/*!
 * TR
 * https://github.com/jihao/js_for_fun
 *
 * Copyright 2012, Ji Hao
 * Licensed under the MIT.
 * http://en.wikipedia.org/wiki/MIT_License
 *
 * Date: 2012-02-22
 */

/*
* create TR document fragment
*/
var createTRFragment = function(dom) {
    fragment = dom.createDocumentFragment();

    trField = dom.createElement('input');
    trText = dom.createTextNode('TR Number:');
    tipField = dom.createElement('span');
    tipField.setAttribute('id', 'info');

    trField.setAttribute('type', 'text');
    trField.setAttribute('id', 'trNumber');
    attactEvent(trField);

    fragment.appendChild(trText);
    fragment.appendChild(trField);
    fragment.appendChild(tipField);
    return fragment;
}; 

/*
* attach event handling for TR field
*/
var attactEvent = function(trField) {

    trField.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            trNumber = event.target.value;
            console.log(trNumber);
            tipField = event.target.nextSibling;
            if (trNumber.match('^[A-Z]{2}[0-9]{5}$')) {

/* if (event.target.firstChild != null) {
   tipField.removeChild(tipField.firstChild);
}; */
                window.myWindow.close();
                window.open('https://mhweb.ericsson.se/mhweb/servlet/tredit?eriref=' + trNumber, '_blank', '');
            }
            else {
                tipField.appendChild(tipField.ownerDocument.createTextNode('Please match ^[A-Z]{2}[0-9]{5}$'));
            }
        }

    }, false);
};

 /*
 * open TR window
 */
(function openWindow() {
    //open a new window on the fly
    myWindow = window.open('', '', 'width=200,height=100,location=0,menubar=0,status=0,titlebar=0,toolbar=0');
    //create html on the fly
    dom = myWindow.document;
    body = dom.getElementsByTagName('body');
    trFragment = createTRFragment(dom);

    body.item(0).appendChild(trFragment);

    myWindow.focus();
    window.myWindow = myWindow;
    return myWindow;
})();
