import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { userDataArrType } from "../../UserDataTypes.types";
import ShowingDropdown from "../../../../assets/icons/showing-dropdown.svg";
import UserTable from "./UserTable";

type apiDataType = userDataArrType | [];
// type PaginateTypes = {
//   data: userDataArrType | [];
//   itemsPerPage: number;
//   currentItemHandler: Function;
// };
// // interface PaginatedItemsProps {
// //   itemsPerPage: number;
// // }

type eventPara = {
  selected: number;
};

type PaginateProps = {
  userDataArr: apiDataType;
};

function Paginate(props: PaginateProps) {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // const [currentItems, setCurrentItems] = useState<apiDataType>([]);
  // const itemsPerPage = 10;
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  // const currentItems = props.userDataArr.slice(itemOffset, endOffset); //?NOTE
  //   currentItemHandler(currentItems);
  // useEffect(() => {
  const endOffset = itemOffset + itemsPerPage;
  const x: any = props.userDataArr.slice(itemOffset, endOffset); //!FIXME
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // setCurrentItems(x);
  // }, [itemOffset, itemsPerPage, props.userDataArr]);

  const pageCount = Math.ceil(props.userDataArr.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: eventPara) => {
    const newOffset =
      (event.selected * itemsPerPage) % props.userDataArr.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      {/* <UserTable userDataArr={currentItems} /> */}
      <UserTable userDataArr={x} />
      <div className="dashboard-user-footer">
        <div className="showing-conatainer">
          <p>
            Showing
            <span>
              100
              <img
                src={ShowingDropdown}
                alt="showing-dropdown"
                onClick={() => setItemsPerPage(10)}
              />
            </span>
            out of 100
          </p>
        </div>
        <div className="pagination-container">
          {/* <Paginate
            data={props.userDataArr}
            currentItemHandler={currentItemHandler}
            itemsPerPage={10}
          /> */}
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            // renderOnZeroPageCount={null}
          />
        </div>
      </div>
      {/* <Items currentItems={currentItems} /> //?NOTE*/}
    </div>
  );
}
export default Paginate;
