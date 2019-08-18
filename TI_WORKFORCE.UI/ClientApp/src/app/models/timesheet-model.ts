export class TimesheetModel {
    constructor(
        public Id: number,
        public ResourceId: number,
        public Date: string,
        public HoursWorked: number,
        public DateReported: string
    ) {

    }
}
