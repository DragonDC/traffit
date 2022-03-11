import ReactPaginate from "react-paginate";

import { ChevronLeftIcon, ChevronRightIcon } from "components/Icons";

interface IProps {
  limit: number;
  total: number;
}

const Pagination = ({ limit, total }: IProps) => {
  const totalPages = total / limit;

  return (
    <ReactPaginate
      previousLabel={<ChevronLeftIcon />}
      nextLabel={<ChevronRightIcon />}
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      containerClassName={"pagination"}
      activeClassName={"active"}
      pageLinkClassName={"pageElement"}
      disableInitialCallback={true}
    />
  );
};

export { Pagination };
