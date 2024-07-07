import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "./ui/pagination";

type PaginationPropsType = {
  posts: number;
  length: number;
  handlePagination: (pageNumber: number) => void;
  currentPage: number;
};

const PaginationCard = ({
  posts,
  length,
  handlePagination,
  currentPage,
}: PaginationPropsType) => {
  let paginationNumber = [];
  for (let i = 1; i <= Math.ceil(length / posts); i++) {
    paginationNumber.push(i);
  }
  return (
    <Pagination className="container mb-4">
      <PaginationContent className="flex flex-wrap">
        {paginationNumber.map((page) => (
          <PaginationItem
            key={page}
            className={`cursor-pointer ${
              page === currentPage ? "bg-white text-black rounded-md" : ""
            }  `}
            onClick={() => handlePagination(page)}
          >
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};
export default PaginationCard;
