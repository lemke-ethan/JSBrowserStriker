JSBrowserStriker
================
This tool gathers information about the user agent and user agent's OS (using [PgwBrowser](https://github.com/Pagawa/PgwBrowser/)) and redirects that user to specific page, depending on the conditions that were specified in the UserConfiguration object in the src/jsbrowserstriker.js file.

## Explanation
Specify all of the JSBrowserStriker settings in the UserConfiguration object in the src/jsbrowserstriker.js file. You can specify the URL to redirect to, the cookie information and what user agents will be redirected.

**Example**
```
    var UserConfiguration = {
    	redirectURL:"http://www.example.com/exampe.aspx",
    	blockedUserAgents: {
    		chrome: {
    			blockAllVersions: false,
    			name: "chrome",
    			group: null,
    			fullVersion: null,
    			majorVersion: 30,
    			minorVersion: 0,
    			os: {
    				blockAllVersions: false,
    				name: "android",
    				group: "android",
    				fullVersion: null,
    				majorVersion: 4,
    				minorVersion: 3
    			}
    		}
    	}
        cookieSettings: {
            // default name is "amsjsbrowserstriker"
            name: "amsjsbs",
            // the amount of seconds, from the time that the 
            // cookie is created, before the cookie expires
            // default expiration is 1 day = 86400 seconds
            expire: null,
            // default path is "/"
            path: null
        }
    }
```

### BROWSER NAMES AND GROUPS
    name: 'Chromium',          group: 'Chrome'
    name: 'Chrome Mobile',     group: 'Chrome'
    name: 'Chrome',            group: 'Chrome'
    name: 'Chrome for iOS',    group: 'Chrome'
    name: 'Android Browser',   group: 'Chrome'
    name: 'Firefox',           group: 'Firefox'
    name: 'Opera Mini',        group: 'Opera'
    name: 'Opera',             group: 'Opera'
    name: 'Opera',             group: 'Opera'
    name: 'IEMobile',          group: 'Explorer'
    name: 'Internet Explorer', group: 'Explorer'
    name: 'Internet Explorer', group: 'Explorer'
    name: 'Spartan',           group: 'Spartan'
	name: 'Safari',            group: 'Safari'

### OS NAMES AND GROUPS
    name: 'Windows 2000',           group: 'Windows'
    name: 'Windows XP',             group: 'Windows'
    name: 'Windows Vista',          group: 'Windows'
    name: 'Windows 7',              group: 'Windows'
    name: 'Windows 8',              group: 'Windows'
    name: 'Windows 8.1',            group: 'Windows'
    name: 'Windows 10',             group: 'Windows'
    name: 'Windows Phone',          group: 'Windows Phone'
    name: 'Windows Phone',          group: 'Windows Phone'
    name: 'Windows',                group: 'Windows'
    name: 'Chrome OS',              group: 'Chrome OS'
    name: 'Android',                group: 'Android'
    name: 'iPad',                   group: 'iOS'
    name: 'iPod',                   group: 'iOS'
    name: 'iPhone',                 group: 'iOS'
    name: 'Mac OS X Yosemite',      group: 'Mac OS'
    name: 'Mac OS X Mavericks',     group: 'Mac OS'
    name: 'Mac OS X Mountain Lion', group: 'Mac OS'
    name: 'Mac OS X Lion',          group: 'Mac OS'
    name: 'Mac OS X Snow Leopard',  group: 'Mac OS'
    name: 'Mac OS X Leopard',       group: 'Mac OS'
    name: 'Mac OS X Tiger',         group: 'Mac OS'
    name: 'Mac OS X Panther',       group: 'Mac OS'
    name: 'Mac OS X Jaguar',        group: 'Mac OS'
    name: 'Mac OS X Puma',          group: 'Mac OS'
    name: 'Mac OS X Cheetah',       group: 'Mac OS'
    name: 'Mac OS',                 group: 'Mac OS'
    name: 'Ubuntu',                 group: 'Linux'
    name: 'Debian',                 group: 'Linux'
    name: 'Gentoo',                 group: 'Linux'
    name: 'Linux',                  group: 'Linux'
    name: 'BlackBerry',             group: 'BlackBerry'

## Installation
1. Download the plugin by cliking the button **Download ZIP** on the right.
2. Extract the contents of the ZIP file to your web project's folder.
3. Include the following JavaScript files in your header.
    a. First packages/cookie.js
    b. Then packages/pgwbrowser.js
    c. And finally, src/jsbrowserstriker.js
4. Call the `validateBrowser()` function and pass it the return value of `pgwBrowser()`.

## Requirements
jQuery 1.0 or Zepto.js 1.0 (minimal version)

## Contributing
All pull requests must be submitted through GitHub.

*To make a pull request, please create a new branch for each feature or issue.*

## ChangeLog
* 2015-10-20 - init (Version 0.1) 