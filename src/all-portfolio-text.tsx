import * as ReactDOM from 'react-dom'; 
import * as React from 'react';
// split into seperate files

export var home_title = "Home";
export var project_title = "Projects";
	export var websites_title = "Websites";
	export var webtools_title = "Web-Tools";
	export var webservices_title = "Web-Services";
	export var ai_title = "AI";
	export var games_title = "Games";
	export var misc_title = "Misc";
export var tools_title = "Toolsets";
export var education_title = "Education";


var toolset_card_style = "card p-2 m-2 toolset-card";

export var intro_text_dict: {[key: string]: JSX.Element} = 
{
	[home_title]: (<span><p>This is the root domain of Verniy.ca, please click on the links below to navigate</p>
	<a href="https://twitter.com/ECHibiki" style={{color:'red'}}>Twitter Account</a><br />
	<a href="https://github.com/ECHibiki" style={{color:'red'}}>Github Account</a>
	<hr/>
	<strong>Future?</strong>
	<ul>
		<li>eCommerce using Larvel, React, Bootstrap</li>
		<li>Video games of sorts[Unreal Engine or C++ probably]</li>
	</ul></span>),
	
	empty: (<span><p>This page doesn't appear to have anything on it.</p></span>),
	
	[project_title]: (<span><p>This is a list of all projects completed ranging from video games, websites to file management.</p><hr/></span>),
		[websites_title]: (<span><p>I've worked on 5 website related projects. These can be seen below</p></span>),
		[webtools_title]: (<span><p>As apposed to websites, web-tools are applications on the internet that perform tasks on various sevices.</p><hr/></span>),
		[webservices_title]: (<span><p>These services aim to enhance the backends of servers while remaining seperate from their core functions.</p><hr/></span>),
		[ai_title]: (<span><p>Artificial intelligence from game AI all the way to Tensorflow.</p><hr/></span>),
		[games_title]: (<span><p>Various games worked on in university.<hr/></p></span>),
		[misc_title]: (<span><p>Various ideas worked on but never completed.</p></span>),
	[tools_title]: (
		<span>
		<p>Unless otherwise noted, this is a fairly long list of toolsets and API I feel confident in, or confident enough to pick back up on a moments notice.</p>
	<div className="d-flex flex-row flex-wrap align-items-stretch">
		<span className={toolset_card_style}>PHP7.4<ul>
			<li>Object Oriented PHP</li>
			<li>Twitter and Github API</li>
			<li>PDOs</li>
			<li>Laravel(Inprogress)</li>
			<li>PHPUnit(Inprogress)</li>
		</ul></span>
		<span className={toolset_card_style}>Python3<ul>
			<li>Tensorflow</li>
			<li>Numpy</li>
			<li>PDOs</li>
			<li>Selenium</li>
			<li>FlaskSocketIO</li>
			<li>requests</li>
			<li>requests</li>
		</ul></span>
		<span className={toolset_card_style}>JavaScript<ul>
			<li>Typescript</li>
			<li>NodeJS</li>
			<li>React</li>
			<li>Phaser.io</li>
			<li>jQuery</li>
			<li>chart.js, highcharts, plot.ly</li>
			<li>Discord API</li>
			<li>IRC Library</li>
			<li>WebGL</li>
		</ul></span>
		<span className={toolset_card_style}>CSS<ul>
			<li>Boostrap4</li>
		</ul></span>
		<span className={toolset_card_style}>Java<ul>
			<li>Google API</li>
			<li>Android Studio</li>
			<li>Swing</li>
			<li>Gradle</li>
		</ul></span>
		<span className={toolset_card_style}>C#<ul>
			<li>Unity Game Design</li>
		</ul></span>
		<span className={toolset_card_style}>C++<ul>
			<li>OpenGL</li>
			<li>SDL2</li>
			<li>Select Boost Libraries</li>
		</ul></span>
		<span className={toolset_card_style}>Scheme/Guile<ul>
			<li>Basics and syntax</li>
			<li>Artanis Engine</li>
		</ul></span>
		<span className={toolset_card_style}>GoLang<ul>
			<li>Basics and syntax</li>
		</ul></span>
		<span className={toolset_card_style}>Database<ul>
			<li>MySQL</li>
			<li>SQLite3</li>
		</ul></span>	
		<span className={toolset_card_style}>Server Software<ul>
			<li>Linux</li>
			<li>Nginx</li>
			<li>Apache</li>
		</ul></span>
		<span className={toolset_card_style}>Version Control<ul>
			<li>Git</li>
			<li>GitHub</li>
			<li>Apache</li>
		</ul></span>
		<span className={toolset_card_style}>Development Practices<ul>
			<li>Agile</li>
			<li>Test Driven Development</li>
		</ul></span>
	</div>
		</span>
		),
	[education_title]: (<span><p>I am a batchelors of computer science graduate with a specialization in computer games. 
		This degree gave me knowledge in graphics, 3D design software, web developement, software architectures and basic web developement. 
		Most of my education is done on my own time in the form of projects for learning new web frameworks and langauges.</p>
		<p>I also atended University of Toronto studying music for 2 years. There I  performaned and honed musical skills for a potential performance career.</p></span>)
};

export interface CardObject {  type: number ; category: string[] ; title: string ;  subtitle:string ; content: JSX.Element ; image: string};

export var project_card_arr:CardObject[]=
	[
		{type:1, category: ["#a", "#Featured"], title: "asd", subtitle: "fff", content: <p>teast1<br/></p>, image: ""}
	]; 
	
export var all_text:JSX.Element = (
	<div>

	<h2>Web Software</h2>
	<h3>Web Streaming</h3>
		<ul>
			<li><a className="list-item" href="https://github.com/ECHibiki/KisSync">KisSync</a>
			<ul>
				<li>A fork of streaming software, <a href="https://github.com/calzoneman/sync">Sync</a></li>
				<li>Enhanced chat features to allow for anonymous chatting</li>
				<li>Resulted in a need to examine moderation tools, chat user interface and chat feature mechanisms</li>
				<li>Run on an Ubuntu VPN
			<ul>
				<li>NodeJS</li>
				<li>NPM</li>
				<li>Linux Systemd and Node Forever</li>
			</ul></li>
			</ul></li>
		</ul>
	<h3>Imageboards</h3>
		<ul>
			<li><a className="list-item" href="https://github.com/ECHibiki/ViQa">ViQa</a>

			<ul>
				<li>A forked version of <a href="https://github.com/vichan-devel/vichan">vichan software</a>.</li>
				<li>Worked to enhance moderation tools
					<ul>
					<li>Scrape webpages for proxies</li>
					<li>Utilize recaptcha alternative for less impact on good users</li>
					<li>Expand existing functionality for moderators</li>
					<li>Run on an Ubuntu VPN
					<ul>
					<li>PHP5 => PHP7.4</li>
					<li>Twig Framework</li>
					<li>GoLang</li>
					<li>Computer Vision Frameworks</li>
					</ul>
					</li>
					</ul>
				</li>
				<li>Improved design
					<ul>
					<li>Bug fixes</li>
					<li>New Polling feature making use of chart.js</li>
					<li>CSS improvements from coleages</li>
					<li>Implementing ideas from community</li>
					<li>Add more Javascript and JQuery scripts</li>
					</ul>
				</li>
			</ul></li>
		</ul>
		<ul>
		<li><a className="list-item" href="https://github.com/ECHibiki/Kotatsu">kotatsu</a>
			<ul>
				<li>An imageboard running on the experimental Artanis engine</li>
				<li>Acquired from individual unable to continue working
					<li>Upgraded from Artanis 0.3 to 0.4</li>
					<li>Problem solved to fix resulting errors</li>
					<li>Compensated for problems in Artanis Software and resulting memory leaks</li>
					<li>Run on an Ubuntu VPN</li>
					<ul>
						<li>Guile Scheme</li>
						<li>Artanis Engine</li>
						<li>Nginx Configuration</li>
					</ul>
				</li>
			</ul></li>
		</ul>

	<h3>Twitter Projects</h3>

		<ul>
			<li><a className="list-item" href="http://boards.verniy.ca/">Anonymous Twitter Board</a>

			<ul>
				<li>A social media website that uses Twitter&#39;s API to create an anonymous version of Twitter.</li>
				<li>Using an offsite website to act as an intermediate users can post Tweets through a host's Twitter profile allowing them to share thoughts without having to setup an account.</li>
				<li> Essentially changes Twitter from it&#39;s intended pupose for using it as a blog into an independent meeting place.</li>
				<ul><li>PHP</li><li>SQL</li><li>Twitter API</li><li>Vanila Javascript with AJAX</li><li>Bootstrap4</li><li>Cron</li></ul>
			</ul>
			</li>


			<li><a className="list-item" href="http://verniy.ca/erotweet/">TweetQueue</a>

			<ul>
				<li>Create a Tweet queue sending user created Tweets to Twitter over a period of time.</li>
				<li>Run on shared Hosting</li>
				<ul><li>PHP</li><li>SQL</li><li>Vanilla Javascript</li><li>Twitter API</li><li>Cron</li></ul>
			</ul>
			</li>
		</ul>
	<h3>4Chan Projects</h3>

		<ul>
			<li><a className="list-item" href="http://verniy.ca/scripts/4Free-FSE-Versions/4-Free-1.3.5.user.js">4Free-FSE</a>

			<ul>
				<li>A set of enhancements on top of a popular 4chan extension, 4chanX, that allow things such as image hiding, character insertions, image retrieval from offsite stores, and word replacement filtering.</li>
				<ul><li> ES5 TypeScript with AJAX</li></ul>
			</ul>
			</li>
			<li><a className="list-item" href="http://bans.verniy.ca">4Chan Ban Page Logger</a>
			<ul>
				<li>A scraper of a particular 4chan page with information submitted by the staff on who is getting banned for what.</li>
				<li>Run on shared Hosting</li>
				<ul><li>PHP</li><li>Vanilla Javascript with AJAX</li><li>SQL</li><li>Boostrap4</li><li>Cron</li></ul>
			</ul>
			</li>
			<li><a className="list-item" href="http://bans.verniy.ca">4Chan Ban Page Logger - Backup Logger</a>
			<ul>
				<li>Disabled</li>
				<li>A script that runs a scan on all of the files in the project directory. 
				When it detects that a file has been altered it will use the github API to push commits onto a backup repository</li>
				<li>Run on shared Hosting</li>
				<ul><li>PHP</li><li>Github API</li><li>Cron</li></ul>
			</ul>
			</li>
		</ul>


		<h3>Userscript Website Enhancements</h3>

		<p>The following scripts try to enhance certain features or remove negative ones of websites through userscripts.</p>

		<ul>
			<li><a className="list-item" href="http://verniy.ca/scripts/misc">Miscellaneous Scripts</a>
			<ul>
				<li>Convinience enhancers for websites. Read code to see functions, titles are relatively explanitory. Done in Vanilla Javascript.</li>
			</ul>
			</li>
			<li><a className="list-item" href="http://verniy.ca/scripts/misc/4Free-FSE-Individual/">4Free-FSE Individual packages</a>
			<ul>
				<li>Individual packages of 4F-FSE done in Javascript with AJAX.</li>
			</ul>
			</li>
		</ul>
	<h2>Web Tools</h2>
		<ul>
			<li><a className="list-item" href='https://github.com/ECHibiki/Proxy-Tester'>Proxy-Tester</a>(Prototype)</li>
				<ul>
					<li className="list-item">A tool to validate if a list of proxies wroks and display a basic speed test on those that do.</li>
					<li className="list-item">Protype made which may be expaned into full version in the future</li>
						<ul>
							<li>Python3</li>
							<li>Multithreading</li>
							<li>Requests library with SOCKS proxy</li>
						</ul>
				</ul>
		</ul>
		<ul>
			<li><a  className="list-item" href='https://github.com/ECHibiki/Regex-Webscraper'>Regex-Webscraper</a>(Prototype)</li>
				<ul>
					<li className="list-item">A webcrawler taking regex specified information from pages.</li>
					<li className="list-item">Prototype uses basic mechanisms to rip content from pages leaving crawling methods to be implemented.</li>
					<ul>
						<li>Python3</li>
						<li>SQLite</li>
						<li>Selenium webdriver with phantomjs</li>	
						<li>Pyinstaller</li>
						<li>Regex</li>
					</ul>
			</ul>
		</ul>	
	<h2>Helper Bots(Chat and Websites)</h2>
	<ul>
		<li><a className="list-item" href="https://github.com/ECHibiki/Verniy-Bot">IRC-YouTube-Bot</a>
			<ul>
				<li>An IRC bot for Sageru that will read youtube links and output details such as title and author into the chat.</li>
				<li>Done in Typescript using NodeJS with irc(https://github.com/martynsmith/node-irc) and YouTube's <em>YouTube Data API (v3)</em>. </li>
				<ul>
					<li> Node.js</li>
					<li> ES2017 TypeScript</li>
					<li>irc module</li>
					<li>YouTube Data API (v3)</li>
				</ul>
			</ul>
		</li>
		</ul>
		<ul>
		<li><a className="list-item" href="https://github.com/ECHibiki/Verniy-Bot">Verniy-Bot</a>
			<ul>
				<li>Discord bot made for fun. Posts messages over time and plays in voice channels. </li>
				<li>Can either broadcast to all or specify one using either voice or chat</li>
				<ul>
					<li> Node.js</li>
					<li> ES2017 TypeScript</li>
					<li> Discord.js(ffmpeg-binaries with node-opus) </li>
				</ul>
			</ul>
		</li>
		</ul>
		<ul>
		<li><a className="list-item" href="https://github.com/ECHibiki/ViQa-Bot-Tools">ViQa-Bot-Tools</a>
			<ul>
				<li>See entry kissu.moe for it's usage</li>
				<li>A simple bot for Vichan Software that allows for admins to create a bot to rebuild pages.</li>
				<li>Upon giving the bot a login to the moderator pages it can perform basic tasks.</li>
				<ul>
					<li>Python3</li>
				</ul>
			</ul>
		</li>
		</ul>
		<ul>
			<li><a className="list-item" href="https://github.com/ECHibiki/ViQa-Site-Tracker">ViQa-Site-Tracker</a>
			<ul>
				<li>See entry kissu.moe for it's usage</li>
				<li>The use for ViQa-Bot-Tools was to fill in a gap in this text scrapping bot's usage</li>
				<li>Given a list of typical vichan Imageboards with an API it will insert directly into a database new posts on a website</li>
				<ul>
					<li>Python3<ul><li>MySQLdb</li></ul></li>
					
				</ul>
			</ul>
		</li>
		</ul>

	<h2>Machine learning and AI Projects</h2>
		<ul>
			<li><a className="list-item" href="http://datasets.verniy.ca/">StreetSigns-et-al.-reCaptcha-solver</a>
				<ul>
					<li>A machine learning exercise to solve Google's reCaptcha</li>
					<li>Code hidden for internet security</li>
					<li>Uses a very noisy dataset of 17,000 images to get a passable accuracy to invalidate no javascript captchas</li>
					<li>Datasets, documentation and statistics are available. The application itself however, is not.</li>
					<ul>
						<li>Python Tensorflow API V1.8</li>
						<li>Python Flask</li>
						<li>PyInstaller</li>
						<li>PHP data aquisition</li>
						<li>Bootstrap4 styling</li>
						<li>SQL Data Storage</li>
						<li>Javascript chart libraries and Canvas chart libraries</li>
					<ul>
						<li>Highcharts</li>
						<li>plot.ly</li>
						<li>chart.js</li> 
						<li>(an edited)origami.js</li>
					</ul>
					<li>Typescript driven userscripts to send data and solve data</li>
				</ul>
			</ul></li>
			</ul>
			
			<ul>
			<li><a className="list-item" href="https://github.com/KNG-Scherezade/Naive-Bayes-Text-Classification">Naive Bayes Text Classification</a>
				<ul>
					<li>Course project to clasify text data into possitives and negatives</li>
					<li>Done to learn the basics of Naive Bayes</li>
					<li>Used stopword checking, grammar rules and other linguistic techniques to obtain a strong accuracy of 90% when evaluated</li>
					<ul>
						<li>Python3</li>
						<li>Python Numpy</li>
					</ul>
				</ul></li>
				</ul>
			<ul>
			<li><a className="list-item" href="https://github.com/KNG-Scherezade/AI-Pathfinding">Game AI Pathfinding</a>
				<ul>
					<li>Course project to make an AI follow pathing in a 3D environment</li>
					<li>Done to learn various forms of search heuristics
					<ul><li>A*</li><li>Null Heuristic</li><li>Cluster Search</li></ul></li>
					<li>Made use of exsting unity libraries and packages to create a vissualy and technically impressive assignment graded 100% by a TA</li>
					<ul>
						<li>Unity C#</li>
						<li>Linux and Windows Support</li>
					</ul>
				</ul></li>
		</ul>
	<h2>Games</h2>
		<ul>
			<li><a className="list-item" href="http://verniy.ca/u-tictactoe">Ultimate TicTacToe Online</a>
				<ul>
					<li>Server deactivated at the moment</li>
					<li>Project to learn web and game frameworks for Typescript and Python</li>
					<li>Contains a logged global chat and a room chat for game info and player to player communication</li>
					<li>Formerly on a VPS(screen and putty)</li>
					<li>User connects to server and establishes a socket on a port</li>
					<li>On two connections to socket a game is formed</li>
					<li>Players battle with legal moves on a 9 by 9 board</li>
					<li>Game finishes on disconnects or player victory</li>
					<ul>
						<li>Flask-SocketIO Python server</li>
						<li>SocketIO Javascript client</li>
						<li>Phaser3 Javascript Canvas client</li>
						<li>Typescript</li>					
						<li>Bootstrap4 styling</li>
					</ul>
				</ul></li>
		</ul>
			<ul>
			<li><a className="list-item" href="https://github.com/ECHibiki/WindSway-HDRP">WindSway-HDRP</a>
				<ul>
					<li>A personal project to learn more about the advanced features of Unity</li>
					<li>Implements shader graphs for grass and tree leaf swaying</li>
					<li>Implements Unity's High Definition Rendering Pipeline(HDRP) to get the most out of a simple environment</li>
					<ul>
						<li>Unity C#</li>
						<li>Unity HDRP</li>
				</ul>
			</ul></li>
		</ul>
		<ul>
			<li><a className="list-item" href="https://github.com/KNG-Scherezade/BattleCats">BattleCats</a>
				<ul>
					<li>A school game project displaying skills with physics, level design, art and scripting in unity</li>
					<li>Uses controller(PS4) to navigate through levels while inside a rolling yarn</li>
					<li><a href='http://pomoroad.com/battlecats/'>http://pomoroad.com/battlecats/</a></li>
					<ul>
						<li>Unity C#</li>
						<li>Focused on physics and all camera scripting</li>
						<li>Also focused on player station interactions</li>
						<li>Designed the controls</li>
						<li>Small focus on ingame UI</li>
						<li>Minor art modifications</li>
						<li>Implemented all online functionality(Work in progress)</li>
				</ul>
			</ul></li>

	<h2>3D Demos</h2>

	<ul>
		<li><a className="list-item" href="https://github.com/KNG-Scherezade/Comp371-Clone">Procedural Generation Project</a>

		<ul>
			<li>Working with a group, the goal was to create a procedurally generated world users can walk through.</li>
			<li>Procedural tree generation was a main component.</li>
			<ul>
				<li>C++</li>
				<li>OpenGL</li>
				<li>cmake</li>
			</ul>
		</ul>
		</li>

	</ul>	


		
	<h2>File Managment</h2>
		<ul>
			<li><a className="list-item" href='https://github.com/KNG-Scherezade/Google-Drive-Permission-Set'>Google-Drive-Permission-Set</a></li>
				<ul>
					<li className="list-item">A tool to automate permission setting on Google Drive using a Java Swing console interface</li>
					<li className="list-item">Sets up to 1000 permissions using Batches through the Java Drive API</li>
						<ul>
							<li>Java Swing</li>
							<li>Java Driven Google API</li>
							<li>Gradle</li>
						</ul>
				</ul>
			</ul>
			<ul>
			<li><a  className="list-item" href='https://github.com/KNG-Scherezade/Folder-Creation'>Folder-Creator</a></li>
				<ul>
					<li className="list-item">Simple batch script designed for my father to create 300 folders(called class1, class2... classn)</li>
					<li className="list-item">Allows custom subdirectories</li>
					<ul>
						<li>Batch</li>
					</ul>
			</ul>
		</ul>
		



	<h2>Miscellaneous Projects</h2>
	<p>Code is either available on request, hidden in the depths of my computer or listed on my other profile somewhere.</p>
	<ul>
		<li className="list-item">CrewForSail</li>
		<ul>
		<li className="list-item">An application designed to create a listing for sailors in need of crew</li>
			<ul>
				<li>Android Studio Java</li>
				<li>Apache PHP server</li>
				<li>Python file creation</li>
			</ul>
		</ul>
		<li className="list-item">Unlistable games</li>
		<ul>
		<li className="list-item">Various attempts at breaking into the pornographic games scene</li>
			<ul>
				<li>C++ SDL2</li>
				<li>Boost Library</li>
				<li>ZLib(minizip)</li>
			</ul>
		</ul>
		<li className="list-item">AnonIrc Clone<del>(6667)</del>(Currently no ports)
		<ul>
			<li>just a clone of someone else&#39;s project. Inactive due to lack of interest.</li>
		</ul>
		</li>
	</ul></ul></div>);
