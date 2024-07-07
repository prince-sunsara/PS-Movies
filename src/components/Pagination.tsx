import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
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

  const handleNext = () => {
    handlePagination(currentPage + 1);
    if (currentPage === 12) {
      handlePagination(1);
    }
  };

  const handlePrevious = () => {
    handlePagination(currentPage - 1);
    if (currentPage === 1) {
      handlePagination(12);
    }
  };

  return (
    <Pagination className="container mb-4">
      <PaginationContent className="flex flex-wrap">
        {/* previous button  */}
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={handlePrevious}
          />
        </PaginationItem>

        {/* pagination buttons */}
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

        {/* next button  */}
        <PaginationItem>
          <PaginationNext className="cursor-pointer" onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default PaginationCard;
