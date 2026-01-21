import { initNavigationMenu, fixHeaderOnScroll, applyIsMobilClass } from './helpers.js';
import { initScrollToBlock } from './scrollToBlock.js';
import { initSliders } from './sliders.js';
import { initTabs, changeTab } from './tabs.js';
import { popup } from './popup.js';

popup.init();
window.popup = popup;
window.changeTab = changeTab;

applyIsMobilClass();
initSliders();
initNavigationMenu();
fixHeaderOnScroll();
initScrollToBlock();
initTabs();
