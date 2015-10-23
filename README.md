# JSBrowserStriker
This tool gathers information about the user agent and user agents OS (using [PgwBrowser](https://github.com/Pagawa/PgwBrowser/)) and redirects that user to specific page, depending on the conditions that were specified src/jsbrowserstriker.js file.

Explanation
-----------
Specify all of the JSBrowserStriker settings in the UserConfiguration object in the src/jsbrowserstriker.js file. You can specify the URL to redirect to and what users, with a specific user agent and/or operating system, to redirect.

* TODO *

'''javascript
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
}
'''

BROWSER NAMES AND GROUPS
-----------
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

OS NAMES AND GROUPS
-----------
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

Installation

1. Download the plugin by cliking the button **Download ZIP** on the right. 
2. Extract the contents of the ZIP file to your web project's folder.
3. Include the following JavaScript files in your header:
  a. src/jsbrowserstriker.js
  b. packages/pgwbrowser.js

Requirements
-----------
jQuery 1.0 or Zepto.js 1.0 (minimal version)

Contributing
---------
All pull requests must be submitted through GitHub.

* To make a pull request, please create a new branch for each feature or issue. *

ChangeLog
---------
* 2015-10-20 - init (Version 0.1) 