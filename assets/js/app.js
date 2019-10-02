// --------------------------------------------------
// APP.JS
// --------------------------------------------------
'use strict';
import $ from 'jquery';
import { SmoothScrollWithLinks } from './lib/ext/foundation.smoothScrollWithLinks';
import { Foundation } from './lib/foundation-explicit-pieces';
import { NavHandler } from './lib/nav-handler';
import { GMapsApi } from './lib/maps/gmaps-api';
import { CookieConsentHelper } from './lib/cookie-consent-helper';
import { PhotoSwipeApi } from './lib/gallery/photoswipe-api';

//
// Custom JS
// --------------------------------------------------
Foundation.plugin(SmoothScrollWithLinks, 'SmoothScrollWithLinks');

// initialize custom apis and mobile navigation
$(document).ready(function () {

  // init foundation js
  $(document).foundation();

  // map init - currently there's the limitation to have exactly ONE gmapsMap Element in the DOM
  new GMapsApi('${NYCMM_ENV_GMAPS_API_KEY}', 'gmapsMap');

  new NavHandler(
    'js--nav-dropdown',
    'js--nav-dropdown-icon',
    'js--nav-dropdown-item-section-dropdown',
    'js--nav-dropdown-item-section-dropdown-icon',
    'js--nav-container-sticky',
    'js--nav-back-to-top-container');

  new CookieConsentHelper('${NYCMM_ENV_GOOGLE_TRACKING_ID}');

  new PhotoSwipeApi('photoSwipe');

  // when using formspree
  // const contactMailParts = '${NYCMM_ENV_CONTACT_MAIL}'.split('@');
  // const mailAdress = contactMailParts[0];
  // const mailDomain = contactMailParts[1];

  // SiteHelper.setFormSpreeContactFormAction('formSpreeContactForm', mailAdress, mailDomain);
});
