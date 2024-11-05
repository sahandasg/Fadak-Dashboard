import React from 'react';
import SearchBar from "../../SearchBar";
import DataTable from "../../DataTable/DataTable";
import SelectBox from "../../SelectBox";

const status = ['done', 'pending', 'canceled']
const category = ['cat1', 'cat2', 'cat3']
const customer = ['person1', 'person2', 'person3', 'person4', 'person5', 'person6', 'person7', 'person8', 'person9'];
function Orders(props) {
    return (
        <div className="flex flex-wrap gap-4 justify-center mt-8 px-6 xl:w-[85%] w-full text-secondary">
            <div className="flex w-full sm:flex-nowrap flex-wrap gap-4">
                <div className="flex flex-col sm:w-[50%] w-full">
                    <SearchBar/>
                </div>
                <div className="flex justify-between gap-2 sm:w-[50%] w-full h-[37px]">
                    <div className="w-[33%] mt-auto"><SelectBox placeHolder={"Status"} data={status}/></div>
                    <div className="w-[33%] mt-auto"><SelectBox placeHolder={"Category"} data={category}/></div>
                    <div className="w-[33%] mt-auto"><SelectBox placeHolder={"Customer"} data={customer}/></div>
                </div>
            </div>
            <DataTable/>
        </div>
    );
}

export default Orders;