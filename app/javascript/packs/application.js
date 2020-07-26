// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");
require("@fortawesome/fontawesome-free");

// import "bootstrap";
import '@fortawesome/fontawesome-free/js/all';
import "../stylesheets/application";
import ClipboardJS from "clipboard";
import marked from 'marked';
import hljs from 'highlight.js';

// $(function () {
//     // if document is ready
//     alert("jQuery is ready.");
// });

document.addEventListener("DOMContentLoaded", function () {
    var clipboard = new ClipboardJS('#btn-copy');
    clipboard.on('success', function (e) {
        console.log(e);
    });
    clipboard.on('error', function (e) {
        console.log(e);
    });

    new ClipboardJS('#btn-copy-modal', {
        container: document.getElementById('modal_initial')
    });
}, false)

document.addEventListener("DOMContentLoaded", function () {
    marked.setOptions({
        langPrefix: '',
        highlight: function (code, lang) {
            return hljs.highlightAuto(code, [lang]).value
        }
    });
})

document.addEventListener("turbolinks:load", function () {
    $(window).on('load', function () {
        $('#modal_initial').modal();
    });
})

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)