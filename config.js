/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	port: 8080,
	ipWhitelist: //[], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                        ["0.0.0.0", "127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",
        electronOptions: { fullscreen: true },
	modules: [
 		{
			module: 'MMM-Carousel',
			position: 'bottom_bar',
			config:
			{
				transitionInterval: 0,
				ignoreModules: [],
				mode: 'slides',
				showPageIndicators: true,
				showPageControls: true,
				slides:
				[
					['alert', 'clock', 'currentweather', 'internet-monitor', 'weatherforecast', 'MMM-OnScreenMenu'],
					['clock', 'currentweather', 'newsfeed', 'stocks', 'MMM-OnScreenMenu'],
					['clock', 'currentweather', 'twitControl'],
					['clock', 'currentweather', 'MMM-MirrorMirrorOnTheWall']
				],
				keyBindingsMode: "DEFAULT",
				keyBindings:
				{
					NextSlide: "ArrowRight",
					PrevSlide: "ArrowLeft",
					Slide0: "Home"
				}
			}
		},
		{
			module: "alert",
		},
		{
			module: 'MMM-MirrorMirrorOnTheWall',
			position: 'middle_center',
			config: {}
		},
		{
			module: 'stocks',
			position: 'upper_third',
			config:
			{
				stocks: 'SPAXX,FBALX,FIUIX,FSIIX,FSPTX,FSTMX',
				updateInterval: 30000
			}
		},
		{
			module: 'twitControl',
			position: 'upper_third',
			config:
			{
				maxNumTweets: 10,
				streamType: 'followings',
				api_keys:
				{
					consumer_key: 'ujDGMJ0B3QHn5fMjA8L8gMLzh',
					consumer_secret: 'k911dr99CCbacs1q0iTl2TxFH1eJeesJwanjQ9VZGIMWpXnx1T',
					access_token_key: '2957849533-JLAWEpsMpKz55gkMsSFvSpJG76eqwBNBmpth68O',
					access_token_secret: 'XTgL3L2uLOEWpFdgRlAeybh7adVEzhLvV1qQu5wWy4akE'
				}
			}
		},
		{
			module: 'MMM-KeyBindings',
			config:
			{
				enableNotifyServer: false,
				enableMousetrap: true
			}
		},
		{
			module: "updatenotification",
			position: "top_bar",
			disabled: true
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			disabled: true,
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			disabled: true
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				locationID: "5807540",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "f1d96e03d635bc8125d423b1c27dc261"
			}
		},
		{
			module: "weatherforecast",
			position: "upper_third",
			config: {
				locationID: "5807540",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "f1d96e03d635bc8125d423b1c27dc261"
			}
		},
		{
			module: "newsfeed",
			position: "middle_center",
			header: "Fake News",
			config: {
				feeds: [
					{
						title: "CNN",
						url: "http://rss.cnn.com/rss/cnn_topstories.rss"
					}
				       ],
				showSourceTitle: false,
				showPublishDate: true,
				showDescription: true,
				trunDescription: false,
				lengthDescription: 500,
				updateInterval: 20000
				}
		},
		{
			module: "newsfeed",
			position: "middle_center",
			header: "New York Times",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: false,
				showPublishDate: true,
				showDescription: true,
				truncDescrition: false,
				lengthDescription: 500,
				updateInterval: 20000
			}
		},
 		{
                        module: "newsfeed",
                        position: "middle_center",
                        header: "Reuters",
                        config: {
                                feeds: [
                                        {
                                                title: "Reuters Top News",
                                                url: "http://feeds.reuters.com/reuters/topNews"
                                        },
					{
						title: "Reuters US News",
						url: "http://feeds.reuters.com/Reuters/domesticNews"
					}
                                ],
                                showSourceTitle: true,
                                showPublishDate: true,
                                showDescription: true,
                                truncDescription: false,
                                lengthDescription: 500,
                                updateInterval: 20000
                        }
                },
                {
                        module: "newsfeed",
                        position: "middle_center",
                        header: "Wired",
                        config: {
                                feeds: [
                                        {
                                                title: "Wired",
                                                url: "https://www.wired.com/feed/rss"
                                        }
                                ],
                                showSourceTitle: false,
                                showPublishDate: true,
                                showDescription: true,
                                truncDescription: false,
                                lengthDescription: 500,
                                updateInterval: 20000
                        }
                },
		{
                        module: "newsfeed",
                        position: "middle_center",
			header: "Seattle Times",
                        config: {
                                feeds: [
                                        {
                                                title: "Seattle Times",
                                                url: "http://www.seattletimes.com/feed/"
                                        }
                                ],
                                showSourceTitle: false,
                                showPublishDate: true,
				showDescription: true,
				truncDescription: false,
				lengthDescription: 500,
				updateInterval: 20000
                        }
                },
		{
			module: "internet-monitor",
			position: "middle_center",
			config:{
                		type: '',
		                maxTime: 20000,
              			updateInterval: 0,
		                verbose: false,
		                displayStrength: true,
		                displaySpeed: true,
		                strengthIconSize: 80,
		                maxGaugeScale: 100,
				wifiSymbol:
				{
					size: 50,
					fullColor: '#3afc25',
                    			almostColor: '#ffff0c',
                   			halfColor: '#ff8c00',
	            			noneColor: '#ff1111'
				}
            		}
		},
		{
			module: 'MMM-Stock',
	    		position: "top_center",
    			config: {
    				companies: ['FBALX','FIUIX','FSIIX','FSPTX'], //(check each company ticker symbol in yahoo finance)
    			}
		},
		{
		        module: 'MMM-OnScreenMenu',
	    		position: 'bottom_right',
	                /* Valid positions: 'top_right', 'top_left', 'bottom_right', 'bottom_left' */
            		config: {
	                	touchMode: true,
         	  	        enableKeyboard: true,
                		menuItems: {
					    monitorOff: { title: "Turn Off Monitor", icon: "television", source: "SERVER" },
					    refresh: { title: "Refresh", icon: "recycle", source: "LOCAL" },
					    restart: { title: "Restart MagicMirror", icon: "refresh", source: "ALL" },
					    reboot: { title: "Reboot", icon: "spinner" },
					    shutdown: { title: "Shutdown", icon: "power-off" },
				 	    moduleHide1: { title: "Hide Internet Monitor", icon: "minus-square", name: "internet-monitor" },
					    moduleShow1: { title: "Show Internet Monitor", icon: "plus-square", name: "internet-monitor" },
					    toggleTouchMode: { title: "Toggle Touch Mode", icon: "eye-slash" },
					    changeMenuPosition_top_right: { title: "Move Menu to Top Right", icon: "arrows" }
				}
            		}
        	}

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
