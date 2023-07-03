import React from "react";
import { Table, Input } from 'antd';
import { Preorder, Configuration } from "../models";
import { useState, useEffect } from "react";
import DropDownList from "./DropDownList";

const columns = [
	{
		title: "ID",
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: "Рег.номер",
		dataIndex: 'regNumber',
		key: 'regNumber',
		render: (text) => <a href="">{text}</a>,
	},
	{
		title: "Статус",
		dataIndex: 'status',
		key: 'status',
		render: (text) => {
			if (text === "NEW") {
				return (<div className="status new">{text}</div>)
			} else if (text === "APPROVED") {
				return (<div className="status approved">{text}</div>)
			} else if (text === "IN_WORK") {
				return (<div className="status inWork">{text}</div>)
			} if (text === "COMPLETED") {
				return (<div className="status complited">{text}</div>)
			} else {
				return (<div className="status canceled">{text}</div>)
			}
		}
	},

];

function TableComponent() {
	const [countData, setCount] = useState(0);
	const [dataSource, setData] = useState();
	const [configurations, setCongigurations] = useState();
	useEffect(() => {
		// Preorder.find(21).then(result => console.log(result)) ПОИСК

		// 	Preorder.search({ preorderTypeId: 1, perPage: 5, page: 1 }).then(results => {dataSource = results.results; console.log(dataSource)})
		// }, [])
		Preorder.search().then(results => { setData(results.results); setCount(results.count) });
		Configuration.search().then(results => { setCongigurations(results.results);})
	}, []);
	return (
		<div className="tableComponent">
			<div className="filter">
				<div className="input" >
					<p>Рег. номер:</p>
					<Input placeholder="Начните ввод номера" onChange={(text) => {
						Preorder.search({ regNumber: text.target.value }).then(results => { setData(results.results); setCount(results.count); console.log(text.target.value) })
					}} />
				</div>
				<DropDownList title="Конфигурация:" data={configurations}/>
				<DropDownList title="Среда:" data={configurations}/>
				<DropDownList title="Статусы:" data={configurations}/>
			</div>
			<div className="countData">Найдено: {countData}</div>
			<Table dataSource={dataSource} columns={columns} />
		</div>
	);
}

export default TableComponent