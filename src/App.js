import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


import { todos_add_todo , remove_todo ,remove_last_todo} from "./services/todos/actions";

import { count_increment } from "./services/count/actions";



class App extends Component {

	state = {
		prix: "",
		text: "",
		image:"",
		nombre: 1,
		description:"",
		status_edit_name: false,
		status_edit_price: false,

		index: 0,

		text_edit:"",
		
	}

















	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2 className="App-title">{ this.props.count.value }</h2>
					
						<div>
							<input class="champ"
								type='text'
								placeholder={"Name"}
								value={this.state.text}
								onChange={(e) => this.setState({ text: e.target.value })}
							/>
						</div>



						<div>
							<input class="champ"
								type='number' /* /!\ number */
								placeholder={"Price"}
								min={0}
								max={Number.MAX_SAFE_INTEGER}
								value={this.state.prix}
								onChange={(e) => {
								console.log("_input - ", e.target.value);
								console.log("_Prix - ", this.state.prix);
								this.setState({
									prix: e.target.value
								});
							}}
							/>
						</div>

						<div>
							<input class="champ"
								type="text"
								placeholder={"Image"}
								value={this.state.url}
								onChange={(e) => this.setState({ image: e.target.value })}
								/>
							</div>

						<div>
							<input class="champ"
								type="text"
								placeholder={"Description"}
								value={this.state.url}
								onChange={(e) => this.setState({ description: e.target.value })}
								/>
							</div>

						<div>
							<input class="champ"
								type='number' /* /!\ number */
								placeholder={"Quantity"}
								min={0}
								max={Number.MAX_SAFE_INTEGER}
								value={this.state.nombre}
								onChange={(e) => this.setState({ nombre: e.target.value })}
								
							
							/>
						</div>




					<button
			onClick={() => {
				this.state.index = this.state.index +1 ;
				this.props.todos_add_todo({ text: this.state.text , prix: this.state.prix , image: this.state.image, nombre: this.state.nombre, description: this.state.description ,index:this.state.index});
			  	


						}
				
					}
					>
					Add

					</button>




				

			<button
			onClick={() => {
				this.props.remove_last_todo();
				
				if (this.state.index > 0) {
					this.state.index = this.state.index -1 ;
				}



				}


			}
					>
						X
					</button>
											







				</header>
				<div>

					<ul>
						{
							this.props.todos.items.map((item) => {
								/*console.log("_key - ", item.id);*/
								return (
									<div> 
									
									


										<div class="wrapper"
											key={item.id}
											
										> 
												<div class="one_image">
												<img  src={item.image} width="300" height="200" alt="" id="uneImage" />
												</div>

											

											
												<div class="one">
												{
													item.status_edit_name ?
															<div  >
																	<input
																		type='text'
																		placeholder={"New Name"}
																		value={this.state.text_edit}
																		/*onChange={(e) => item.text = ({ text: e.target.value })} */
																		onChange={(e) => this.setState({ text_edit: e.target.value })}
																	/>

																	<button
																	onClick={() => {
																		item.text = this.state.text_edit ;
																		this.setState({ text_edit: "" });
																	 	item.status_edit_name = false; 
																	 	this.props.count_increment_isen()
																			}
																		}
																	>
																	Validate
																</button>
															</div>

														:

														"Name : " +  item.text 
												}
												</div>

												<div class="two_one">
												{ 
													item.status_edit_name ?


														" "

														:
														<button 
																onClick={() => {

																	console.log("_increment - ", this.props.count.value);
																	item.status_edit_name = true;
																	item.status_edit_price = false;
																	this.props.count_increment_isen();


																}}


															>
													Modify
												</button>
												}

													

											</div>


											<div class="one_two">

												{
													item.status_edit_price ?
															<div  >
																	<input
																		type='text'
																		placeholder={"New Price"}
																		value={this.state.text_edit}
																		/*onChange={(e) => item.text = ({ text: e.target.value })} */
																		onChange={(e) => this.setState({ text_edit: e.target.value })}
																	/>

																	<button
																	onClick={() => {
																		item.prix = parseInt(this.state.text_edit) ;
																		this.setState({ text_edit: "" });
																	 	item.status_edit_price = false; 
																	 	this.props.count_increment_isen();
																	 	console.log("--last",this.state.text_edit)
																			}
																		}
																	>
																	Validate
																</button>
															</div>

														:

														"Price : " +  item.prix +" €" 
												}

												
												
											</div>
												<div class="two_two">
												{ 
													item.status_edit_price ?


														" "

														:
														<button 
																onClick={() => {

																	console.log("_increment - ", this.props.count.value);
																	item.status_edit_price = true;
																	item.status_edit_name = false;
																	this.props.count_increment_isen()

																}}


															>
													Modify
												</button>
												}

													

											</div>














											<div class="one_three">

												Description : {item.description }
											</div>

											<div class="one_four">

												Quantity : {item.nombre }
											</div>



											<div class="one_five">


												<button
													onClick={() => {

														
														item.nombre= parseInt(item.nombre) +1 ;
														this.props.count_increment_isen();
														console.log("type of  - ",typeof item.nombre);

													}}


												>
													+
												</button>

												<button
													onClick={() => {

														
														item.nombre= parseInt(item.nombre) -1 ;
														if ( item.nombre < 0 ) {
															item.nombre = 0;
														}
														this.props.count_increment_isen();
														console.log("type of  - ",typeof item.nombre);

													}}


												>
													-
												</button>


															<button
																onClick={() => {
																	this.props.remove_todo({index:item.index});
																	console.log("__index element ",item.index);
																	console.log("__vrai index element ", this.props.todos.items);




																	
																	if (this.state.index > 0) {
																		this.state.index = this.state.index -1 ;
																	}



																	}


																}
																		>
																			X
																		</button>








												<div class="one_six">
													{" "}
												</div>


											</div>
																
											
 

											
										</div>
									</div>
								)
							})
						}
					</ul>
																	<button
													onClick={() => {

														this.props.count_increment_isen();
							

																	}}


																>
																	-
																</button>
																<div>
																-
																</div>




				</div>
			</div>
		);
	}

}


const mapStateToProps = (state) => ({
	todos: state.todos,
	count: state.count,
});


const mapActionsToProps = (dispatch) => ({
	todos_add_todo: bindActionCreators(todos_add_todo, dispatch),
	remove_todo: bindActionCreators(remove_todo, dispatch),
	remove_last_todo: bindActionCreators(remove_last_todo, dispatch),
	count_increment_isen: bindActionCreators(count_increment, dispatch),

});


export default connect(mapStateToProps, mapActionsToProps)( App );







