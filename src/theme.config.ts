import * as ModernComponents from './themes/modern/components';
import * as ModernModules from './themes/modern/modules';

import * as ClassicComponents from './themes/classic/components';
import * as ClassicModules from './themes/classic/modules';


export const THEMES = {
  modern: {
    name: "Modern",
    components: ModernComponents,
    modules: ModernModules,
  },
  classic: {
    name: "Classic",
    components: ClassicComponents,
    modules: ClassicModules,
  }
};

export const ACTIVE_THEME = process.env.NEXT_PUBLIC_THEME || "modern";
export const THEME = THEMES[ACTIVE_THEME as keyof typeof THEMES];