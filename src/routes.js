import { EMPLOYEE, ORDER, POSITION, REPORT } from "./utils/routes";

import Employee from './pages/Employee/Employee'
import Position from './pages/Position/Position'
import Order from './pages/Order/Order'
import Report from './pages/Report/Report'

export const publicRoutes = [
  {
    path: EMPLOYEE,
    Component: Employee
  },
  {
    path: POSITION,
    Component: Position
  },
  {
    path: ORDER,
    Component: Order
  },
  {
    path: REPORT,
    Component: Report
  }

]