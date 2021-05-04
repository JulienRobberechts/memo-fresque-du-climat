import layoutTest from '@/data/layouts/test.js';
import layoutSet1 from '@/data/layouts/set1.js';
import layoutSet2 from '@/data/layouts/set2.js';
import layoutSet3 from '@/data/layouts/set3.js';
import layoutSet4 from '@/data/layouts/set4.js';
import layoutFull from '@/data/layouts/full.js';
import layoutQuiz31 from '@/data/layouts/quiz31.js';
import layoutGiant2x6 from '@/data/layouts/giant-2x6.js';

export default {
  validLayouts() {
    return [
      'set1',
      'set2',
      'set3',
      'set4',
      'set5',
      'full',
      'quiz',
      'quiz31',
      'giant',
    ];
  },
  isValidLayout(layoutName) {
    return layoutName === '' || this.validLayouts().includes(layoutName);
  },
  defaultLayout() {
    return layoutFull;
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
      case 'set4':
        return layoutSet4;
      case 'set5':
      case 'full':
        return layoutFull;
      case 'quiz':
      case 'quiz31':
        return layoutQuiz31;
      case 'giant':
      case 'giant-2x6':
        return layoutGiant2x6;
      default:
        console.warn(`The layout name '${layoutName}' is not supported`);
        return this.defaultLayout();
      // throw new Error(`The layout name '${layoutName}' is not supported`);
    }
  },
};
