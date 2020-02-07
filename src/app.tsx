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
		
	}

	// abstraction api between page controller class and menu bar
	class PageMenuInteractions{
		
	}

	class PageHeader extends React.Component{
		render(){
			return (<span><h1>Verniy&#39;s Projects</h1><h4>A portfolio done in React(In progress anyways)</h4></span>);
		}
	}
	class MenuBar extends React.Component{
		render(){
			return (<span><MenuHeader /><MenuHeader /><MenuHeader /><MenuHeader /></span>);
		}
	}
	class MenuHeader extends React.Component implements MenuInterface{
		render(){return (<span></span>);}
	}		
	class MenuItem extends React.Component implements MenuInterface{
		render(){return (<span></span>);}
	}
		
	class PageController extends React.Component<{}, { page: string }>{
		constructor(props:any){
			super(props);
			this.state = {page: location.hash};
			
			
		}
		
		//interact with Menu Bar and Page Menu Interactions
		swap_page(page_key:string){
			this.setState({page:page_key});
		}
		
		render(){
			const page = this.state.page;
			// if else defines the layout of tabs
			// internally factories create cards based on input parameters
			if (page == "" || page == "#home"){
				return (
					<span>
						<IntroBlurb page_key="home" />
					</span>
				);
			}
			else if(page == "#all"){
				return (
					<span>
						<IntroBlurb page_key="all"/>
						<hr/>
						{
							AllText.project_card_arr.map(card_dict=>(
									<ProjectCardFactory card_data={card_dict}/>
								)
							)
						}
					</span>
				);
			}
			else{
				var card_subset:AllText.CardObject[] = AllText.project_card_arr.filter(function(card){
					return card['category'].includes(page);
				});
				if(card_subset.length == 0){
					return (
						<span>
							<hr/>
							<IntroBlurb page_key="empty"/>
						</span>
					)
				}
				return (
					<span>
						<IntroBlurb page_key="test"/>
						<hr/>
						{
							card_subset.map(card_dict=>(
									<ProjectCardFactory card_data={card_dict}/>
								)
							)
						}
					</span>
				);
			}
		}						
	}
	class IntroBlurb extends React.Component<{ page_key: string }, { }>{
		constructor(props:any){
			super(props);
		}
		render(){
			return (<span>{AllText.intro_text_dict[this.props.page_key]}</span>);
		}
	}
	class ProjectCardFactory extends React.Component<{card_data: AllText.CardObject }, { }>{	
		render(){return (<span>{this.props.card_data['content']}</span>);}
	}
	class ProjectCard extends React.Component{
		render(){return (<span></span>);}
	}
	
	class Disposable extends React.Component{
		render(){return(AllText.all_text);}
	}
	
	ReactDOM.render(<span><MenuBar /><PageHeader /><PageController/></span>, document.getElementById('rctroot'));
	window.onhashchange = function(){location.reload();}