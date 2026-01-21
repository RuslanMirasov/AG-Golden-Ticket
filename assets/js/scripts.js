import { initNavigationMenu, fixHeaderOnScroll, applyIsMobilClass, initCopyClipboard } from './helpers.js';
import { initScrollToBlock } from './scrollToBlock.js';
import { initSliders } from './sliders.js';
import { initTabs, changeTab } from './tabs.js';
import { popup, setPopup } from './popup.js';

popup.init();
window.popup = popup;
window.setPopup = setPopup;
window.changeTab = changeTab;

applyIsMobilClass();
initSliders();
initNavigationMenu();
fixHeaderOnScroll();
initScrollToBlock();
initTabs();
initCopyClipboard();
