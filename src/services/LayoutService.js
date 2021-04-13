import layoutTest from '@/data/layouts/test.js';
import layoutSet1 from '@/data/layouts/set1.js';
import layoutSet2 from '@/data/layouts/set2.js';
import layoutSet3 from '@/data/layouts/set3.js';

export default {
  validLayouts() {
    return ['set1', 'set2', 'set3'];
  },
  isValidLayout(layoutName) {
    return layoutName === '' || this.validLayouts().includes(layoutName);
  },
  defaultLayout() {
    return layoutSet2;
  },
  getLayoutByName(layoutName) {
    switch (layoutName) {
      case '':
        return this.defaultLayout();
      case 'test':
        return layoutTest;
      case 'set1':
        return layoutSet1;
      case 'set2':
        return layoutSet2;
      case 'set3':
        return layoutSet3;
      default:
        console.warn(`The layout name '${layoutName}' is not supported`);
        return this.defaultLayout();
      // throw new Error(`The layout name '${layoutName}' is not supported`);
    }
  },
};
