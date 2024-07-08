import React from "react";

const Paginator = ({
  hasNextPage,
  isFetchingNextPage,
  currentPage,
  setCurrentPage,
  fetchNextPage,
}) => {
  return (
    <>
      <button
        className="rounded-lg rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] bg-primary-color px-4 py-1.5 text-[10px] text-white hover:bg-secondary-light-color focus:outline-none tablet:px-8 tablet:py-3 tablet:text-sm desktop:px-11 desktop:py-4 desktop:text-base"
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
          fetchNextPage({ pageParam: currentPage + 1 });
        }}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
      </button>
    </>
  );
};

export default Paginator;
