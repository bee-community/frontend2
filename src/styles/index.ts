import type { SerializedStyles, Theme } from '@emotion/react';

import global from './global';

const styles = (theme: Theme): SerializedStyles | SerializedStyles[] => [global(theme)];

export default styles;
