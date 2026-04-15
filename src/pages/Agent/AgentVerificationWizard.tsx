import { useState } from 'react';
import AgentSidebar from '../../components/agent/AgentSidebar';
import AgentHeader from '../../components/agent/AgentHeader';
import WizardStepper from '../../components/agent/WizardStepper';
import UploadDocumentsStep from '../../components/agent/UploadDocumentsStep';
import UploadMediaStep from '../../components/agent/UploadMediaStep';
import PropertyDetailsStep from '../../components/agent/PropertyDetailsStep';
import ReviewListingStep from '../../components/agent/ReviewListingStep';

const AgentVerificationWizard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Quick navigation helpers for the mockup interactivity
  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Sidebar Navigation */}
      <AgentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Main Content Area */}
      <main className="lg:ml-[260px] min-h-[100vh] transition-all duration-300 flex flex-col relative pb-24">
        <div className="p-4 md:p-8 max-w-[1400px] mx-auto w-full flex-1 flex flex-col">
          
          {/* Header */}
          <AgentHeader 
            title="Verify a new property."
            subtitle="Manage your property journey and verification request"
            searchPlaceholder="Search any leads by username"
            actionButtonText="Submit for verification"
            actionButtonLink="#"
          />
          
          <div className="w-full flex-1 mt-4">
            <WizardStepper currentStep={currentStep} />
            
            {/* Step Content */}
            <div className="transition-opacity duration-300">
              {currentStep === 1 && <UploadDocumentsStep />}
              {currentStep === 2 && <UploadMediaStep />}
              {currentStep === 3 && <PropertyDetailsStep />}
              {currentStep === 4 && <ReviewListingStep />}
            </div>
          </div>
          
        </div>
        
        {/* Mockup Prev/Next navigation strictly for testing the flow visually without full routing logic built into the buttons themselves. (Can optionally be removed if user wants child buttons to trigger it exclusively, but useful for testing). */}
        <div className="fixed bottom-0 right-0 lg:left-[260px] p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 flex items-center justify-between z-10 px-8">
          <button 
            onClick={handlePrev} 
            disabled={currentStep === 1}
            className={`px-6 py-2.5 rounded-lg text-[14px] font-medium border ${currentStep === 1 ? 'border-gray-100 text-gray-300 bg-gray-50' : 'border-gray-200 text-gray-700 hover:bg-gray-50 bg-white'}`}
          >
            Go Back
          </button>
          
          {currentStep < 4 && (
            <button 
              onClick={handleNext}
              className="px-6 py-2.5 bg-[#11B880] hover:bg-[#0e9f6e] text-white rounded-lg text-[14px] font-medium"
            >
              Continue Next Step
            </button>
          )}
        </div>

      </main>
    </div>
  );
};

export default AgentVerificationWizard;
