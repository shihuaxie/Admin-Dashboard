import React from 'react';
import {
    ColumnDirective,
    ColumnsDirective,
    GridComponent,
    Page,
    Selection,
    Toolbar,
    Edit,
    Sort,
    Filter,
    Inject,
    Search
} from "@syncfusion/ej2-react-grids";

import {customersData, customersGrid} from "../data/dummy";
import {Header} from "../components";

const Customers = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="page" title="Customers"/>
            <GridComponent
                dataSource={customersData}
                allowPaging
                allowSorting
                toolbar={['Delete']}
                editSettings={{allowDeleting:true, allowSorting:true}}
                width="auto"
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index)=>(
                        <ColumnDirective key={index} {...item}/>
                    ))}
                </ColumnsDirective>
                <Inject services={[Page,Selection, Toolbar, Edit, Sort, Filter]}/>
            </GridComponent>
        </div>
    );
};

export default Customers;