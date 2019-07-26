const pkg = require('../package.json');

import './utilities/viewportUnits';
import './containers/app.jsx';
import './styles/index.scss';

console.log('APP_NAME: ', pkg.name);
console.log('VERSION: ', pkg.version);