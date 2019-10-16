/** This file contains references to the vendor libs we're using in this project.
 * This is used by webpack in the production build only*. 
 * A seperate bundle for vendor code is useful since it's unlikely to change as often
 * as the applications code. So all the libs we reference here will be written to vendor.js so 
 * they can be cached until one of them changes. So basically, this avoids customers having 
 * to download a huge js file anytime a line of code changes. They only have to download vendor.js
 * when a vendor lib changes, which is less frequently. Any files that aren't referenced here 
 * will be bundled into main.js for the production build.
 */

/* eslint-disable no-unused-vars */
import fetch from 'whatwg-fetch';
