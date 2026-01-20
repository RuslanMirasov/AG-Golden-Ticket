import { initNavigationMenu, fixHeaderOnScroll, applyIsMobilClass } from './helpers.js';
import { initScrollToBlock } from './scrollToBlock.js';
import { initSliders } from './sliders.js';

applyIsMobilClass();
initNavigationMenu();
fixHeaderOnScroll();
initScrollToBlock();
initSliders();
