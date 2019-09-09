import React from "react";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  let pages = [];

  for (let page = 1; page <= pagesCount; page++) {
    pages.push(page);
  }
  if (pagesCount === 1) return null;

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pages.map(page => (
          <li
            className={
              currentPage === page
                ? "page-item active pointer"
                : "page-item pointer "
            }
          >
            <a
              className="page-link"
              onClick={() => onPageChange(page)}
              href="##"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
