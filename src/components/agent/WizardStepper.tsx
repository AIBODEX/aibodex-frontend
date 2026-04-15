import { ClipboardList, Image as ImageIcon, Home, ListChecks } from 'lucide-react';

interface WizardStepperProps {
  currentStep: number;
}

const steps = [
  { 
    id: 1, 
    label: 'Documents', 
    icon: ClipboardList,
    title: 'Document Upload',
    subtitle: 'Upload clear, valid documents for AI-driven fraud prevention',
    progress: 25
  },
  { 
    id: 2, 
    label: 'Multimedia', 
    icon: ImageIcon,
    title: 'Upload Media',
    subtitle: 'High quality images boost visibility for potential buyers',
    progress: 50
  },
  { 
    id: 3, 
    label: 'Details', 
    icon: Home,
    title: 'Property Details',
    subtitle: 'Provide accurate details to attract the right audience',
    progress: 75
  },
  { 
    id: 4, 
    label: 'Review', 
    icon: ListChecks,
    title: 'Review Your Listing',
    subtitle: 'Check all details before publishing',
    progress: 100
  }
];

const WizardStepper = ({ currentStep }: WizardStepperProps) => {
  const currentStepData = steps.find(s => s.id === currentStep) || steps[0];

  return (
    <div className="w-full bg-[#F9FAFB] rounded-[24px] border border-gray-100 p-8 mb-8">
      
      {/* Stepper Top Row */}
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between relative mb-12">
        {/* Background Grey Line */}
        <div className="absolute left-0 right-0 top-[24px] h-[2px] bg-gray-200 z-0" />
        
        {/* Active Green Line */}
        <div 
          className="absolute left-0 top-[24px] h-[2px] bg-[#11B880] z-0 transition-all duration-500 ease-in-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = currentStep >= step.id;
          const isCurrent = currentStep === step.id;
          
          return (
            <div key={step.id} className="flex flex-col items-center bg-[#F9FAFB] px-2 relative z-10 w-24">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 border-4 border-[#F9FAFB] ${
                  isActive ? 'text-[#11B880] bg-[#EAF8F3]' : 'text-gray-400 bg-gray-100'
                }`}
              >
                <Icon className="w-[22px] h-[22px]" />
              </div>
              <span className={`text-[13px] font-medium absolute -bottom-6 whitespace-nowrap ${
                isCurrent ? 'text-[#1E1E1E]' : 'text-gray-500'
              }`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Stepper Bottom Content */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-10">
        <div>
          <h2 className="text-[20px] font-medium text-[#1E1E1E] mb-1">{currentStepData.title}</h2>
          <p className="text-[14px] text-gray-500">{currentStepData.subtitle}</p>
        </div>
        
        {/* Small Progress Bar */}
        <div className="w-full sm:w-[240px]">
          <div className="w-full bg-gray-200 rounded-full h-1.5 flex overflow-hidden">
            <div 
              className="bg-[#11B880] h-full transition-all duration-500 ease-in-out" 
              style={{ width: `${currentStepData.progress}%` }}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default WizardStepper;
