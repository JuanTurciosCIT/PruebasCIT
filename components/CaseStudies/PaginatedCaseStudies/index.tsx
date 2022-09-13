import { useState, useId } from 'react';
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
  const id = useId();
	const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);

	const filterCaseStudies = (category: CaseStudyCategory) => {
		const filteredCaseStudies = caseStudies.filter((caseStudy) => {
			return caseStudy.idCategories.includes(category.id as string);
		});
		setFilteredCaseStudies(filteredCaseStudies);
	};

	const resetCaseStudies = () => {
		setFilteredCaseStudies(caseStudies);
	};

	return (
		<div className={styles.wrapper}>
			<CaseStudiesCategory
				categories={caseStudiesCategories}
				onFilter={filterCaseStudies}
				onReset={resetCaseStudies}
			/>
      <CaseStudiesList caseStudies={filteredCaseStudies} />
		</div>
	);
};
