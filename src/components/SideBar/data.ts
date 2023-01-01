import CustomersUserIcon from "../../assets/icons/sidebar/customers-user-icon.svg";
import GuarantorsIcon from "../../assets/icons/sidebar/guarantors-icon.svg";
import LoansIcon from "../../assets/icons/sidebar/loans-icon.svg";
import DecisionModelIcon from "../../assets/icons/sidebar/decision-models-icon.svg";
import SavingsIcon from "../../assets/icons/sidebar/savings-icon.svg";
import LoanRequestIcon from "../../assets/icons/sidebar/loan-request-icon.svg";
import WhitelistIcon from "../../assets/icons/sidebar/whitelist-icon.svg";
import KarmaIcon from "../../assets/icons/sidebar/karma-icon.svg";

import OrganizationsIcon from "../../assets/icons/sidebar/organizations-icon.svg";
import LoanProductsIcon from "../../assets/icons/sidebar/loan-products-icon.svg";
import SavingsProductsIcon from "../../assets/icons/sidebar/savings-products-icon.svg";
import FeesAndChargesIcon from "../../assets/icons/sidebar/fees-and-charges-icon.svg";
import TransactionsIcon from "../../assets/icons/sidebar/transactions-icon.svg";
import ServicesIcon from "../../assets/icons/sidebar/services-icon.svg";
import ServiceAccountIcon from "../../assets/icons/sidebar/service-account-icon.svg";
import SettlementsIcon from "../../assets/icons/sidebar/settlements-icon.svg";
import ReportsIcon from "../../assets/icons/sidebar/reports-icon.svg";

import PreferencesIcon from "../../assets/icons/sidebar/preferences-icon.svg";
import FeesAndPricingIcon from "../../assets/icons/sidebar/fees-and-pricing-icon.svg";
import AuditLogsIcon from "../../assets/icons/sidebar/audit-logs-icon.svg";
import SystemsMessagesIcon from "../../assets/icons/sidebar/systems-messages-icon.svg";

const sideBarData = [
  {
    "section-name": "CUSTOMERS",
    contents: [
      {
        name: "Users",
        icon: CustomersUserIcon,
      },
      {
        name: "Guarantors",
        icon: GuarantorsIcon,
      },
      {
        name: "Loans",
        icon: LoansIcon,
      },
      {
        name: "Decision Models",
        icon: DecisionModelIcon,
      },
      {
        name: "Savings",
        icon: SavingsIcon,
      },
      {
        name: "Loan Requests",
        icon: LoanRequestIcon,
      },
      {
        name: "Whitelist",
        icon: WhitelistIcon,
      },
      {
        name: "Karma",
        icon: KarmaIcon,
      },
    ],
  },
  {
    "section-name": "BUSINESSES",
    contents: [
      {
        name: "Organizations",
        icon: OrganizationsIcon,
      },
      {
        name: "Loan Products",
        icon: LoanProductsIcon,
      },
      {
        name: "Savings Products",
        icon: SavingsProductsIcon,
      },
      {
        name: "Fees and Charges",
        icon: FeesAndChargesIcon,
      },
      {
        name: "Transactions",
        icon: TransactionsIcon,
      },
      {
        name: "Services",
        icon: ServicesIcon,
      },
      {
        name: "Service Account",
        icon: ServiceAccountIcon,
      },
      {
        name: "Settlements",
        icon: SettlementsIcon,
      },
      {
        name: "Reports",
        icon: ReportsIcon,
      },
    ],
  },
  {
    "section-name": "SETTINGS",
    contents: [
      {
        name: "Preferences",
        icon: PreferencesIcon,
      },
      {
        name: "Fees and Pricing",
        icon: FeesAndPricingIcon,
      },
      {
        name: "Audit Logs",
        icon: AuditLogsIcon,
      },
      {
        name: "Systems Messages",
        icon: SystemsMessagesIcon,
      },
    ],
  },
];

export default sideBarData;
