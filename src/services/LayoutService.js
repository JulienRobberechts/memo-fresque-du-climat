import layoutSet1 from '@/data/layouts/set1.js';
import layoutSet2 from '@/data/layouts/set2.js';

export default {
  getLayoutByName(layoutName) {
    switch (layoutName) {
      case 'set1':
        return layoutSet1;
      case 'set2':
        return layoutSet2;
      default:
        throw new Error(`The layout name '${layoutName}' is not supported`);
    }
  },
};
