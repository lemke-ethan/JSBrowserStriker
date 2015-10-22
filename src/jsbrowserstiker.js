/*
*imported from pgwbrowser

BROWSER NAMES AND GROUPS
````````````````````````
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
```````````````````
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
*/

// user configurations - chrome example data
var UserConfiguration = {
	redirectURL:"http://www.amsoil.com/SecurityUpdate2015.aspx",
	blockedUserAgents: {
		// block all UAs that are chrome 30.x.x and older on all OSs
		chrome: {
			blockAllVersions: false,
			name: "chrome",
			group: null,
			fullVersion: null,
			majorVersion: 30,
			minorVersion: 0,
			os: null
		},
		// block all UAs that are on Android 4.3 and older Android OSs
		android: {
			blockAllVersions: false,
			name: null,
			group: null,
			fullVersion: null,
			majorVersion: null,
			minorVersion: null,
			os: {
				blockAllVersions: false,
				name: "android",
				group: "android",
				fullVersion: null,
				majorVersion: 4,
				minorVersion: 3
			}
		},
		// block all UAs that are firefox 24 and older on all OSs
		firefox: {
			blockAllVersions: false,
			name: "firefox",
			group: "firefox",
			fullVersion: null,
			majorVersion: 24,
			minorVersion: 0,
			os: null
		},
		// block all UAs that are IE10 and older on Windows 7
		msieWin7: {
			blockAllVersions: false,
			name: "internet explorer",
			group: "explorer",
			fullVersion: null,
			majorVersion: 10,
			minorVersion: 0,
			os: {
				blockAllVersions: false,
				name: "windows phone",
				group: "windows phone",
				fullVersion: null,
				majorVersion: 8,
				minorVersion: 0
			}
		},
		// block all UAs that are IE9 and older on all OSs
		msieWin7: {
			blockAllVersions: false,
			name: "internet explorer",
			group: "explorer",
			fullVersion: null,
			majorVersion: 9,
			minorVersion: 0,
			os: null
		},
		// block all UAs that are IEMobile 10 and older on windows phone 8.0
		iemobile8: {
			blockAllVersions: false,
			name: "iemobile",
			group: "explorer",
			fullVersion: null,
			majorVersion: 10,
			minorVersion: 0,
			os: {
				blockAllVersions: false,
				name: "windows phone",
				group: "windows phone",
				fullVersion: null,
				majorVersion: 8,
				minorVersion: 0
			}
		},
		// block all UAs that are IEMobile 9 and older on all OSs
		iemobile9: {
			blockAllVersions: false,
			name: "iemobile",
			group: "explorer",
			fullVersion: null,
			majorVersion: 9,
			minorVersion: 0,
			os: null
		},
		// block all UAs that are safari 6.9 and older on all OSs
		safari: {
			blockAllVersions: false,
			name: "safari",
			group: "safari",
			fullVersion: null,
			majorVersion: 6,
			minorVersion: 9,
			os: null
		},
		// block all UAs that are on all iOS 5.9 and older
		ios: {
			blockAllVersions: false,
			name: null,
			group: null,
			fullVersion: null,
			majorVersion: null,
			minorVersion: null,
			os: {
				blockAllVersions: false,
				name: null,
				group: "ios",
				fullVersion: null,
				majorVersion: 5,
				minorVersion: 9
			}
		},
		// (best attempt) block all UAs that are baidu on all OSs
		baidu: {
			blockAllVersions: true,
			name: "baidu",
			group: "baidu",
			fullVersion: null,
			majorVersion: null,
			minorVersion: null,
			os: null
		}
		// (best attempt) block all UAs that are java 7.25 and older on all OSs
		javaUserAgent: {
			blockAllVersions: false,
			name: "java",
			group: "java",
			fullVersion: null,
			majorVersion: 7,
			minorVersion: 25,
			os: null
		},
		// (best attempt) block all UAs that are opera 16.9 and older on all OSs
		opera: {
			blockAllVersions: false,
			name: "opera",
			group: "opera",
			fullVersion: null,
			majorVersion: 16,
			minorVersion: 9,
			os: null
		},
	},
};

// TODO add a cookie manager
var CookieManager = {};

// get browser data 
var clientUserAgent = $.pgwBrowser();

// conditions based on configurations
/* RULES
 -case insensative
 -blockAll == true then block all versions of the browser if it is the browser object
  or if it is the OS, block all OS versions
 -if just the browser is specified, block the browser and older versions for all OSs
 -if just the OS is specified, block all browsers with that OS and older versions
 -if the OS and the browser are specified, then block all browsers that version and older on just that OS
 -if full version exists then use this instead of major and minor
 -check for substring existance if does not match (browser/OS name)
 -block all browsers that have that version or ealier on the specified OS, if
  no OS is secified, then block for all OSs
 -if name is specified then do not use group, otherwise use the group
 -if the name and group are empty strings, and if the OS name and group are empty strings, then it is not a rule
*/

function redirectClient(url) {
	window.location.replace(url);
}

function validateUserAgentObject(userAgent) {
	// no names or group names, then we do not know what we are looking for
	if (userAgent.name == null && userAgent.group == null &&
		userAgent.os.name == null && userAgent.os.group == null) {
		return false;
	}
	return true;
}

function olderVersionString(older, newer) {
	var olderArray = older.split(".");
	var newerArray = newer.split(".");

	// is the version in the config smaller?
	for (var i = 0; i < olderArray.length; i++) {
		var olderNumber = parseInt(olderArray[i]);
		var newerNumber = parseInt(newerArray[i]);

		// make sure the older version is older or the same as the newer version
		// as soon as the older is older than the newer then the return true
		if (olderNumber < newerNumber) {
			return true;
		} else if (olderNumber != newerNumber) {
			return false;
		}
	}

	return result;
}

function olderVersion(fullVersion, major, minor, clientFullVersion, clientMajor, clientMinor, blockAllVersions) {
	// block all 
	if (blockAllVersions) {
		return true;
	}
	// if the fullVersion param is specified, then block the specified
	// UA version and older via the UA fullVersion param
	if (fullVersion != null && clientFullVersion != null) {
		return olderVersionString(fullVersion, clientFullVersion);
	}
	// block the specified UA version and older via the UA major/minor params
	if (major != null && 
		clientMajor != null &&
		userAgent.major < clientUserAgent.major) {
		return false;
	} else if (major === clientMajor && 
		minor != null && 
		clientMinor != null &&
		minor <== clientMinor) {
		return true;
	} else {
		return false;
	}
}

function userAgentsEquivalent(userAgent, clientUserAgent) {
	var ua = false;
	var os = false;
	// UA names
	if (userAgent.name != null && 
		clientUserAgent.name != null &&
		clientUserAgent.name.toLowerCase().indexOf(userAgent.name.toLowerCase()) != -1) {
		ua = olderVersion(
			userAgent.fullVersion, 
			userAgent.major, 
			userAgent.minor, 
			clientUserAgent.fullVersion, 
			clientUserAgent.major, 
			clientUserAgent.minor
		);
	} 
	// UA groups
	else if (userAgent.group != null && 
		clientUserAgent.group != null &&
		clientUserAgent.group.toLowerCase().indexOf(userAgent.group.toLowerCase()) != -1) {
		ua = olderVersion(
			userAgent.fullVersion, 
			userAgent.major, 
			userAgent.minor, 
			clientUserAgent.fullVersion, 
			clientUserAgent.major, 
			clientUserAgent.minor
		);
	} 

	// OS names
	if (userAgent.os.name != null && 
		clientUserAgent.os.name != null && 
		clientUserAgent.os.name.toLowerCase().indexOf(userAgent.os.name.toLowerCase()) != -1) {
		os = olderVersion(
			userAgent.fullVersion, 
			userAgent.major, 
			userAgent.minor, 
			clientUserAgent.fullVersion, 
			clientUserAgent.major, 
			clientUserAgent.minor
		);
	} 
	// OS groups
	else if (userAgent.os.group != null && 
		clientUserAgent.os.group != null && 
		clientUserAgent.os.group.toLowerCase().indexOf(userAgent.os.group.toLowerCase()) != -1) {
		os = olderVersion(
			userAgent.fullVersion, 
			userAgent.major, 
			userAgent.minor, 
			clientUserAgent.fullVersion, 
			clientUserAgent.major, 
			clientUserAgent.minor
		);
	}

	return (os || ua);
}

function validateBrowser() {
	// for each blocked UA object specified in the config object
	for (var userAgent in UserConfiguration.blockedUserAgents) {
		// check to see if the blocked UA object matches the config object
		if (UserConfiguration.blockedUserAgents.hasOwnProperty(userAgent)) {
			if (userAgentsEquivalent(userAgent, clientUserAgent)) {
				// redirect to url specified in the config
				redirectClient(UserConfiguration.redirectURL);
			}
		}
	}
}