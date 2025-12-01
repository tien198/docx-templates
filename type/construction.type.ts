export interface Construction {
  id?: string;
  documentNo: string;
  name: string;
  // dateOfSigning
  dateOfSigning: Date | string;
  budget: number;
  stringBudget: string;
  // constructionExecutionTime
  constructionExecutionTime: {
    startDate: Date | string;
    endDate: Date | string;
  };
  // existingConditionOfTheStructure
  existingConditionOfTheStructure: string;
  repairScope: string;
  decision: {
    number: string;
    date: Date | string;
  };
}
