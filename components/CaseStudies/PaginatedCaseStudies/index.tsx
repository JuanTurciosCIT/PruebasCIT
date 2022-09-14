import { useEffect, useState } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

import {
	CaseStudy,
	CaseStudyCategory,
} from 'utils/types/caseStudies.interface';
import { CaseStudiesCategory } from '../CaseStudyCategories';
import { CaseStudiesList } from './CaseStudiesList';

import styles from './paginatedCaseStudies.module.scss';

interface PaginatedCaseStudiesProps {
	caseStudies: CaseStudy[];
	caseStudiesCategories: CaseStudyCategory[];
}

export const PaginatedCaseStudies = ({
	caseStudies,
	caseStudiesCategories,
}: PaginatedCaseStudiesProps) => {
	const [currentItems, setCurrentItems] = useState<CaseStudy[]>(caseStudies);
	const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	const itemsPerPage = 4;
	useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(filteredCaseStudies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredCaseStudies.length / itemsPerPage));
  }, [itemOffset, filteredCaseStudies]);

	const filterCaseStudies = (category: CaseStudyCategory) => {
		window.scrollTo(0, 450);
		const filteredCaseStudies = caseStudies.filter((caseStudy) => {
			return caseStudy.idCategories.includes(category.id as string);
		});
		setFilteredCaseStudies(filteredCaseStudies);
	};

	const resetCaseStudies = () => {
		setFilteredCaseStudies(caseStudies);
	};

	const handlePageClick = (event: any) => {
		window.scrollTo(0, 450);
    const newOffset = (event.selected * itemsPerPage) % filteredCaseStudies.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

	return (
		<div className={styles.wrapper}>
			<CaseStudiesCategory
				categories={caseStudiesCategories}
				onFilter={filterCaseStudies}
				onReset={resetCaseStudies}
			/>
      <div className={styles.paginationContainer}>
				<CaseStudiesList caseStudies={currentItems} />
				{
					currentItems.length > 0 && (
						<ReactPaginate
							breakLabel='...'
							nextLabel='>'
							onPageChange={handlePageClick}
							pageCount={pageCount}
							pageRangeDisplayed={4}
							previousLabel='<'
							containerClassName={styles.pagination}
							activeClassName={styles.activeItem}
							pageClassName={styles.pageItem}
							nextClassName={styles.arrowControls}
							previousClassName={styles.arrowControls}
						/>
					)
				}
			</div>
			</div>
	);
};
