import React from "react";
import { Select } from "antd";


class DropDownList extends React.Component {

	render() {
		return (
			<div className="dropDownList">
				<p>{this.props.title}</p>
				<Select mode="multiple" className="select" options={this.props.options}/>
			</div>)
	}
}

export default DropDownList