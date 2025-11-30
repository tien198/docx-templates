export interface Construction {
  id?: string;
  documentNo: string;
  name: string;
  dateOfSigning: Date | string;
  budget: number;
  stringBudget: string;
  constructionExecutionTime: {
    startDate: Date | string;
    endDate: Date | string;
  };
  existingConditionOfTheStructure: string;
  repairScope: string;
  decision: {
    decisionNumber: string;
    decisionDate: Date | string;
  };
}
