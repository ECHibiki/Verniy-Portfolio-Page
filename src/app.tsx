import * as ReactDOM from 'react-dom'; 
import * as React from 'react';

import * as AllText from "./all-portfolio-text";

var error_image = "img/404.jpg"

	// use menu controller to decide the page
	// hovering over a menu header can create menu items
	// clicking on menu moves to new page
	// menu bar contains the menu headers and by extention items

	// Define menu object defaults
	interface MenuInterface{		
		render():JSX.Element;
		
		handleClick(event: React.MouseEvent<HTMLElement>):void;

	}

	// one way abstraction api to page controller class from menu interfaces
	// page controller must be called first
	// also activated by the hash tag listener 
	class PageControllerSingleton{
		
		private page_ctrl!:PageController;
		private static pmi_singleton_instance:PageControllerSingleton;
			
		private constructor(){}
		
		public setPageControl(page_control: PageController){
			this.page_ctrl = page_control;
		}
		
		public static get_pmi_singleton():PageControllerSingleton{
			if(this.pmi_singleton_instance == null){
				this.pmi_singleton_instance = new PageControllerSingleton();
			}
			return this.pmi_singleton_instance;
		}
		
		public swapPage(new_state:string){
			this.page_ctrl.swap_page(new_state);
		}
		
	}

	class MenuBar extends React.Component<{} & React.HTMLAttributes<HTMLDivElement>,{}>{
		
		constructor(props:any){
			super(props);
		}
		
		render(){
			return (
			<nav className="nav-bar-portfolio">
				<MenuHeader about={AllText.home_title} />
				<MenuDropDownHeader about={AllText.project_title} />
				<MenuHeader about={AllText.tools_title} />
				<MenuHeader about={AllText.education_title} />
			</nav>);
		}
	}
	class MenuDropDownHeader extends React.Component<{about:string} & React.HTMLAttributes<HTMLElement>, {is_hover:boolean}> implements MenuInterface{
		constructor(props:any){
			super(props);
			this.handleClick = this.handleClick.bind(this);
			this.handleMouseOver = this.handleMouseOver.bind(this);
			this.handleMouseOut = this.handleMouseOut.bind(this);
			this.state = {is_hover: false};
		}

		componentDidMount() {}
		componentWillUnmount(){};
		
		handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>){
			location.hash =  this.props.about;
		};
		
		handleMouseOver(event: React.MouseEvent<HTMLElement, MouseEvent>){
			this.setState({is_hover: true});
		};
		handleMouseOut(event: React.MouseEvent<HTMLElement, MouseEvent>){
			this.setState({is_hover: false});
		};
		
		render(){
			const hover = this.state.is_hover;
			const about = this.props.about;
			if(hover && about == AllText.project_title){
				return (
					<span onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
						<div className="menu-header" onClick={this.handleClick}>
							<a href={"#" + about}>{about}&nbsp;<em className="fa fa-caret-up"></em></a>
						</div>
						<div className="dropdown-portfolio d-flex flex-column">
							<MenuItem about={AllText.websites_title} />
							<MenuItem about={AllText.webtools_title} />
							<MenuItem about={AllText.webservices_title} />
							<MenuItem about={AllText.ai_title} />
							<MenuItem about={AllText.games_title} />
							<MenuItem about={AllText.misc_title} />
						</div>
					</span>);
			}
			else{
				return (
					<span onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
						<div className="menu-header" ><a href={"#" + about}>{about}&nbsp;<em className="fa fa-caret-down"></em></a></div>
					</span>);
			}
		}
	}	
	class MenuHeader extends React.Component<{about:string} & React.HTMLAttributes<HTMLElement>> implements MenuInterface{
		constructor(props:any){
			super(props);
			this.handleClick = this.handleClick.bind(this);
		}

		componentDidMount() {}
		componentWillUnmount(){};
		
		handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>){
			location.hash =  this.props.about;
		};
				
		render(){
			return (<span><div onClick={this.handleClick} className="menu-header"><a href={"#" + this.props.about}>{this.props.about}</a></div></span>); 
		}
	}	
	class MenuItem extends React.Component<{about:string} & React.HTMLAttributes<HTMLElement>, {}> implements MenuInterface{
		constructor(props:any){
			super(props);
			this.handleClick = this.handleClick.bind(this);
		}
		
		componentDidMount() {}
		componentWillUnmount(){};
		
		handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>):void{
			location.hash =  this.props.about;
		};
		
		render(){
			return (<span onClick={this.handleClick} className="menu-item" ><a href={"#" + this.props.about}>{this.props.about}</a></span>);
		}
	
	
	}
		
	class PageController extends React.Component<{} & React.HTMLAttributes<HTMLElement>, { page: string }> {
		constructor(props:any){
			super(props);
			this.state = {page: location.hash};
			PageControllerSingleton.get_pmi_singleton().setPageControl(this);
			
		}
		
		//interact with Menu Bar and Page Menu Interactions
		swap_page(page_key:string){
			this.setState({page:page_key});
		}
		
		render(){
			const page = this.state.page;
			// if else defines the layout of tabs
			// Either a home page with featured projects, Toolsets page(possibly branching down into more specific toolsets as needed) or an education page listing credentials
			// an all page with all projects, but a dropdown allows you to select pages with select projects
			// internally factories create cards based on input parameters
			if (page == "" || page.toUpperCase() == "#" + AllText.home_title.toUpperCase()){
				var featured_card_subset:AllText.CardObject[] = AllText.project_card_arr.filter(function(card){
					return card['category'].map(function(cat){return cat.toLowerCase()}).includes("#featured");
				});
				return (
					<div>
						<IntroBlurb page_key={AllText.home_title} />
						<hr/>
						<h2>Featured Projects</h2>
						<div className="cards-container d-flex flex-row flex-wrap align-items-stretch justify-content-between">
						{
							featured_card_subset.map(card_dict=>(
									<ProjectCardFactory card_data={card_dict}/>
								)
							)
						}
						</div>
					</div>
				);
			}		
			//tools section
			else if (page.toUpperCase() == "#" + AllText.tools_title.toUpperCase()){
				var card_subset:AllText.CardObject[] = AllText.project_card_arr.filter(function(card){
					return card['category'].map(function(cat){return cat.toLowerCase()}).includes("#" + AllText.tools_title.toLowerCase());
				});
				return (
					<div>
						<IntroBlurb page_key={AllText.tools_title} />
						<hr/>
						<div className="cards-container d-flex flex-row flex-wrap align-items-stretch justify-content-between">
						{
							card_subset.map(card_dict=>(
									<ProjectCardFactory card_data={card_dict}/>
								)
							)
						}
						</div>
					</div>
				);
			}		
			//education section
			else if (page.toUpperCase() == "#" + AllText.education_title.toUpperCase()){
				return (
					<div>
						<IntroBlurb page_key={AllText.education_title} />
					</div>
				);
			}
			else if(page == "#" + AllText.project_title){
				return (
					<div>
						<IntroBlurb page_key={page.substring(1)}/>
						<hr/>
						<div className="cards-container d-flex flex-row flex-wrap align-items-stretch justify-content-between">
						{
							AllText.project_card_arr.map(card_dict=>(
									<ProjectCardFactory card_data={card_dict}/>
								)
							)
						}
						</div>
					</div>
				);
			}
			else{
				var card_subset:AllText.CardObject[] = AllText.project_card_arr.filter(function(card){
					return card['category'].map(function(cat){return cat.toLowerCase()}).includes(page.toLowerCase());
				});

				// nothing here
				if(card_subset.length == 0){
					return (
						<div>
							<IntroBlurb page_key="empty"/>
						</div>
					)
				}
				else{
					return (
						<div>
							<IntroBlurb page_key={page.substring(1)}/>
							<div className="cards-container d-flex flex-row flex-wrap align-items-stretch justify-content-between">
							{
								card_subset.map(card_dict=>(
										<ProjectCardFactory card_data={card_dict}/>
									)
								)
							}
							</div>
						</div>
					);
				}
			}
		}						
	}
	class IntroBlurb extends React.Component<{ page_key: string }, { }>{
		constructor(props:any){
			super(props);
		}
		render(){
			return (<div>{AllText.intro_text_dict[this.props.page_key]}</div>);
		}
	}
	class PageHeader extends React.Component{
		render(){
			return (<div className="title-head"><h1>Verniy&#39;s Projects</h1><h4>A portfolio done in React</h4></div>);
		}
	}
	
	class ProjectCardSingleImage extends React.Component<{card_data: AllText.CardObject }, { img_error: boolean}>{
		constructor(props:any){
			super(props);
			this.handleOnError = this.handleOnError.bind(this);
			this.state = {img_error:false}
		}
			
		handleOnError():void{
			this.setState({img_error:true});
		}
		render(){
			
			const img_src = this.props.card_data['image']; 
			const category_string = this.props.card_data['category'].map((value) => {return (<a href={value}> {value} </a>)});
			const error_state = this.state.img_error;
			
			var img_el = (<a href={img_src}><img onError={this.handleOnError} src={img_src} className="card-img"/></a>);
			if(error_state){
				img_el = (<img src={error_image} className="card-img"/>);
			}	
			
			return (
				<span className="portfolio-card-holder">
					<div className="portfolio-card-title"><h4>{this.props.card_data['title']}</h4></div>
					<div className="portfolio-card-box card">
						<div className="portfolio-card-subtitle"><h5>{this.props.card_data['subtitle']}</h5></div>
						<div className="portfolio-card-img-container">{img_el}</div>
						<div className="portfolio-card-contents">{this.props.card_data['content']}</div>
						<div className="portfolio-card-categories">{category_string}</div>
					</div>
				</span>
			);
		}
	}
	class ProjectCardFactory extends React.Component<{card_data: AllText.CardObject }, {}>{
		constructor(props:any){
				super(props);
			}
			
		handleOnError():void{
			this.setState({img_error:true});
		}
		render(){
			if(this.props.card_data['type'] == 1){
				return (
					<ProjectCardSingleImage card_data={this.props.card_data} />
				);
			}
			else{
				return(<p>card error</p>);
			}
		}
	}
	class ProjectCard extends React.Component{
		render(){return (<span></span>);}
	}
	
	
	class Portfolio extends React.Component{
		render(){
			return(
			<div>
				<PageHeader />
				<span className="main-container card">
					<MenuBar />
					<hr/>
					<PageController />
				</span>
			</div>);
		}
	}
	
	ReactDOM.render(<Portfolio />, document.getElementById('rctroot'));
	window.onhashchange = function(){PageControllerSingleton.get_pmi_singleton().swapPage(location.hash)}