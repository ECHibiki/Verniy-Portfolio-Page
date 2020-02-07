import * as ReactDOM from 'react-dom'; 
import * as React from 'react';

import * as AllText from "./all-portfolio-text";

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
			<div>
				<MenuHeader about={AllText.home_title} />
				<MenuDropDownHeader about={AllText.project_title} />
				<MenuHeader about={AllText.tools_title} />
				<MenuHeader about={AllText.education_title} />
			</div>);
		}
	}
	class MenuDropDownHeader extends React.Component<{about:string} & React.HTMLAttributes<HTMLElement>, {is_hover:boolean}> implements MenuInterface{
		constructor(props:any){
			super(props);
			//this.handleClick = this.handleClick.bind(this);
			this.handleMouseOver = this.handleMouseOver.bind(this);
			this.handleMouseOut = this.handleMouseOut.bind(this);
			this.state = {is_hover: false};
		}

		componentDidMount() {}
		componentWillUnmount(){};
		
		handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>){};
		
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
						<span className="menu-header" onClick={this.handleClick}><a href={"#" + about}>{about}<em className="fa fa-caret-up"></em></a></span>
						<MenuItem about={AllText.websites_title} />
						<MenuItem about={AllText.webtools_title} />
						<MenuItem about={AllText.webservices_title} />
						<MenuItem about={AllText.ai_title} />
						<MenuItem about={AllText.games_title} />
						<MenuItem about={AllText.misc_title} />
					</span>);
			}
			else{
				return (
					<span onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
						<span className="menu-header" ><a href={"#" + about}>{about}<em className="fa fa-caret-down"></em></a></span>
					</span>);
			}
		}
	}	
	class MenuHeader extends React.Component<{about:string} & React.HTMLAttributes<HTMLElement>> implements MenuInterface{
		constructor(props:any){
			super(props);
		}

		componentDidMount() {}
		componentWillUnmount(){};
		
		handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>){};
				
		render(){
			return (<span><span className="menu-header"><a href={"#" + this.props.about}>{this.props.about}</a></span></span>); 
		}
	}	
	class MenuItem extends React.Component<{about:string} & React.HTMLAttributes<HTMLElement>, {}> implements MenuInterface{
		constructor(props:any){
			super(props);
		}
		
		componentDidMount() {}
		componentWillUnmount(){};
		
		handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>):void{};
		
		render(){
			return (<span className="menu-item"><a href={"#" + this.props.about}>{this.props.about}</a></span>);
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
			// internally factories create cards based on input parameters
			if (page == "" || page.toUpperCase() == "#" + AllText.home_title.toUpperCase()){
				var featured_card_subset:AllText.CardObject[] = AllText.project_card_arr.filter(function(card){
					return card['category'].includes("Featured");
				});
				return (
					<div>
						<IntroBlurb page_key={AllText.home_title} />
						<hr/>
						{
							featured_card_subset.map(card_dict=>(
									<ProjectCardFactory card_data={card_dict}/>
								)
							)
						}
					</div>
				);
			}
			else if(page.toUpperCase() == "#PROJECTS"){
				return (
					<div>
						<IntroBlurb page_key="all"/>
						<hr/>
						{
							AllText.project_card_arr.map(card_dict=>(
									<ProjectCardFactory card_data={card_dict}/>
								)
							)
						}
					</div>
				);
			}
			else{
				var card_subset:AllText.CardObject[] = AllText.project_card_arr.filter(function(card){
					return card['category'].includes(page);
				});
				if(card_subset.length == 0){
					return (
						<div>
							<hr/>
							<IntroBlurb page_key="empty"/>
						</div>
					)
				}
				else{
					return (
						<div>
							<IntroBlurb page_key="test"/>
							<hr/>
							{
								card_subset.map(card_dict=>(
										<ProjectCardFactory card_data={card_dict}/>
									)
								)
							}
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
			return (<div><h1>Verniy&#39;s Projects</h1><h4>A portfolio done in React(In progress anyways)</h4></div>);
		}
	}
	class ProjectCardFactory extends React.Component<{card_data: AllText.CardObject }, { }>{
		render(){return (<span>{this.props.card_data['content']}</span>);}
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