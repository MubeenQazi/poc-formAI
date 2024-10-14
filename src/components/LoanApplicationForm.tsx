'use client';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type FormData = {
    companyName: string;
    businessStructure: string;
    industry: string;
    location: string;
    contactInfo: string; 

    // Financial Information
    businessRevenue: number;
    netProfit: number;
    assets: string;
    liabilities: string;
    bankAccounts: string;

    // Ownership and Management
    ownerInfo: string;
    managementTeam: string;

    // Loan Information
    loanAmount: number;
    loanPurpose: string;
    repaymentPlan: string;

    // Business Operations
    yearsInBusiness: number;
    numberOfEmployees: number;
    keyCustomers: string;

    // Compliance and Legal
    licenses: string,
    legalIssues: string,
  
    // Additional Information
    financialProjections: string,
    businessPlan: string,
    references: string,
};

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    // Company Information
    companyName: Yup.string().required('Company Name is required'),
    businessStructure: Yup.string().required('Business Structure is required'),
    industry: Yup.string().required('Industry is required'),
    location: Yup.string().required('Location is required'),
    contactInfo: Yup.string().required('Contact Information is required'),
  
    // Financial Information
    businessRevenue: Yup.number().typeError('Amount must be a number')
    .required("Business Revenue is required.")
    .min(0, "Too little")
    .max(5000, 'Very costly!'),
    netProfit: Yup.number().typeError('Amount must be a number')
    .required("Net Profit is required.")
    .min(0, "Too little")
    .max(5000, 'Very costly!'),
    assets: Yup.string().required('Assets are required'),
    liabilities: Yup.string().required('Liabilities are required'),
    bankAccounts: Yup.string().required('Current Bank Accounts are required'),
  
    // Ownership and Management
    ownerInfo: Yup.string().required('Owner Information is required'),
    managementTeam: Yup.string().required('Management Team is required'),
  
    // Loan Information
    loanAmount: Yup.number().typeError('Amount must be a number')
    .required("Loan Amount is required.")
    .min(0, "Too little")
    .max(5000, 'Very costly!'),
    loanPurpose: Yup.string().required('Purpose of Loan is required'),
    repaymentPlan: Yup.string().required('Repayment Plan is required'),
  
    // Business Operations
    yearsInBusiness: Yup.number().typeError('Amount must be a number')
    .required("Years In Business is required.")
    .min(0, "Too little")
    .max(5000, 'Very costly!'),
    numberOfEmployees: Yup.number().typeError('Amount must be a number')
    .required("Number Of Employees is required.")
    .min(0, "Too little")
    .max(5000, 'Very costly!'),
    keyCustomers: Yup.string().required('Key Customers are required'),
  
    // Compliance and Legal
    licenses: Yup.string().required('Licenses and Permits are required'),
    legalIssues: Yup.string().required('Legal Issues is required'),
  
    // Additional Information
    financialProjections: Yup.string().required('Financial Projections are required'),
    businessPlan: Yup.string().required('Business Plan is required'),
    references: Yup.string().required('References are required'),
});

const LoanApplicationForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log('Form Submitted:', data);
        reset();  // Clear form after submission
    };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-lg my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Loan Application Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
                <h2 className="text-xl font-semibold">Company Information</h2>
            </div>
            <div className="sm:col-span-1">
                <label htmlFor="companyName" className="block">
                    Company Name
                </label>
                <input
                    id="companyName"
                    type="text"
                    {...register("companyName")}
                    className="w-full p-2 border rounded-md"
                />
                {errors.companyName && (
                    <p className="text-red-500">{errors.companyName.message}</p>
                )}
            </div>
            <div className="sm:col-span-1">
                <label className="block">Business Structure</label>
                <input
                    type="text"
                    {...register('businessStructure')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.businessStructure?.message}</p>
            </div>
            {/* Industry */}
            <div className="sm:col-span-1">
                <label htmlFor="industry" className="block">
                    Industry
                </label>
                <input
                    id="industry"
                    type="text"
                    {...register("industry")}
                    className="w-full p-2 border rounded-md"
                />
                {errors.industry && (
                    <p className="text-red-500">{errors.industry.message}</p>
                )}
            </div>
            
            <div className="sm:col-span-1">
                <label htmlFor="location" className="block">
                    Location
                </label>
                <input
                    id="location"
                    type="text"
                    {...register("location")}
                    className="w-full p-2 border rounded-md"
                />
                {errors.location && (
                    <p className="text-red-500">{errors.location.message}</p>
                )}
            </div>
            <div className="sm:col-span-1">
                <label htmlFor="contactInfo" className="block">
                    Contact Information
                </label>
                <input
                    id="contactInfo"
                    type="date"
                    {...register("contactInfo")}
                    className="w-full p-2 border rounded-md"
                />
                {errors.contactInfo && (
                    <p className="text-red-500">{errors.contactInfo.message}</p>
                )}
            </div>
            
            <div className="sm:col-span-2">
                <h2 className="text-xl font-semibold">Financial Information</h2>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Business Revenue</label>
                <input
                    type="number"
                    {...register('businessRevenue')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.businessRevenue?.message}</p>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Net Profit</label>
                <input
                    type="number"
                    {...register('netProfit')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.netProfit?.message}</p>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Assets</label>
                <input
                    type="text"
                    {...register('assets')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.assets?.message}</p>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Liabilities</label>
                <input
                    type="text"
                    {...register('liabilities')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.liabilities?.message}</p>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Current Bank Accounts</label>
                <input
                    type="text"
                    {...register('bankAccounts')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.bankAccounts?.message}</p>
            </div>

            <div className="sm:col-span-2">
                <h2 className="text-xl font-semibold">Ownership and Management</h2>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Owner Information</label>
                <input
                    type="text"
                    {...register('ownerInfo')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.ownerInfo?.message}</p>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Management Team</label>
                <input
                    type="text"
                    {...register('managementTeam')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.managementTeam?.message}</p>
            </div>

            <div className="sm:col-span-2">
                <h2 className="text-xl font-semibold">Loan Information</h2>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Loan Amount Requested</label>
                <input
                    type="number"
                    {...register('loanAmount')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.loanAmount?.message}</p>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Purpose of Loan</label>
                <input
                    type="text"
                    {...register('loanPurpose')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.loanPurpose?.message}</p>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Repayment Plan</label>
                <input
                    type="text"
                    {...register('repaymentPlan')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.repaymentPlan?.message}</p>
            </div>

            <div className="sm:col-span-2">
                <h2 className="text-xl font-semibold">Business Operations</h2>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Years in Business</label>
                <input
                    type="number"
                    {...register('yearsInBusiness')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.yearsInBusiness?.message}</p>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Number of Employees</label>
                <input
                    type="number"
                    {...register('numberOfEmployees')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.numberOfEmployees?.message}</p>
            </div>
            <div className="sm:col-span-1">
            <label className="block">Key Customers</label>
                <input
                    type="text"
                    {...register('keyCustomers')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.keyCustomers?.message}</p>
            </div>

            <div className="sm:col-span-2">
                <h2 className="text-xl font-semibold">Compliance and Legal</h2>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Licenses and Permits</label>
                <input
                    type="text"
                    {...register('licenses')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.licenses?.message}</p>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Legal Issues</label>
                <input
                    type="text"
                    {...register('legalIssues')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.legalIssues?.message}</p>
            </div>

            <div className="sm:col-span-2">
                <h2 className="text-xl font-semibold">Additional Information</h2>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Financial Projections</label>
                <input
                    type="text"
                    {...register('financialProjections')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.financialProjections?.message}</p>
            </div>
            <div className="sm:col-span-1">
                <label className="block">Business Plan</label>
                <input
                    type="text"
                    {...register('businessPlan')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.businessPlan?.message}</p>
            </div>
            <div className="sm:col-span-1">
                <label className="block">References</label>
                <input
                    type="text"
                    {...register('references')}
                    className="w-full p-2 border rounded-md"
                />
                <p className="text-red-600">{errors.references?.message}</p>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </div>
        </div>
      </form>
    </div>
  );
};

export default LoanApplicationForm;
