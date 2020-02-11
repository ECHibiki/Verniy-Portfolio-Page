import * as ReactDOM from 'react-dom'; 
import * as React from 'react';
// split into seperate files

export var home_title = "Home";
export var project_title = "Projects";
	export var websites_title = "Websites";
	export var webtools_title = "Web-Tools";
	export var ai_title = "AI";
	export var games_title = "Games";
	export var misc_title = "Misc";
export var tools_title = "Toolsets";
export var education_title = "Education";


var toolset_card_style = "card p-2 m-2 toolset-card";

export var intro_text_dict: {[key: string]: JSX.Element} = 
{
	[home_title]: (
	<span>
	<h2>About</h2>
	<p>Welcome to verniy.ca! This is a simple portfolio website done in React using a tagging system. If you've wound up here chances are you've clicked a link on my resume. 
		Please use the navbar to view various details or look below at featured projects.</p>

	<hr/>
	<h2>Who Am I?</h2>
		<p>I am a web developer interested in working with back-end server technologies such as LAMP/LEMP, NodeJS and Python Flask. 
		I am also capable of working with modern client side tools such as React, jQuery and Bootstrap4. 
		I've moderated, modified and maintained variants on the forum model using a variety of programming languages, predominantly PHP and MySQL. 
		In my spare time I build up my software portfolio or am talking and playing games with international friends on Steam. 
		My paid work has been a position where I am in charge of company equipment for races and also the individual who creates race courses using technology such as GPS, Odometers and Wind Direction tools. 
		A component of this was also customer interaction. 
		I'm always growing my software skills. Currently learning React and Laravel within the framework of Test Driven Development.</p>
		<a href="https://github.com/kng-scherezade" style={{color:'red'}}>Academic Github Account</a><br />
		<a href="https://github.com/ECHibiki" style={{color:'red'}}>Personal Github Account</a>
	</span>),
	
	empty: (<span><p>This page doesn't appear to have anything on it.</p></span>),
	
	[project_title]: (<span><p>This is a list of all projects completed ranging from video games, websites to file management.</p></span>),
		[websites_title]: (<span><p>I've worked on many website related projects. These can be seen below</p></span>),
		[webtools_title]: (<span><p>Web-tools are what I view as userscripts, backup softare and anything else that acts to support a primary application.</p></span>),
		[ai_title]: (<span><p>Artificial intelligence from game AI all the way to academic AI in the form of Tensorflow.</p></span>),
		[games_title]: (<span><p>Various games worked on either in university or my own time.</p></span>),
		[misc_title]: (<span><p>Various ideas worked on but not of large significance or at the level of a releasable product.</p></span>),
	[tools_title]: (
		<span>
		<p>This is a fairly long list of toolsets and API I feel confident in, or confident enough to pick back up on a moments notice. Exceptions will be inprogress where I am in the process of writting projects to learn about the language or framework. This list is a more detailed version of my resume.</p>
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
			<li>ZLip</li>
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
	[education_title]: (<span><p>I hold a Batchelors of Computer Science(BCompSc) from Concordia University with a specialization in computer games. 
		In addition to experience with agile and test driven development practices, this degree gave me knowledge in graphics, 3D design software, web developement, P2P networking through Unity, software architectures and basic web developement. 
		Most of my education is done on my own time in the form of projects for learning new web frameworks and langauges.</p>
		<p>I also attended University of Toronto studying music for 2 years. There I  performed and honed musical skills for a potential performance career.</p></span>)
};

export interface CardObject {  type: number ; category: string[] ; title: string ;  subtitle:string ; content: JSX.Element ; image: string};

export var project_card_arr:CardObject[]=
	[
		{type:1, category: ["#Featured","#Websites",  "#NodeJS", "#Linux", "#Git", "#Fork", "#Nginx"], title: "KisSync", subtitle: "Video Synchronization over Network", 
			content: 
			(<ul>
				<li>
					<a className="list-item" href="https://github.com/ECHibiki/KisSync">GitHub Link</a>
					<ul>
						<li>A fork of streaming software, <a href="https://github.com/calzoneman/sync">Sync</a></li>
						<li>Enhanced chat features to allow for anonymous chatting</li>
						<li>Changes required examination of moderation tools, user interface and chat feature mechanisms on both front and back-end</li>
					</ul>
				</li>
			</ul>), image: "img/kissync.png"},	
			
		{type:1, category: ["#Featured", "#Websites",  "#PHP", "#Linux", "#Nginx", "#Twig", "#JQuery", "#Git", "#MySQL", "#Social"], title: "ViQa", subtitle: "Anonymous Chat Platform", 
			content: 
			(<ul>
			<li><a className="list-item" href="https://github.com/ECHibiki/ViQa">GitHub Link</a>
			<ul>
				<li>A forked version of <a href="https://github.com/vichan-devel/vichan">vichan software</a>.</li>
				<li>Worked to enhance moderation tools
					<ul>
					<li>Scrape webpages for proxies</li>
					<li>Utilize recaptcha alternative for less impact on good users</li>
					<li>Expand existing functionality for moderators</li>
					</ul>
				</li>
				<li>Security
					<ul>
					<li>Integration of a <a href="https://github.com/ECHibiki/captchouli">GoLang Captcha</a></li>
					</ul>
				</li>
				<li>Improved design
					<ul>
					<li>Bug fixes</li>
					<li>New Polling feature making use of chart.js</li>
					<li>CSS improvements from colleagues</li>
					<li>Implementing ideas from community</li>
					<li>Add more Javascript and JQuery scripts</li>
					</ul>
				</li>
			</ul></li>
		</ul>), image: "img/kissu.png"},	
			
		{type:1, category: ["#Websites",  "#Artanis", "#Scheme", "#Git", "#Social", "#Fork", "#Nginx"], title: "Kotatsu", subtitle: "Aquired Anonymous Chat Platform", 
				content: 
				(		
			<ul>
			<li><a className="list-item" href="https://github.com/ECHibiki/Kotatsu">GitHub Link</a>
				<ul>
					<li>An imageboard running on the experimental Artanis engine</li>
					<li>Acquired from individual unable to continue working
						<li>Upgraded from Artanis 0.3 to 0.4</li>
						<li>Problem solved to fix resulting errors</li>
						<li>Compensated for existing problems in software</li>
					</li>
				</ul></li>
		</ul>), image: "img/4taba2.png"},	
			
		{type:1, category: ["#Web-Tools",  "#PHP", "#MySQL", "#Cron", "#Twitter", "#Javascript"], title: "TweetQueue", subtitle: "A Web Service to Post to Twitter", 
				content: 
				(		
			<ul>
				<li><a className="list-item" href="https://github.com/ECHibiki/TweetQueue">GitHub Link</a>
					<ul>
						<li>Create a Tweet queue sending user created Tweets to Twitter over a period of time.</li>
					</ul>
				</li>
		</ul>), image: "img/tweetqueue.png"},
		
		{type:1, category: ["#Featured","#Websites",  "#PHP", "#MySQL", "#Social", "#Twitter", "#Javascript", "#Bootstrap"], title: "TwitterBoard", subtitle: "Designed Anonymous TwitterBoard", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href="http://boards.verniy.ca/">Sample Site</a>

			<ul>
				<li>A social media website that uses Twitter&#39;s API to create an anonymous version of Twitter.</li>
				<li>Using an offsite website to act as an intermediate users can post Tweets through a host's Twitter profile allowing them to share thoughts without having to setup an account.</li>
				<li> Essentially changes Twitter from it&#39;s intended pupose for using it as a blog into an independent meeting place.</li>
			</ul></li>
		</ul>), image: "img/twitterboard.png"},		
		
		{type:1, category: ["#Web-Tools",  "#Javascript", "#TypeScript", "#AJAX", "#UserScripts"], title: "4Free-FSE", subtitle: "Extention on an extention", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href="http://verniy.ca/scripts/4Free-FSE-Versions/4-Free-1.3.5.user.js">Code Text</a>

			<ul>
				<li>A set of enhancements on top of a popular extension adding features such as image hiding, character insertions, image retrieval from offsite stores, and word replacement filtering.</li>
				<ul><li> ES5 TypeScript with AJAX</li></ul>
			</ul>
			</li>
		</ul>), image: "img/4free.png"},	
		
		{type:1, category: ["#Featured", "#WebSites",  "#Javascript", "#AJAX", "#PHP", "#MySQL", "#JSON", "#Bootstrap"], title: "Ban Page Logger", subtitle: "Logging of Text-Data into SQL", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href="http://bans.verniy.ca/">Sample Site</a>
			<ul>
				<li>A scraper of a webpage displaynig information submitted by staff on who is getting banned for what.</li>
				<li>Javascript or PHP front-end generation</li>
				<li>Search form for finding paticular entries</li>
				<li>Data saved in both MySQL and JSON files</li>
				<li><strong>Contents are offensive</strong>(it's a public log of people prohibited from being on a website).</li>
			</ul>
			</li>
		</ul>), image: "img/bans.png"},	
		
		{type:1, category: [ "#Web-Tools", "#Github", "#Git", "#PHP"], title: "Github Backups", subtitle: "Backups done through Github API", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href="https://github.com/ECHibiki/Backup_bans.verniy.xyz">GitHub Link</a>
			<ul>
				<li>A script that runs a scan on all of the files in the project directory. 
				When it detects that a file has been altered it will use the github API to push commits onto a backup repository</li>
			</ul>
			</li>
		</ul>), image: "img/bans-backup.png"},
		
		{type:1, category: ["#Web-Tools", "#Python", "#Multithreading", "#Requests"], title: "Proxy-Tester", subtitle: "Is this Proxy Active?", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href='https://github.com/ECHibiki/Proxy-Tester'>GitHub Link</a>
				<ul>
					<li className="list-item">A tool to validate if a list of proxies are active</li>
					<li className="list-item">Display a basic speed test on those that are active</li>
				</ul></li>
		</ul>), image: ""},		
		
		{type:1, category: ["#Web-Tools", "#Python", "#Selenium", "#Phantomjs", "#SQLite", "#Pyinstaller"], title: "Regex-Webscraper", subtitle: "Retrieve Information from Webpages", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href='https://github.com/ECHibiki/Regex-Webscraper'>GitHub Link</a></li>
				<ul>
					<li className="list-item">A tool taking information specified by regex from webpages.</li>
					<li className="list-item">Uses basic mechanisms to rip content from pages, but if need be selenium can be used to execute and retrieve JS heavy pages.</li>
			</ul>
		</ul>	), image: ""},		
		
		{type:1, category: ["#Web-Tools", "#NodeJS", "#Javascript", "#TypeScript", "#IRC", "#YouTube-API", "#Bots"], title: "IRC-YouTube-Bot", subtitle: "Interpret YouTube URLs on Sageru IRC", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href="https://github.com/ECHibiki/IRC-YouTube-Bot">GitHub Link</a>
				<ul>
					<li>An IRC bot for Sageru that will read youtube links and output details such as title and author into the chat.</li>
					<li>Done in Typescript using NodeJS with <a href="https://github.com/martynsmith/node-irc">irc</a> and YouTube's <em>YouTube Data API (v3)</em>. </li>
				</ul>
			</li>
		</ul>	), image: "img/ircyoutube.png"},		
		
		{type:1, category: ["#Web-Tools", "#NodeJS", "#Javascript", "#TypeScript", "#Discord-API", "#Bots"], title: "Discord Bot", subtitle: "Audio and Text Functions for Discord API", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href="https://github.com/ECHibiki/Discord-Bot">GitHub Link</a>
				<ul>
					<li>Discord bot made for fun. Posts messages over time and plays in voice channels. </li>
					<li>Can either broadcast to all or specify one using either voice or chat</li>
				</ul></li>
		
		</ul>	), image: "img/discord.png"},		
		
		{type:1, category: ["#Web-Tools", "#Python", "#Bots"], title: "ViQa-Bot-Tools", subtitle: "A Bot for Automating ViQa Tasks", 
				content: 
				(		
			<ul>
			<li><a className="list-item" href="https://github.com/ECHibiki/ViQa-Bot-Tools">GitHub Link</a>
				<ul>
					<li>Used to enhance ViQa's functionality</li>
					<li>A simple bot for Vichan Software that allows for admins to create a bot to rebuild pages.</li>
					<li>Upon giving the bot a login to the moderator pages it can perform basic tasks.</li>
				</ul>
			</li>
			</ul>	), image: ""},		
		
		{type:1, category: ["#Web-Tools", "#Python", "#MySQLdb", "#Bots"], title: "ViQa-Site-Tracker", subtitle: "Retrieves Information from Websites", 
				content: 
				(		
			<ul>
				<li><a className="list-item" href="https://github.com/ECHibiki/ViQa-Site-Tracker">GitHub Link</a>
				<ul>
					<li>Used in ViQa</li>
					<li>The use for ViQa-Bot-Tools was to fill in a gap in this text scrapping bot's usage</li>
					<li>Given a list of vichan Imageboards with an API it will insert into the linked database any new posts on said imageboard list</li>
				</ul>
			</li>
			</ul>), image: "img/vsitetrack.png"},		
		
		{type:1, category: ["#Featured", "#AI", "#Python", "#Tensorflow", "#Flask", "#PyInstaller", "#PHP", "#MySQL", "#Bootstrap", 
		"#TypeScript", "#Userscripts", "#chart.js", "#plot.ly", "#Highcharts"],	title: "reCaptcha-solver", subtitle: "Captcha Solver for Weaker Google ReCaptcha", 
				content: 
				(		
				<ul>
					<li><a className="list-item" href="datasets.verniy.ca/">Sample Site</a>
						<ul>
							<li>A machine learning exercise to solve a weaker version of Google's reCaptcha</li>
							<li>Code hidden for security</li>
							<li>Uses a very noisy dataset of 17,000 images to get a passable accuracy to invalidate no javascript captchas</li>
							<li>Datasets, documentation and statistics are available. The application itself however, is not.</li>
							<li>Typescript driven userscripts to send solved data</li>
						</ul>
					</li>
				</ul>), image: "img/StreetSigns.png"},		
		
		{type:1, category: ["#AI", "#Python", "#Numpy", "#Text"],	title: "Naive Bayes Text Classification", subtitle: "Classify Text as Possitive or Negative", 
				content: 
				(		
			<ul>
			<li><a className="list-item" href="https://github.com/KNG-Scherezade/Naive-Bayes-Text-Classification">GitHub Link</a>
				<ul>
					<li>Course project to clasify product review data into positive and negative impressions</li>
					<li>Done to learn the basics of Naive Bayes</li>
					<li>Used stopword checking, grammar rules and other linguistic techniques to obtain a strong accuracy of 90% when evaluated</li>
				</ul>
			</li>
			</ul>), image: "img/naivebayes.png"},		
		
		{type:1, category: ["#AI", "#Games", "#C#", "#Unity"],	title: "AI Pathfinding", subtitle: "Unity Project Using Pathfinding Algorithms", 
				content: 
				(		
			<ul>
			<li><a className="list-item" href="https://github.com/KNG-Scherezade/AI-Pathfinding">GitHub Link</a>
				<ul>
					<li>Course work to make an AI follow a path in a 3D environment</li>
					<li>Done to learn various forms of search heuristics
					<ul><li>A*</li><li>Null Heuristic</li><li>Cluster Search</li></ul></li>
					<li>Made use of exsting unity libraries and packages to create a visualy and technically impressive assignment</li>
					<li>Graded 100% by a TA</li>
				</ul></li>
		</ul>), image: "img/pathfinding.png"},		
		
		{type:1, category: ["#Featured", "#Websites", "#Games", "#Javascript", "#TypeScript", "#Bootstrap", "#PhaserIO", "#SocketIO", "#Python", "#Flask"],	title: "Ultimate TicTacToe Online", subtitle: "A Full-Stack JavaScript Game", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href="http://verniy.ca/u-tictactoe">Sample Site</a>
				<ul>
					<li>Project to learn web and game frameworks for Typescript and Python</li>
					<li>Contains a logged global chat and a room chat for game info and player to player communication</li>
					<li>User connects to server and establishes a socket on a port</li>
					<li>On two connections to socket a game is formed</li>
					<li>Players battle with legal moves on a 9 by 9 board</li>
					<li>Game finishes on disconnects or player victory</li>
				</ul></li>
		</ul>
		), image: "img/uttt.png"},		
		
		{type:1, category: ["#Games", "#Unity", "#HRDP", "C#"],	title: "WindSway-HDRP", subtitle: "Experimentation with Unity HDRP", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href="https://github.com/ECHibiki/WindSway-HDRP">GitHub Link</a>
				<ul>
					<li>A personal project to learn more about the advanced features of Unity</li>
					<li>Implements shader graphs for grass and tree leaf swaying</li>
					<li>Implements Unity's High Definition Rendering Pipeline(HDRP) to get the most out of a simple environment</li>
				</ul>
			</li>
		</ul>
		
		), image: "img/hdrp.png"},		
		
		{type:1, category: ["#Games", "#Unity", "#Agile", "C#"],	title: "BattleCats", subtitle: "A Game in Unity", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href="https://github.com/KNG-Scherezade/BattleCats">GitHub Link</a>
				<ul>
					<li>Project in a group of 6 displaying skills with physics, level design, art and scripting in unity</li>
					<li>Uses controller to navigate through levels while inside a rolling yarn</li>
					<li><a href='http://pomoroad.com/battlecats/'>http://pomoroad.com/battlecats/</a></li>
					<li>Personally Focused on physics and all camera scripting</li>
					<li>Also focused on player station interactions</li>
					<li>Designed the controls</li>
					<li>Small focus on ingame UI</li>
					<li>Minor art modifications</li>
				</ul>
			</li>
		</ul>
		), image: "img/battlecats.png"},		
		
		{type:1, category: ["#Games", "#OpenGL", "#C++"],	title: "Procedural 3D World", subtitle: "An OpenGL Project for Procedural Generation", 
				content: 
				(		
			<ul>
				<li><a className="list-item" href="https://github.com/KNG-Scherezade/Comp371-Clone">GitHub Link</a>

					<ul>
						<li>Working with a group, the goal was to create a procedurally generated world users can walk through</li>
						<li>Procedural tree generation was a main component</li>
					</ul>
				</li>

			</ul>	
		), image: "img/c371.png"},		
		
		{type:1, category: ["#Misc", "#Java", "#Google-API"],	title: "Google-Drive-Permission-Set", subtitle: "Use Google API to Set Folder Permisions", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href='https://github.com/KNG-Scherezade/Google-Drive-Permission-Set'>GitHub Link</a>
				<ul>
					<li className="list-item">A tool to automate permission setting on Google Drive using a Java Swing console interface</li>
					<li className="list-item">Sets up to 1000 permissions using Batches through the Java Drive API</li>
				</ul>
			</li>
		</ul>
		), image: "img/gdps.png"},		
		
		{type:1, category: ["#Misc", "#Batch", "#Windows"],	title: "Windows-Folder-Creator", subtitle: "Batch script to Automate Folder Creation.", 
				content: 
				(		
		<ul>
			<li><a  className="list-item" href='https://github.com/KNG-Scherezade/Folder-Creation'>GitHub Link</a>
				<ul>
					<li className="list-item">Simple batch script designed for my father to create 300 folders(called class1, class2... classn)</li>
					<li className="list-item">Allows custom subdirectories</li>
				</ul>
			</li>
		</ul>
		), image: "img/folder-creator.png"},		
				
		{type:1, category: ["#Web-Tools", "#Misc", "#UserScript", "#Javascript"], title: "Miscellaneous UserScripts", subtitle: "Various Javascript Files of Misc Function", 
				content: 
				(		
		<ul>
			<li><a className="list-item" href="http://verniy.ca/scripts/misc">Script Folder</a>
			<ul>
				<li>Convinience enhancers for websites.</li>
				<li>Titles are relatively explanitory.</li>
				<li>Generally 5-20 line scripts</li>
			</ul>
			</li>
		</ul>), image: ""},		
		
		{type:1, category: ["#WebSites", "#Misc", "#Mobile", "#PHP", "#Android"],	title: "CrewForSail", subtitle: "My First Project", 
				content: 
				(		
			<ul>
				<li className="list-item">CrewForSail
					<ul>
						<li className="list-item">My first software project</li>
						<li className="list-item">An application designed to create a listing for sailors in need of crew</li>
						<li className="list-item">Android application and a website acompanying it</li>	
					</ul></li>
			</ul>
		), image: "img/crew4sail.png"},		
		
		{type:1, category: ["#Games", "#Misc", "#C++", "#SDL2", "#Boost", "ZLib"],	title: "Misc Games", subtitle: "Compilation of Dropped Projects", 
				content: 
				(		
		<ul>
		<li className="list-item">Various attempts at making commercial games</li>
			<ul>
				<li>SDL Games that were dropped because art didn't meet my standards</li>
				<li>C++ SDL2</li>
				<li>Boost Library</li>
				<li>ZLib{"(minizip)"}</li>
			</ul>
		</ul>
		), image: "img/misc-games.png"},
		
		{type:1, category: [ "#Featured", "#Websites", "#React", "#Javascript", "#TypeScript", "#WebPack"],	title: "Tagged Portfolio", subtitle: "Tag Driven Portfolio in React+TypeScript", 
				content: 
				(		
		<ul>
		<li className="list-item"><a href="https://github.com/ECHibiki/Verniy-Portfolio-Page">GitHub Link</a></li>
			<ul>
				<li>A React based portfolio with tagging systems</li>
				<li>Aims to show off what I know about software developement</li>
				<li>Cards designed to show projects with tags</li>
				<li>menu user interface</li>
				<li>TypeScript for better OOP</li>
			</ul>
		</ul>
		), image: "img/portfolio.png"},
		
	]; 
	
