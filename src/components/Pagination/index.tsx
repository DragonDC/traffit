import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { createSearchParams, useNavigate } from "react-router-dom";

import { ChevronLeftIcon, ChevronRightIcon } from "components/Icons";

interface IProps {
  limit: number;
  total: number;
}

const Pagination = ({ limit, total }: IProps) => {
  const totalPages = total / limit;
  const navigate = useNavigate();

  return (
    <PagesContainer>
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
        onPageChange={(data: { selected: number }) => {
          navigate({
            pathname: "",
            search: `?${createSearchParams({
              _page: (data.selected + 1).toString(),
            })}`,
          });
        }}
      />
    </PagesContainer>
  );
};

const PagesContainer = styled.div`
  display: flex;
  justify-content: center;

  .pagination {
    width: fit-content;
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;

    li a {
      outline: none;
    }

    .active a {
      background: lightsteelblue;
      color: black;
      outline: initial;
    }

    .previous {
      border: none;
    }

    .next {
      border: none;
    }

    li {
      margin: 0 0 0 -1px;
      word-break: keep-all;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border: none;
        width: 40px;
        height: 40px;
        cursor: pointer;
        font-size: 0.875em;
        color: black;

        &:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        &:focus {
          z-index: 1;
        }

        &:first-child {
          border-top-left-radius: 1px;
          border-bottom-left-radius: 1px;
        }

        &:last-child {
          border-top-right-radius: 1px;
          border-bottom-right-radius: 1px;
        }
      }
    }

    li:hover {
      box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.6);
      }};
    }
  }
`;

export { Pagination };
