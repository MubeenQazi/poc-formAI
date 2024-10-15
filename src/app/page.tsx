import dynamic from 'next/dynamic'
 
const LoanApplicationForm = dynamic(
  () => import('@/components/LoanApplicationForm'),
  { ssr: false }
)

export default function Home() {
  return (
    <LoanApplicationForm />
  );
}
